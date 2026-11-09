// =========================================================
// Jeferson Acevedo — personal site
// =========================================================
document.documentElement.classList.add('js');

const root = document.documentElement;

// ---------- Tema claro / oscuro ----------
const themeBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
  return root.getAttribute('data-theme') || (prefersDark.matches ? 'dark' : 'light');
}

themeBtn.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { /* almacenamiento bloqueado: no pasa nada */ }
});

// ---------- Menú en celular ----------
const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
});

navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// ---------- Filtro de proyectos ----------
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filters.forEach((b) => {
      const active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    projects.forEach((p) => {
      const cats = p.dataset.cat.split(' ');
      p.hidden = !(f === 'all' || cats.includes(f));
    });
  });
});

// ---------- Aparecer al hacer scroll + resaltar sección actual ----------
const reveals = document.querySelectorAll('.reveal');
const navMap = new Map(
  [...navLinks.querySelectorAll('a')].map((a) => [a.getAttribute('href').slice(1), a])
);

if ('IntersectionObserver' in window) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach((el) => revealObs.observe(el));

  const spyObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = navMap.get(entry.target.id);
      if (link && entry.isIntersecting) {
        navMap.forEach((a) => a.classList.remove('is-current'));
        link.classList.add('is-current');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navMap.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) spyObs.observe(section);
  });
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

// ---------- Año del footer ----------
document.getElementById('year').textContent = new Date().getFullYear();
