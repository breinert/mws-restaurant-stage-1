const staticCacheName = 'v1';
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];
//install the service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(cacheFiles);
      })
  );
});

//return cached information
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if(response) {
          return response;
        }
        //clone the request
        let fetchRequest = event.request.clone();
        return fetch(fetchRequest)
          .then(function(response) {
            //check for a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              console.log(response);
              return response;
            }
            //clone the response
            let responseToCache = response.clone();
            caches.open(staticCacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(function(err) {
            console.error('error', err);
          })
    })
  );
});

//update and manage the cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(cacheName != staticCacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('message', function(event) {
  if(event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});