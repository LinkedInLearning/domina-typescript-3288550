// Errores relacionados con las firmas de funciones

// 1. Se esperaban X argumentos, pero se obtuvieron Y
//error
const enviarCuervo = (mensaje: string, ubicacion: string) => {
  console.log(`Enviando cuervo con el mensaje: ${mensaje} a ${ubicacion}`);
};

enviarCuervo('Los Caminantes Blancos se acercan'); // Error: Se esperaban 2 argumentos, pero se obtuvo 1.

//1. Cumplir con los argumentos
enviarCuervo('Los Caminantes Blancos se acercan', 'Invernalia');

//2. Dar un valor predeterminado para la ubicación
const enviarCuervo_2 = (mensaje: string, ubicacion = 'Desembarco del Rey') => {
  console.log(`Enviando cuervo con el mensaje: ${mensaje} a ${ubicacion}`);
};

enviarCuervo_2('¡Todos aclamen al Rey en el Norte!');

// 2. Se esperaban X argumentos, pero se obtuvieron Y
type Consejero = (nombre: string, titulo: string) => string;

const consejeroTyrion_1: Consejero = (nombre: string) =>
  `${nombre} es la Mano de la Reina`; // Error: El tipo no proporciona una coincidencia para la firma.

//1. Cumplir con el tipo de argumentos
const consejeroTyrion_2: Consejero = (nombre: string, titulo: string) =>
  `${nombre} es ${titulo}`;

//2. Hacer que el título sea opcional
type Consejero_2 = (nombre: string, titulo?: string) => string;

// 3. No se puede invocar una expresión cuyo tipo carece de una firma de llamada
const libroHechizos = {
  descifrar: 'Hechizo de sescifrado de textos antiguos',
};

libroHechizos.descifrar(); // Error: No se puede invocar una expresión cuyo tipo carece de una firma de llamada.

//1. Definir el libroHechizos con una función invocable
const libroHechizos_1 = {
  descifrar: (texto: string) => `Descifrando: ${texto}`,
};

libroHechizos_1.descifrar('Pergaminos Valyrios');

//2. Si el libroHechizos debe permanecer sin cambios, crear una función separada para invocar el hechizo.
const descifrarHechizo = (texto: string) => {
  console.log(`Descifrando: ${texto}`);
};

descifrarHechizo(libroHechizos.descifrar);

// 4. Una función cuyo tipo declarado no es 'void' ni 'any' debe devolver un valor
const enviarAdvertencia = (señal: string): string => {
  // No hay declaración de retorno aquí
};

enviarAdvertencia('¡Caminantes Blancos!'); // Error: La función carece de declaración de retorno.

//1. Asegurarse de que la función cumpla con su deber devolviendo la señal de advertencia apropiada.
const enviarAdvertencia_2 = (señal: string): string => {
  return `Advertencia: ${señal}`;
};

//2. Si no es necesario devolver una advertencia específica, cambiar el tipo de retorno de la función a void.
const enviarAdvertencia_3 = (señal: string): void => {
  console.log(`Advertencia: ${señal}`);
};
