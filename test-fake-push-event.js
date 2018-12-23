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
    // TODO: Test what the push event had done
  })
});
