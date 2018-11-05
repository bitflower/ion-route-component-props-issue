importScripts("workbox-v3.4.1/workbox-sw.js");

self.addEventListener("message", e => {
	if (!e.data) {
		return;
	}

	console.log(e.data.message);

	if (e.data.message === "skipWaiting") {
		self.workbox.skipWaiting();
	}
});

// inject precache manifest
self.workbox.precaching.precacheAndRoute([]);
