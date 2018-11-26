// Activate the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    let swPath = `/service-worker.js`;
    navigator.serviceWorker.register(swPath);
  });
}
