const navButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

if (navButton && nav) {
  navButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navButton.setAttribute('aria-expanded', String(isOpen));
    navButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navButton.setAttribute('aria-expanded', 'false');
      navButton.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

const chips = document.querySelectorAll('.filtro-chip');
const cards = document.querySelectorAll('.drink-card');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;

    chips.forEach((item) => item.classList.remove('is-active'));
    chip.classList.add('is-active');

    cards.forEach((card) => {
      const visible = filter === 'todos' || card.dataset.category === filter;
      card.hidden = !visible;
    });
  });
});

const form = document.querySelector('#reserva-form');
const message = document.querySelector('#mensaje-formulario');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const correo = document.querySelector('#correo').value.trim();
    const personas = Number(document.querySelector('#personas').value);
    const fecha = document.querySelector('#fecha').value;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    message.className = 'form-message';

    if (!nombre || !correo || !fecha || !personas) {
      message.textContent = 'Revisa los datos: todos los campos son obligatorios.';
      message.classList.add('error');
      return;
    }

    if (!emailValido) {
      message.textContent = 'Ingresa un correo electrónico válido.';
      message.classList.add('error');
      return;
    }

    if (personas < 1 || personas > 10) {
      message.textContent = 'El número de personas debe estar entre 1 y 10.';
      message.classList.add('error');
      return;
    }

    message.textContent = `Reserva confirmada para ${nombre}. Te enviaremos la confirmación a ${correo}.`;
    message.classList.add('success');
    form.reset();
  });
}
