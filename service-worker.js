// オフラインキャッシュ不要 → 空のSWでOK
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());
