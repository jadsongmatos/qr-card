const PRECACHE = "precache-v2";
const RUNTIME = "runtime";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "https://cdn.nubank.com.br/fonts/Graphik/variants/Graphik-Regular.woff2",
];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener("activate", (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (!currentCaches.includes(cache)) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Interceptação de requisições
self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;

        return caches.open(RUNTIME).then((cache) =>
          fetch(event.request).then((response) => {
            return cache.put(event.request, response.clone()).then(() => response);
          })
        );
      })
    );
  }
});
