self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('wisdom-app').then(function(cache) {
     return cache.addAll([
       './',
      //  './index.html',
      //  './index.html?homescreen=1',
      //  './?homescreen=1',
      //  './js/app.min.js',
      //  './css/style.min.css',
      //  './img'
     ]);
   })
 );
});

// Intercept the web page requests
self.addEventListener('fetch', function(event) {
  // console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });