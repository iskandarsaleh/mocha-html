it('should register install, activate and fetch event listeners', function() {
  const eventsListenedTo = [];
  global.self = {
    // Mock methods here
    addEventListener: (eventName, cb) => {
      eventsListenedTo.push(eventName);
    },
  };
  const myServiceWorkerLib = new Lib();
  myServiceWorkerLib.setUpEventListeners();
  eventsListenedTo.should.deep.equal(['install', 'activate', 'fetch']);
});
