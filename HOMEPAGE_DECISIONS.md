# Homepage: Entscheidungen und Projektstand

**Zuletzt aktualisiert:** 2026-09-23
**Zweck:** Knappe, chatübergreifende Quelle für bestätigte Homepage-Entscheidungen, ausgeschlossene Richtungen und den nächsten Arbeitsschritt. Kein Gesprächsprotokoll.

## Aktueller Stand

- Die Homepage ist Yeshe Sampas persönliche Bewerbungs- und Portfolioseite.
- `index.html` im Repository-Hauptordner ist der einzige Homepage-Einstiegspunkt und enthält den neuesten bestätigten Stand.
- `dist/` enthält die dazugehörigen Assets: Stylesheet, JavaScript, Porträt und PDFs. Die Hauptseite lädt diese Dateien über relative `dist/...`-Pfade.
- `dist/` ist damit ein Asset-Ordner, kein Veröffentlichungs-Einstieg. Die doppelte `dist/index.html`, `dist/vorschau/`, `design-preview/`, `.openai/hosting.json` und `.superdesign/`-Projektdateien wurden aus der lokalen Arbeitskopie entfernt.
- GitHub Pages soll den Repository-Hauptordner auf Branch `main` veröffentlichen. **Veröffentlichungsstatus UNCONFIRMED:** Die Pages-Einstellung und öffentliche Erreichbarkeit wurden noch nicht geprüft. Die vorhandene Sites-Seite bleibt extern unverändert und wird von diesem Repository nicht mehr benötigt.
- Die Umstellung wurde auf Branch `main` in Commit `e0f784e` nach `origin/main` gepusht.
- Das inhaltliche Homepage-Upgrade ist **geplant, noch nicht umgesetzt**. Die aktuelle lokale Änderung bereinigt nur Seitenstruktur und Veröffentlichungsbasis.
- Die lokale Arbeitskopie enthält weiterhin den untracked Ordner `.codex-remote-attachments/`; er gehört nicht zu dieser Änderung und darf nicht verändert oder aufgenommen werden.

## Ziel und Positionierung

- Zielrollen: Inside Sales, Sales Support und technischer Verkauf, besonders bei IT- und Softwareunternehmen.
- Die Seite soll Yeshe als Person und Bewerber hervorheben, nicht wie eine IT-Firma oder ein Developer-Portfolio wirken.
- Zentrale Kombination: technische Verkaufserfahrung und Kundenverständnis plus ein systematischer, reflektierter Einsatz von KI.
- CV, Erfahrung, Profil und Kontakt müssen schnell auffindbar bleiben. Desktop hat aktuell Priorität; Lesbarkeit, Bedienbarkeit und Zugänglichkeit dürfen auf Mobilgeräten dennoch nicht brechen.

## Bestätigte Richtung für das nächste Upgrade

Die gewählte Richtung verbindet Astras inhaltliche Prioritäten mit den visuellen und interaktiven Ideen der bisherigen Experten:

1. **Verkaufsbelege greifbarer machen.** Einen konkreten, wahrheitsgetreuen Fall aus der Berufspraxis priorisieren: Ausgangslage, Yeshes Verantwortung und eigener Beitrag; ein Ergebnis nur nennen, wenn es belegt und zur Veröffentlichung freigegeben ist.
2. **Wiederholungen kürzen.** Sidestep, KI-Methode und den Transfer in den IT-/Verkaufsalltag knapp miteinander verbinden, statt denselben Gedanken in mehreren langen Abschnitten zu wiederholen.
3. **Die „Denkspur“ visuell integrieren.** Beobachtung → Klärung → Entscheidung kann als wiederkehrendes grafisches Motiv die tatsächlichen Beispiele verbinden. Dafür keinen zusätzlichen langen Erklärblock hinzufügen.
4. **Gezielte Visuals und Motion ergänzen.** Eine markante, persönliche Gestaltung und wenige sinnvolle Interaktionen sind erwünscht. Bewegung soll Orientierung oder Verständnis unterstützen und eine ruhige, statische Alternative bei reduzierter Bewegung behalten.
5. **Tom Sears nur als Referenz nutzen.** Relevant sind einzelne Struktur- und Interaktionsideen; weder Layout noch Stil sollen kopiert werden.

