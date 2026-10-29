// Shared demo behaviour: forms show a demo-only thank-you (nothing is sent).
document.querySelectorAll('form[data-demo]').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    const msg = f.dataset.thanks || "Thanks! We'll be in touch very soon.";
    f.innerHTML = `<div class="thanks"><div class="ok">✓</div><h3>Thank you!</h3><p>${msg}</p><small>(Demo only: nothing was actually sent.)</small></div>`;
  });
});
