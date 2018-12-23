// This could be in our test directly or imported using importScripts();
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const promiseChain = self.registration.showNotification(data.title, data);
  event.waitUntil(promiseChain);
});


describe('First SW Test Suite', function() {
  it('should be able to test a push event', function() {
    const pushData = {
      title: 'Example Title.',
      body: 'Example Body.',
    };

    return new Promise((resolve, reject) => {
      const fakePushEvent = new PushEvent('push', {
        data: JSON.stringify(pushData),
      });

      // Override waitUntil so we can detect when the notification
      // has been show by the push event.
      fakePushEvent.waitUntil = (promise) => {
        promise.then(resolve, reject);
      };

      self.dispatchEvent(fakePushEvent);
    })
    .then(() => {
      return self.registration.getNotifications();
    })
    .then((notifications) => {
      if (notifications.length !== 1) {
        throw new Error('Unexpected number of notifications shown.');
      }

      if (notifications[0].title !== pushData.title) {
        throw new Error('Unexpected notification title.');
      }

      if (notifications[0].body !== pushData.body) {
        throw new Error('Unexpected notification body.');
      }
    });
  });
});
