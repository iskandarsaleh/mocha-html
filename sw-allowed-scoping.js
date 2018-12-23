// OK when ‘Service-Worker-Allowed’ header is set to ‘/’
navigator.serviceWorker.register(‘/blog/sw.js’, {scope: ‘/’});
