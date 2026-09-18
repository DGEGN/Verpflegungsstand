// Minimaler Service Worker – wird nur benötigt, damit Chrome die Seite als
// installierbare App erkennt ("Zum Startbildschirm hinzufügen" / "App
// installieren" mit eigenem Icon statt nur als Lesezeichen). Er cached
// bewusst nichts, damit immer die aktuelle Version geladen wird.
self.addEventListener("install", () => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", () => {
  // Kein Caching – einfach normal ans Netzwerk durchreichen.
});
