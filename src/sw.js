importScripts("workbox-v3.4.1/workbox-sw.js");

self.addEventListener("message", e => {
	if (e.data === "skipWaiting") {
		self.skipWaiting();
	}
});

// inject precache manifest
self.workbox.precaching.precacheAndRoute([]);
