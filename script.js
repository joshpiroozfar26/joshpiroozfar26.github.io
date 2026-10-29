// ▼ Replace with your real email address before publishing
const CONTACT_EMAIL = '[YOUR EMAIL]';

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

// FAQ: keep one open at a time
document.querySelectorAll('.faqs details').forEach(d => d.addEventListener('toggle', () => {
  if (d.open) document.querySelectorAll('.faqs details').forEach(o => { if (o !== d) o.open = false; });
}));

// Package buttons preselect the dropdown
const form = document.getElementById('contact-form');
document.querySelectorAll('.pick').forEach(b => b.addEventListener('click', () => {
  form.elements.package.value = b.dataset.package;
}));

// Contact form: opens the visitor's email app (no backend needed)
form.addEventListener('submit', e => {
  e.preventDefault();
  const f = form.elements, err = form.querySelector('.form-error');
  const ok = f.name.value.trim() && f.business.value.trim() && /\S+@\S+\.\S+/.test(f.email.value);
  if (!ok) { err.hidden = false; return; }
  err.hidden = true;
  const body = `Name: ${f.name.value}\nBusiness: ${f.business.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\nPackage: ${f.package.value}\nCurrent website: ${f.website.value}\n\n${f.message.value}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Website enquiry: ' + f.business.value)}&body=${encodeURIComponent(body)}`;
  [...form.children].forEach(el => { if (!el.classList.contains('form-success')) el.hidden = true; });
  form.querySelector('.form-success').hidden = false;
});
