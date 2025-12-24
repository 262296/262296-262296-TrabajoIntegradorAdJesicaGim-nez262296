// Navegación suave ya proporcionada por CSS scroll-behavior
// Validación básica del formulario (opcional)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    } else {
      // Simulación de envío
      e.preventDefault();
      alert('Mensaje enviado (simulación). Gracias por contactarte.');
      form.reset();
    }
  });
});