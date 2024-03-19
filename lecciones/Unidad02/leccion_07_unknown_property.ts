// Cómo corregir el error
// "El literal de objeto solo puede especificar propiedades conocidas, y X no existe en el tipo Y"

interface Alianza {
  casas: string[];
  pacto: string;
}

const nuevaAlianza: Alianza = {
  casas: ['Stark', 'Tully'],
  pacto: 'Defensa Mutua',
  ubicacion: 'Riverrun',
  // Error: El literal de objeto solo puede especificar propiedades conocidas, y
  // 'ubicacion' no existe en el tipo 'Alianza'.
};

//   1. Extendiendo interfaces

interface DetailedAlianza extends Alianza {
  ubicacion: string;
}

// La nueva declaración es aceptada
const nuevaAlianza_1: DetailedAlianza = {
  casas: ['Stark', 'Tully'],
  pacto: 'Defensa Mutua',
  ubicacion: 'Riverrun',
};

//   2. Propiedades opcionales
// A veces, no se conocen o no son necesarios todos los detalles.
// Podemos marcar algunas propiedades como opcionales:
interface Alianza2 {
  casas: string[];
  pacto: string;
  ubicacion?: string;
}

// La nueva declaración es aceptada
const nuevaAlianza_2: Alianza2 = {
  casas: ['Stark', 'Tully'],
  pacto: 'Defensa Mutua',
  ubicacion: 'Riverrun',
};

// 4. Aserción de tipo

// Use esta herramienta con precaución, le está diciendo a TypeScript que confíe en nuestra intención.
const nuevaAlianza_3 = {
  casas: ['Stark', 'Tully'],
  pacto: 'Defensa Mutua',
  ubicacion: 'Riverrun',
} as Alianza;
