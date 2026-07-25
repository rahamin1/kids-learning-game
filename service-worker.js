const CACHE_NAME = "brightwood-pwa-local200";
const CORE_FILES = [
  "./",
  "./index.html",
  "./updates.html",
  "./remove-updates.html",
  "./updates-pending.html",
  "./updates-confirmed.html",
  "./styles.css?build=local200",
  "./games.js?build=local200",
  "./app.js?build=local200",
  "./manifest.webmanifest?v=0.1.28",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png",
  "./assets/app-icon-star-forest.png",
  "./assets/buddy-dog.svg",
  "./assets/buddy-cat.svg",
  "./assets/buddy-owl.svg",
  "./assets/buddy-penguin.svg",
  "./assets/buddy-squirrel.svg",
  "./assets/buddy-hedgehog.svg",
  "./assets/buddy-bear.svg",
  "./assets/buddy-raccoon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  if(event.request.mode === "navigate"){
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(response => response || caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy));
      return response;
    }))
  );
});
