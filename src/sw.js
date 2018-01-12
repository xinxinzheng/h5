console.log(12);
this.addEventListener('install', function(event) {
    console.log('start install');
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/src/',
                '/src/index.js',
                '/src/print.js',
                '/src/shared_worker.js',
                '/src/sw.js',
            ]);
        })
    );
});