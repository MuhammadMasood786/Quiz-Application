// var CACHE_NAME = 'cacheFile';
// var urlsToCache = [
//     '/facicon.ico',
//     '/logo192.png',
//     'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&category=',
//     '/',
//     // '/favicon.ico',
//     // '/static/js/bundle.js',
//     // '/static/js/0.chunk.js',
//     // '/static/js/main.chunk.js',
//     // '/index.html',
//     // '/src/App.test.tsx'
// ];

// this.addEventListener('install', function (event) {
//     // Perform install steps
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function (cache) {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// this.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 return fetch(event.request);
//             }
//             )
//     );
// });


const cacheName = 'CacheFiles';
const assets = [
    '/',
    // '/favicon.ico',
    // '/logo192.png',
    // '/static/js/bundle.js',
    // '/favicon.ico',
    // '/manifest.json',
    // '/static/js/0.chunk.js',
    // '/static/js/main.chunk.js',
    '/index.html',
    // '/src/App.test.tsx',
    'https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple'

];


this.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

this.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(assets);
        })
    );
});

this.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(cacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    );
});