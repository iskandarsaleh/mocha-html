self.addEventListener('push', (event) => {
  const data = event.data.json();
  const promiseChain = self.registration.showNotification(data.title, {
    body: data.body,
  });
  event.waitUntil(promiseChain);
});
