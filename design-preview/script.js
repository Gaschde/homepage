document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

function closeMenu(returnFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'Navigation öffnen';
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Navigation schließen' : 'Navigation öffnen';
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  const wasOpen = navigation.classList.contains('is-open');
  closeMenu();
  if (!wasOpen || !link.hash) return;
  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  if (!target) return;
  requestAnimationFrame(() => {
    const hadTabindex = target.hasAttribute('tabindex');
    if (!hadTabindex) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (!hadTabindex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
});

document.addEventListener('click', (event) => {
  if (navigation.classList.contains('is-open') && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

menuButton.addEventListener('focusout', (event) => {
  if (navigation.classList.contains('is-open') && !navigation.contains(event.relatedTarget) && event.relatedTarget !== menuButton) closeMenu();
});
navigation.addEventListener('focusout', (event) => {
  if (navigation.classList.contains('is-open') && !navigation.contains(event.relatedTarget) && event.relatedTarget !== menuButton) closeMenu();
});

const track = document.querySelector('.process-track');
const steps = [...track.querySelectorAll('.process-step')];
const marker = track.querySelector('.process-marker');
const exampleSource = document.querySelector('#process-example-source');
const exampleText = document.querySelector('#process-example-text');
const examples = [
  { source: 'INOVIS Live Automation', text: 'Ich betreute Bestandskunden und begleitete technische Anfragen bis zur Bestellung.' },
  { source: 'Sigren Engineering AG', text: 'Ich führte Informationen von Kunden, Verkauf, Technik und Projektumfeld zusammen und bereitete Kundengespräche vor.' },
  { source: 'Sigren Engineering AG', text: 'Ich erstellte Angebote, Vorkalkulationen und technische Zusatzunterlagen für Automationsprojekte.' },
  { source: 'Netcloud AG', text: 'Ich wickelte Aufträge bis zur Verrechnung ab und koordinierte Wartungsverträge, Vertragsverlängerungen und RMA-Fälle.' },
];

function positionMarker() {
  const selected = steps.findIndex((step) => step.querySelector('input').checked);
  const first = steps[0];
  const current = steps[selected];
  const vertical = window.matchMedia('(max-width: 760px)').matches;
  const distance = vertical ? current.offsetTop - first.offsetTop : current.offsetLeft - first.offsetLeft;
  marker.style.transform = vertical ? `translateY(${distance}px)` : `translateX(${distance}px)`;
}

track.addEventListener('change', () => {
  positionMarker();
  const selected = steps.findIndex((step) => step.querySelector('input').checked);
  exampleSource.textContent = examples[selected].source;
  exampleText.textContent = examples[selected].text;
});
window.addEventListener('resize', positionMarker);
positionMarker();

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-22% 0px -68% 0px' });
  sections.forEach((section) => observer.observe(section));
}
