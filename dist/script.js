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

const desktopNavigation = window.matchMedia('(min-width: 1071px)');
desktopNavigation.addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

menuButton.addEventListener('focusout', (event) => {
  if (navigation.classList.contains('is-open') && !navigation.contains(event.relatedTarget) && event.relatedTarget !== menuButton) closeMenu();
});
navigation.addEventListener('focusout', (event) => {
  if (navigation.classList.contains('is-open') && !navigation.contains(event.relatedTarget) && event.relatedTarget !== menuButton) closeMenu();
});

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
