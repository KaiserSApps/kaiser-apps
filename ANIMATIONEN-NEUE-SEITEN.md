# Kaiser Studio – Animationen für neue Seiten

Alle bestehenden Seiten nutzen die gemeinsamen Dateien:
- `assets/kaiser-studio-effects.css`
- `assets/kaiser-studio-effects.js`

In jeder neuen HTML-Seite im `<head>` einbinden:

```html
<link rel="stylesheet" href="assets/kaiser-studio-effects.css">
```

Unmittelbar vor `</body>` ergänzen:

```html
<script defer src="assets/kaiser-studio-effects.js"></script>
```

Die Effekte werden automatisch aktiviert. Die Titelbereiche sollten die CSS-Klasse
`.hero` oder `.top` verwenden. App-Karten mit `.app`, `.card` oder `.feature`
erhalten dezente Hover- und Einblendeffekte.

Die CSS- und JS-Dateien sollten auch für spätere Apps wiederverwendet werden.
Für neue Apps die Farbvariablen als eigenes `body.ks-page-...`-Theme im gemeinsamen CSS definieren und die Klasse im gemeinsamen JS anhand der neuen Dateiadresse setzen. Die Lichtpunkte, Lichtringe und Hintergrundwolken übernehmen dann automatisch die passende Farbpalette. Die Einstellung
„Bewegung reduzieren“ wird respektiert.

Wichtig: Impressum und Datenschutzhinweise sind aktuell noch Entwürfe und müssen
vor einer regulären geschäftlichen Veröffentlichung vervollständigt werden.
