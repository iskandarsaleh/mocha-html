self.addEventListener('push', function(event) {
  let pushData = null;
  if (event.data) {
    pushData = event.data.text();
  }

  // Send message to page
  const promiseChain = self.clients.matchAll({
    includeUncontrolled: true
  })
  .then(function(clients) {
    const sendMsgPromises = clients.map(function(client) {
      return client.postMessage(pushData);
    });
    return Promise.all(sendMsgPromises);
  });
  event.waitUntil(promiseChain);
});
