type Coche = {
  marca: string;
  modelo: string;
};

type Moto = {
  marca: string;
  cilindrada: number;
};

function imprimirDetalles(vehiculo: Coche | Moto) {
  if ('modelo' in vehiculo) {
    console.log(
      `Es un coche de marca ${vehiculo.marca} y modelo ${vehiculo.modelo}.`
    );
  } else {
    console.log(
      `Es una moto de marca ${vehiculo.marca} y cilindrada ${vehiculo.cilindrada}cc.`
    );
  }
}

const miCoche: Coche = {marca: 'Toyota', modelo: 'Corolla'};
const miMoto: Moto = {marca: 'Honda', cilindrada: 250};

imprimirDetalles(miCoche); // Output: Es un coche de marca Toyota y modelo Corolla.
imprimirDetalles(miMoto); // Output: Es una moto de marca Honda y cilindrada 250cc.

function procesarDato(dato: number | string | unknown): string {
  if (typeof dato === 'number') {
    return `El número es ${dato}.`;
  } else if (typeof dato === 'string') {
    return `El texto es: "${dato}".`;
  } else {
    return 'Tipo de dato no reconocido.';
  }
}

console.log(procesarDato(42)); // Output: El número es 42.
console.log(procesarDato('Hola mundo')); // Output: El texto es: "Hola mundo".
console.log(procesarDato(true)); // Output: Tipo de dato no reconocido.
