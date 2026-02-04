const sw = globalThis;

const CACHE_NAME = 'v1_cache_pwa';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

sw.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

sw.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
