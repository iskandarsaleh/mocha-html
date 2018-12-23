app.use('/', express.static(rootDirectory, {
  setHeaders: (res) => {
    res.setHeader('Service-Worker-Allowed', '/');
  },
}));
