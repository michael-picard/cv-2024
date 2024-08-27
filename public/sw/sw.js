console.log('hello?')

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-v1')
            .then(cache => cache.addAll([
                '/offline.html'
            ]))
    )
})

self.addEventListener('fetch', event => {
    console.log('fetch event', event)
    event.respondWith(
        caches.match(event.request)
            .then(reponse => reponse || fetch(event.request))
            .catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('/offline.html')
                }
            })
    )
})
