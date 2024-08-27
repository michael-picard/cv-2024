self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-v1')
            .then(cache => cache.addAll([
                '/offline.html'
            ]))
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(reponse => reponse || fetch(event.request))
            .catch(() => {
                if (event.request.mode === 'cors') {
                    console.log(event.request)
                }
            })
    )
})
