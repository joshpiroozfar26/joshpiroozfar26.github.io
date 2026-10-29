// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? '✕' : '☰';
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); toggle.textContent = '☰'; toggle.setAttribute('aria-expanded', false);
}));

// Booking form (demo: no backend)
const form = document.getElementById('booking-form');
const dateInput = form.querySelector('input[type="date"]');
dateInput.min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', e => {
  e.preventDefault();
  const err = form.querySelector('.form-error');
  const ok = ['name', 'email', 'date', 'time'].every(n => form.elements[n].value.trim()) &&
             /\S+@\S+\.\S+/.test(form.elements.email.value);
  if (!ok) { err.hidden = false; return; }
  err.hidden = true;
  [...form.children].forEach(el => { if (!el.classList.contains('form-success')) el.hidden = true; });
  form.querySelector('.form-success').hidden = false;
});
