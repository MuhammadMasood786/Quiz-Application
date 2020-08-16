var CACHE_NAME = 'cacheFile';
var urlsToCache = [
    // '/manifest.json',
    'https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple',
    '/',
    '/favicon.ico',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/index.html',
    '/src/App.test.tsx'
];

this.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});