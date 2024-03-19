// Cómo corregir el error "'value' tiene implícitamente un tipo 'any'"

const mantieneTronoHierroError = casa => {
  // El parámetro 'casa' tiene implícitamente un tipo 'any'
  const duenoTrono = 'Targaryen';
  return casa === duenoTrono;
};

console.log(mantieneTronoHierroError('Stark'));

// 1. Tipos explícitos o valor predeterminado
// Tipos explícitos
const mantieneTronoHierro_1 = (casa: string) => {
  const duenoTrono = 'Targaryen';
  return casa === duenoTrono;
};

console.log(mantieneTronoHierro_1('Stark')); // No hay error, devuelve false

// Valor predeterminado
const mantieneTronoHierro_2 = (casa = 'Desconocido') => {
  const duenoTrono = 'Targaryen';
  return casa === duenoTrono;
};

console.log(mantieneTronoHierro_2('Stark'));
// No hay error, TypeScript infiere que casa es un string del valor predeterminado

// 2. Interfaces
// 2.1
interface Casa {
  nombre: string;
}

const mantieneTronoHierro_3 = (casa: Casa) => {
  const duenoTrono = 'Targaryen';
  return casa.nombre === duenoTrono;
};

console.log(mantieneTronoHierro_3({nombre: 'Stark'}));

// 2.2
// Definir una interfaz para las sobrecargas de función
interface MantieneTronoHierro {
  (casa: string): boolean;
  (casa: Casa): boolean;
}

const esCasa = (valor: unknown): valor is Casa => {
  return (
    typeof valor === 'object' &&
    valor !== null &&
    'nombre' in valor &&
    typeof valor.nombre === 'string' &&
    Object.keys(valor).length === 1
  );
};

// Implementación de función única que maneja todos los casos, asignada a una variable
const mantieneTronoHierro_4: MantieneTronoHierro = (casa: unknown): boolean => {
  if (esCasa(casa) || typeof casa === 'string') {
    const duenoTrono = 'Targaryen';
    const houseName = typeof casa === 'string' ? casa : casa.nombre;
    return houseName === duenoTrono;
  }
  return false;
};

console.log(mantieneTronoHierro_4('Stark'));
console.log(mantieneTronoHierro_4({nombre: 'Targaryen'}));
