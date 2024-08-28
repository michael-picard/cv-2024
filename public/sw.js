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
            .catch(async () => {
                if (event.request.mode === 'cors') {
                    // Exit early if we don't have access to the client (if it's cross-origin)
                    if (!event.clientId) return;
                    // Get the client.
                    const client = await self.clients.get(event.clientId);
                    // Exit early if we don't get the client (if it closed)
                    if (!client) return;
                    console.log(event.request)
                    client.postMessage('offline')
                }
                // if (event.request.mode === 'navigate') {
                //     console.log(event)
                //     return Response.redirect('/offline.html',302)
                // }
            })
    )
})
