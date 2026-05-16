const navButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

if (navButton) {
  navButton.addEventListener('click', (event) => {
    nav.classList.toggle('is-open');
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
      card.style.display = visible ? 'block' : 'none';
    });
  });
});

const form = document.querySelector('#reserva-form');
const message = document.querySelector('#mensaje-formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const correo = document.querySelector('#correo').value.trim();
  const personas = Number(document.querySelector('#personas').value);
  const fecha = document.querySelector('#fecha').value;

  message.className = 'form-message';

  if (!nombre || !correo || !fecha || personas < 1) {
    message.textContent = 'Revisa los datos: todos los campos son obligatorios.';
    message.classList.add('error');
    return;
  }

  message.textContent = `Reserva confirmada para ${nombre}. Te enviaremos la confirmación a ${correo}.`;
  message.classList.add('success');
  form.reset();
});
