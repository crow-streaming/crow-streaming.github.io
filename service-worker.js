const CACHE_NAME='twitch-viewer-cache-v1';
const urlsToCache=['./index.html','./viewer.html','./tmi.min.js','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
