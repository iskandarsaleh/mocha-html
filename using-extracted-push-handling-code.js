importScripts(‘/<Path to library file>.js’);

self.addEventListener('push', (event) => {
  self._handlePushEvent(event);
});
