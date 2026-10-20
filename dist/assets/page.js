'use strict';
(() => {
  const nav = document.querySelector('#navigation');
  const toggle = document.querySelector('.menu-toggle');
  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === location.pathname.split('/').pop()) a.setAttribute('aria-current', 'page');
    a.addEventListener('click', close);
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { close(); toggle.focus(); }
  });
})();
