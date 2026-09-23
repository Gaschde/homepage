# Shared layout

There are no separate layout component files. The single static page contains the following header and footer markup.

## Header from dist/index.html
``html
<header class="site-header">
    <a class="brand" href="#start" aria-label="Zur Startseite"><span>YS</span> Yeshe Sampa</a>
    <button class="menu" aria-expanded="false" aria-controls="navigation">Menü</button>
    <nav id="navigation" aria-label="Hauptnavigation">
      <a href="#profil">Profil</a><a href="#projekte">Projekt</a><a href="#kontakt">Kontakt</a><a class="nav-download" href="downloads/Yeshe-Sampa-CV-Aktuell.pdf" download>CV ↓</a>
    </nav>
  </header>
`` 

## Footer from dist/index.html
``html
<footer><span>© <span id="year"></span> Yeshe Sampa</span><a href="#start">Nach oben ↑</a></footer>
``
