/* Equilyze Service Worker — offline app shell cache */
const CACHE = 'equilyze-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    // Canlı veri API'lerini (Binance/CoinGecko) asla önbellekleme — her zaman ağdan
    if (url.hostname.includes('binance.com') || url.hostname.includes('coingecko.com') || url.hostname.includes('alternative.me')) {
        return; // tarayıcının normal ağ isteğine bırak
    }
    // Uygulama kabuğu: ağ-önce, başarısızsa önbellek (offline)
    if (req.mode === 'navigate' || url.origin === self.location.origin) {
        e.respondWith(
            fetch(req).then((res) => {
                const copy = res.clone();
                caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
                return res;
            }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
        );
    }
});
