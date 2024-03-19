const miInput = document.getElementById('miInput') as HTMLInputElement;
console.log(miInput.value); // Accede correctamente a 'value'.

const miAudio = document.getElementById('miAudio') as HTMLAudioElement;
miAudio.play(); // Accede correctamente a 'play'.

const miCanvas = document.getElementById('miCanvas');
if (miCanvas instanceof HTMLCanvasElement) {
  const ctx = miCanvas.getContext('2d'); // Es seguro usar 'getContext'
}

const miVideo = document.getElementById('miVideo');
if (miVideo instanceof HTMLVideoElement) {
  miVideo.play(); // Safe to use 'play'
}

// Manejando null y undefined en el DOM:
const miDiv = document.getElementById('miDiv');
miDiv!.textContent = 'Hola mundo!'; // Actualiza de forma segura el texto si miDiv no es nulo.
if (miDiv) {
  miDiv.textContent = 'Hola mundo!'; // Actualiza el texto de forma segura.
}

const miButton = document.getElementById('miButton');
miButton?.classList.add('activo'); // Agrega de forma segura la clase si miButton no es nulo.
if (miButton) {
  miButton.classList.add('activo'); // Agrega la clase de forma segura.
}
