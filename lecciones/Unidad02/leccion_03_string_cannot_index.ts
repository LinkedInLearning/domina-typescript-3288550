// Cómo solucionar el error "la expresión de tipo string no puede usarse para indexar"
// Desafío:

const lealtades = {
  'Jon Snow': 'Stark',
  'Tyrion Lannister': 'Lannister',
};

// Intento inicial que genera un error en TypeScript
const obtenerLealtad = (personaje: string) => {
  return lealtades[personaje];
  // Error: la expresión de tipo 'string' no puede usarse para indexar
  // el tipo '{ "Jon Snow": string; "Tyrion Lannister": string; }'.
};

// 1. Definir una Función con un Tipo de Clave Específico

const obtenerLealtadPorClave = (personaje: keyof typeof lealtades) => {
  return lealtades[personaje]; // Correcto
};

console.log(obtenerLealtadPorClave('Jon Snow')); // "Stark"

// 2. Aserción de Tipo dentro de una Función

const obtenerLealtadConAserto = (personaje: string) => {
  return lealtades[personaje as keyof typeof lealtades]; // Correcto
};

console.log(obtenerLealtadConAserto('Tyrion Lannister')); // "Lannister"

// 3. Guardia de Tipo para Asegurar la Validez de la Clave

const esClaveDeLealtad = (clave: any): clave is keyof typeof lealtades => {
  return clave in lealtades;
};

const obtenerLealtadConGuardia = (personaje: string) => {
  if (esClaveDeLealtad(personaje)) {
    return lealtades[personaje]; //Correcto
  }
  return undefined; // O manejar el error según corresponda
};

console.log(obtenerLealtadConGuardia('Jon Snow')); // "Stark"

// 4. Firma de Índice para Indexar un Objeto de Forma Flexible

const lealtadesConIndice: {[clave: string]: string} = {
  'Jon Snow': 'Stark',
  'Tyrion Lannister': 'Lannister',
};

const obtenerLealtadConIndice = (personaje: string) => {
  return lealtadesConIndice[personaje]; // Correcto
};

console.log(obtenerLealtadConIndice('Tyrion Lannister')); // "Lannister"
