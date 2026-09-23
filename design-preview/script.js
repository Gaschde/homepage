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
  closeMenu(wasOpen && !link.hash);
  if (!wasOpen || !link.hash) return;
  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  if (!target) {
    menuButton.focus();
    return;
  }
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
const nodes = steps.map((step) => step.querySelector('.process-node'));
const route = track.querySelector('.process-route');
const routePath = route.querySelector('path');
const marker = track.querySelector('.process-marker');
const examples = [...document.querySelectorAll('.process-example')];
const processStatus = document.querySelector('#process-status');
let routeFrame = 0;

function positionRoute() {
  routeFrame = 0;
  const trackRect = track.getBoundingClientRect();
  const points = nodes.map((node) => {
    const rect = node.getBoundingClientRect();
    return { x: rect.left - trackRect.left + rect.width / 2, y: rect.top - trackRect.top + rect.height / 2 };
  });
  route.setAttribute('viewBox', `0 0 ${trackRect.width} ${trackRect.height}`);
  routePath.setAttribute('d', points.map((point, index) => `${index ? 'L' : 'M'} ${point.x} ${point.y}`).join(' '));
  const selected = steps.findIndex((step) => step.querySelector('input').checked);
  marker.style.left = `${points[selected].x}px`;
  marker.style.top = `${points[selected].y}px`;
  track.classList.add('is-ready');
}

function scheduleRoute() {
  if (routeFrame) cancelAnimationFrame(routeFrame);
  routeFrame = requestAnimationFrame(positionRoute);
}

track.addEventListener('change', () => {
  const selected = steps.findIndex((step) => step.querySelector('input').checked);
  examples.forEach((example, index) => example.classList.toggle('is-current', index === selected));
  const current = examples[selected];
  processStatus.textContent = `Beispiel: ${current.querySelector('strong').textContent}. ${current.querySelector('div p').textContent}`;
  scheduleRoute();
});
window.addEventListener('resize', scheduleRoute);
if ('ResizeObserver' in window) {
  const routeObserver = new ResizeObserver(scheduleRoute);
  routeObserver.observe(track);
  nodes.forEach((node) => routeObserver.observe(node));
}
if (document.fonts) document.fonts.ready.then(scheduleRoute);
scheduleRoute();

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
