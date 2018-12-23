const sendMessage = (serviceWorker, message) => {
  return new Promise(function(resolve, reject) {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = function(event) {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };

    serviceWorker.postMessage(message, [messageChannel.port2]);
  });
};
