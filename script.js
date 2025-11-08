// Espera a que la página cargue completamente
document.addEventListener('DOMContentLoaded', () => {

  // Selecciona todos los botones de clase 'btn primary'
  const botones = document.querySelectorAll('.btn.primary');

  // Recorre cada botón y agrega un evento click
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      // Al hacer clic, muestra un mensaje en pantalla
      alert('¡Gracias por hacer clic en el botón! 🚀');
    });
  });

});
