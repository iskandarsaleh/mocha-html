// OK
navigator.serviceWorker.register(‘/blog/sw.js’, {scope: ‘/blog/article/’});

// Not OK
navigator.serviceWorker.register(‘/blog/sw.js’, {scope: ‘/’});

// Not OK
navigator.serviceWorker.register(‘/blog/sw.js’, {scope: ‘/about/’});
