/*
  Estrutura inicial de Service Worker para POMOTasks.

  TODOs principais:
  1) Definir lista de arquivos essenciais para cache offline.
  2) Versionar cache para facilitar atualização.
  3) Implementar estratégia de fetch (Cache First / Network First).
*/

const CACHE_NAME = 'pomotasks-v1';
const APP_SHELL_FILES = [
  // Exemplo: '/', '/index.html', '/css/style.css', '/js/app.js'
];

self.addEventListener('install', (event) => {
  // TODO: Pré-cache de arquivos essenciais.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // TODO: Limpar caches antigos quando houver mudança de versão.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (_event) => {
  // TODO: Implementar estratégia de resposta para modo offline, por exemplo:
  // _event.respondWith(fetch(_event.request));
});
