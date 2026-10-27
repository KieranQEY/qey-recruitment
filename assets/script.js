const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const select = document.querySelector('#booking-type');
if (select && type) {
  if (type === 'client') select.value = 'Hiring / job submission';
  if (type === 'candidate') select.value = 'Finding a role';
}
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `[QEY Website] ${data.get('booking-type')} – ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nEnquiry type: ${data.get('booking-type')}\n\nMessage:\n${data.get('message')}`;
    document.querySelector('#form-note').textContent = 'Your email app should open with the message prepared. Please check it and press Send to contact QEY.';
    window.location.href = `mailto:kieran@qeyrecruitment.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
