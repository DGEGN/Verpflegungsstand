# Küchenmonitor

Eine Seite (`index.html`), vier Ansichten über die URL:

- `#kasse` — Bestellung eintippen, zeigt Artikel mit Preis und Menge, sendet die Bestellung
- `#artikel` — Artikel-Stammdaten pflegen (Name, Kategorie Essen/Getränk, Preis)
- `#monitor-getraenke` — eigener Monitor für den Getränkebereich, hakt nur Getränke ab
- `#monitor-essen` — eigener Monitor für den Grill/Essensbereich, hakt nur Essen ab

Jede Bestellung wird beim Absenden automatisch nach Kategorie aufgeteilt.
Ein Monitor sieht ausschließlich seine Kategorie und markiert sie unabhängig
vom anderen Bereich als fertig.

## Einrichtung

1. **Firebase-Projekt anlegen** (falls noch nicht vorhanden): [console.firebase.google.com](https://console.firebase.google.com) → neues Projekt → **Firestore Database** aktivieren (Produktionsmodus reicht, die Regeln werden gleich ersetzt).
2. In den Projekteinstellungen unter **Your apps** eine Web-App hinzufügen und die angezeigten Config-Werte kopieren.
3. In `index.html` den Block `window.firebaseConfig = {...}` mit diesen Werten füllen.
4. Firestore-Regeln aus `firestore.rules` in der Firebase-Konsole unter **Firestore Database → Regeln** einfügen und veröffentlichen.

## Auf GitHub veröffentlichen

1. Neues GitHub-Repo anlegen, `index.html`, `firestore.rules` und dieses `README.md` hochladen (oder per `git push`).
2. Im Repo unter **Settings → Pages** als Quelle den `main`-Branch, Ordner `/root` auswählen.
3. Nach kurzer Zeit ist die App unter `https://DEIN-NUTZERNAME.github.io/DEIN-REPO/` erreichbar — die Unterseiten entsprechend `.../#kasse`, `.../#artikel`, `.../#monitor-getraenke`, `.../#monitor-essen`.

## Für den Betrieb

- Den Küchenmonitor-Rechner/Tablet direkt mit `#monitor-essen` bzw. `#monitor-getraenke` öffnen und im Vollbild lassen.
- Die Kasse nutzt `#kasse` auf dem Handy.
- Die Firestore-Regeln sind für den schnellen Start offen (jeder mit dem Link kann schreiben). Sobald ihr produktiv geht, empfiehlt sich eine Absicherung wie bei der Fahrgastzähler-App.
