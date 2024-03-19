// Cómo manejar variables que podrían ser indefinidas
// Problema:

interface Caracter {
  nombre: string;
  titulo?: string; // El título es opcional, por lo tanto podría ser indefinido
}

const caracter: Caracter = {
  nombre: 'Arya Stark',
  // El título no se proporciona
};

const tituloMayuscula_1 = (caracter: Caracter): string => {
  return caracter.titulo.toUpperCase(); // Error: 'character.titulo' posiblemente sea 'undefined'.
};

// 1. Encadenamiento opcional
const arya: Caracter = {
  nombre: 'Arya Stark',
};

const tituloMayuscula_2 = (caracter: Caracter): string | undefined => {
  return caracter.titulo?.toUpperCase();
};

// 2. Operador de fusión nula (??) - para ES11
const tituloMayuscula_3 = (caracter: Caracter): string => {
  return caracter.titulo?.toUpperCase() ?? 'Título Desconocido';
};

// 3. Guardias de tipo
const tituloMayuscula_4 = (caracter: Caracter): string => {
  if (caracter.titulo !== undefined) {
    return caracter.titulo.toUpperCase();
  } else {
    return 'Título Desconocido';
  }
};

// 4. Proporcionar un valor predeterminado
// Operador OR lógico (||)
const tituloMayuscula_5 = (caracter: Caracter): string => {
  const titulo = caracter.titulo || 'Sin Título';
  return titulo.toUpperCase();
};

// o parámetro predeterminado
const tituloMayuscula_6 = (caracter = 'Viajero'): string => {
  return caracter.toUpperCase();
};

// o generar un error si el valor no es de tipo string
const tituloMayuscula_7 = (caracter: Caracter): string => {
  if (!caracter.titulo || typeof caracter.titulo !== 'string') {
    throw new Error('El valor no es de tipo string');
  }
  return caracter.titulo.toUpperCase();
};