## Sidestep und KI: korrekte Darstellung

- Sidestep ist ein konkretes Beispiel für Yeshes systematische Problemanalyse und den Einsatz von KI-Agenten.
- Seine Denkweise lässt sich als Problem → Messung → Hypothese/Gegenhypothese → Experiment → Ergebnis → nächste Entscheidung beschreiben.
- Der aktuelle Prüfstand zeigt mögliche Erklärungen und vorgeschlagene Tests. Er darf nicht als Nachweis bereits ausgeführter Experimente oder gemessener Resultate beschrieben werden, sofern diese nicht separat bestätigt sind.
- Die technische Implementierung in Sidestep erfolgt durch KI-/Coding-Agenten. Yeshe beansprucht keine selbständige Softwareentwicklungs- oder Programmiererfahrung.
- KI-Orchestrierung und kritische Nutzung dürfen als praktische Stärke sichtbar sein. Keine unbelegte Rangbehauptung wie „besser als 95 % der Nutzer“ verwenden.

## Ausgeschlossene oder nicht beschlossene Richtungen

- Generisches Portfolio- oder SaaS-Template, typische Developer-Portfolio-Optik, austauschbare Bento-/Card-Grids, übermäßig abgerundete Karten, beliebige Neon-/Gradient-Optik oder Effekte nur um ihrer selbst willen.
- Die Homepage als IT-Firma, Softwareprodukt oder persönliche Software-Engineering-Seite inszenieren.
- Sidestep zum alleinigen Hauptthema machen oder den Verkaufshintergrund dahinter verschwinden lassen.
- Unbelegte Umsatz-, Leistungs- oder Projektergebnisse erfinden; Kennzahlen und heikle Details erst nach Prüfung und Freigabe veröffentlichen.
- Lange, redundante Erklärungen zur KI-Praxis oder ein zusätzlicher Denkspur-Abschnitt, der bestehende Inhalte nochmals erzählt.
- Überladene Animationen, 3D/WebGL als Selbstzweck oder Interaktionen, die CV, Erfahrung, Profil oder Kontakt verstecken.
- CV-/PDF-Inhalte ohne ausdrücklichen Auftrag ändern.

## Arbeitsweise und Veröffentlichung

- `index.html` ist die maßgebliche Seitenquelle; Assets werden direkt aus `dist/` geladen. Es gibt keine zusätzliche `design-preview/`-Kopie oder Vergleichsroute.
- Für substanzielles Homepage-Redesign die Arbeit nach `AGENTS.md` isoliert in einem Codex-Worktree beginnen. Keine parallelen Designvarianten, solange Yeshe sie nicht ausdrücklich beauftragt.
- GitHub Pages soll Branch `main` aus dem Repository-Hauptordner veröffentlichen. Die dafür nötige Repository-Einstellung muss noch geprüft beziehungsweise aktiviert werden. Auf GitHub Pages veröffentlichte Inhalte sind öffentlich.
- Vor einem neuen Chat: `AGENTS.md` und diese Datei lesen, den tatsächlichen Git-Stand prüfen und den konkreten Auftrag nennen. Diese Datei bei bestätigten Entscheidungen oder relevantem Fortschritt aktualisieren.

## Offen für die nächste Planungsrunde

- Welcher konkrete Verkaufsfall zeigt Yeshes Beitrag am glaubwürdigsten? Fakten, Zeitraum, Kennzahlen und gewünschte Veröffentlichung vor Verwendung prüfen.
- GitHub-Pages-Einstellung für `main` / Repository-Hauptordner prüfen und danach öffentliche Erreichbarkeit testen.
- Nach Umsetzung: gerenderte Desktop- und Mobilansicht sowie Tastaturbedienung und reduzierte Bewegung prüfen. Die bisherigen Scores (ungefähr 79–82 aktuell, 86–89 als Upgrade-Prognose) sind subjektive Schätzungen, keine Abnahmekriterien.
