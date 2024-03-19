// Manejador de eventos click con el tipo adecuado:
const boton = document.getElementById('miBoton') as HTMLButtonElement;
boton.addEventListener('click', (evento: MouseEvent) => {
  console.log(evento.clientX, evento.clientY); // Accede a las propiedades del MouseEvent con seguridad de tipo
});

// Ejemplo: Agregar un evento de tecla presionada a un campo de entrada.
const input = document.getElementById('miInput') as HTMLInputElement;
input.addEventListener('keypress', (evento: KeyboardEvent) => {
  console.log(`Tecla presionada: ${evento.key}`);
});

// Ejemplo: Evitar que se envíe un formulario.
const formulario = document.getElementById('miFormulario') as HTMLFormElement;
formulario.addEventListener('submit', (evento: SubmitEvent) => {
  const elementoInput = document.getElementById('miInput') as HTMLInputElement;
  if (!elementoInput.value.match(/^[a-zA-Z]+$/)) {
    evento.preventDefault(); // Evitar la sumisión del formulario
    console.log(
      'El envio del formulario se evitó debido a un fallo de validación.'
    );
    alert('Por favor, ingresa solo letras.');
  } else {
    console.log('El formulario se envió exitosamente.');
  }
});
