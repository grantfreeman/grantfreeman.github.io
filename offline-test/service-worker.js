const cacheName = 'v1'
const cachedFiles = [
    '/',
    '/service-worker.html',
    '/web-storage.html'
];

// install event - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('opened cache')
            return cache.addAll(cachedFiles)
        })
    );
});

// activate event - clean old files


// fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    );
});