// Cómo corregir el error "El tipo X no es asignable al tipo Y"
// "El tipo X no es asignable al tipo Y"

// Este mensaje de error aparece cuando el compilador de TypeScript detecta una discrepancia entre
// el tipo esperado y el valor asignado a una variable, parámetro o valor de retorno.
// El error es una señal de que tu código podría no comportarse como se espera en tiempo de ejecución, y
// TypeScript te está ayudando a detectar este problema temprano.

// 1. Tipos Incompatibles
// Intento de asignar un valor de un tipo a una variable de otro tipo.

// let edadJonSnow: number = "veinticinco";
// Error: El tipo 'string' no es asignable al tipo 'number'.
// Interpretación y Corrección: La edad de Jon Snow debería ser un número, no una cadena de texto.

const edadJonSnow = 25; // Corregido

// 2. Incompatibilidad en la Estructura del Objeto
// El objeto no coincide con la forma esperada.

interface Personaje {
  nombre: string;
  casa: string;
}

const tyrion1: Personaje = {
  nombre: 'Tyrion Lannister',
  título: 'Mano de la Reina',
};

// Error: El objeto solo puede tener propiedades conocidas,
// y 'título' no existe en el tipo 'Personaje'
// Interpretación y Corrección: El título de Tyrion debe ser una cadena de texto, no un título.
// Dependiendo de tu código, puedes corregirlo de las siguientes maneras:

// 1. Ajustar el Objeto
const tyrion2: Personaje = {
  nombre: 'Tyrion Lannister',
  casa: 'Lannister',
};

// 2. Actualizar la Interfaz:
interface Personaje {
  nombre: string;
  casa: string;
  título?: string; // Hacer que el título sea una propiedad opcional
}

// 3. Incompatibilidad en el Tipo de Función
// Discrepancia entre los parámetros de función o los tipos de retorno y sus tipos declarados.

function obtenerTotalDragonesMal(): number {
  return 'Drogon, Rhaegal, Viserion';
}
// Error: El tipo 'string' no es asignable al tipo 'number'.
// Interpretación y Corrección: Corrige la función para que devuelva el número de dragones, no sus nombres.

function obtenerTotalDragonesBien(): number {
  return 3; // Corregido
}

// 4. Incompatibilidad entre Arrays y Tuplas
// Asignar un array o tupla a un tipo que espera una estructura o tipos de elementos diferentes.

const hijosStarkMal: [string, string, string, string] = [
  'Robb',
  'Sansa',
  'Arya',
  12,
];
// Error: El tipo 'number' no es asignable al tipo 'string'.
// Interpretación y Corrección: Asegúrate de que todos los elementos en la tupla sean del tipo correcto
// corrigiendo la edad de Arya por su nombre.

const hijosStarkBien: [string, string, string, string] = [
  'Robb',
  'Sansa',
  'Arya',
  'Bran',
]; // Corregido

// Enum Incompatible
// Asignar un valor a un tipo enum que no existe en el enum.

enum Casa {
  Stark,
  Lannister,
  Targaryen,
}

const casaJonMal: Casa = Casa['Baratheon'];
// Error: La propiedad 'Baratheon' no existe en el tipo 'typeof Casa'.

// Interpretación y Corrección: El enum Casa no incluye Baratheon. Asegúrate de asignar un valor de las
// opciones de enum definidas.

const casaJonBien: Casa = Casa.Stark;
// o
const casaDaenerys: Casa = Casa['Targaryen'];

// Incompatibilidad en Tipos de Unión
// Asignar un valor que no corresponde a ningún tipo en una unión.

type Arma = 'Espada' | 'Daga' | 'Arco';

const armaJonSnowMal: Arma = 'Hacha';
// Error: El tipo '"Hacha"' no es asignable al tipo 'Arma'.

// Interpretación y Corrección: Asegúrate de que el valor coincida con uno de los tipos de la unión.

const armaJonSnowBien: Arma = 'Espada';

// Tipos Genéricos Incorrectos
// Usar un tipo genérico que no cumple con las restricciones o la estructura esperada.

interface Personaje {
  nombre: string;
  casa: string;
}

function obtenerDetallePersonajeMal<T extends Personaje>(detalle: T): string {
  return detalle.nombre;
}

obtenerDetallePersonajeMal({nombre: 'Arya', arma: 'Aguja'});
// Error: El argumento del tipo '{ nombre: string; arma: string; }' no es asignable
// al parámetro del tipo 'Personaje'.

// Interpretación y Corrección: Ajusta la entrada para que coincida con la interfaz Personaje o extiende la
// interfaz para incluir propiedades adicionales.

// Hay varias formas de corregir dependiendo de tus casos de uso:

// Marcar casa como opcional:
interface Personaje2 {
  nombre: string;
  casa?: string; // Hacer casa opcional
  arma: string; // Agregar arma como una propiedad opcional
}

function obtenerDetallePersonajeBien<T extends Personaje2>(detalle: T): string {
  return detalle.nombre;
}

obtenerDetallePersonajeBien({nombre: 'Arya', arma: 'Aguja'});

// Sobrecarga de la Función:
interface Personaje {
  nombre: string;
  casa: string;
  arma: string;
}

// Firma de sobrecarga para personajes sin casa
function obtenerDetallePersonajeSobrecarga(
  detalle: Omit<Personaje, 'casa'>
): string;
// Firma de función original
function obtenerDetallePersonajeSobrecarga(detalle: Personaje): string;
// Implementación de la función
function obtenerDetallePersonajeSobrecarga(detalle: any): string {
  return detalle.nombre;
}

obtenerDetallePersonajeSobrecarga({nombre: 'Arya', arma: 'Aguja'});
