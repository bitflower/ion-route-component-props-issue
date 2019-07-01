importScripts("workbox-v4.3.1/workbox-sw.js");

self.addEventListener("message", e => {
	if (e.data === "skipWaiting") {
		self.skipWaiting();
	}
});

// inject precache manifest
self.workbox.precaching.precacheAndRoute([]);
