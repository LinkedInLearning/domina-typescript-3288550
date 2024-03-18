const valorConstante = 'Hola';

let valorVariable = 'Tierra';
valorVariable = 'Mundo';

function concatenar<T extends string>(a: T, b: T): string {
  return a + b;
}

console.log(concatenar(valorConstante, valorVariable)); // Output: "HolaMundo"
// console.log(concatenar(1, 2));
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// --------------------------------------------

// Interfaz base para todas las figuras geométricas
interface Figura {
  calcularArea(): number;
}

class Rectangulo implements Figura {
  constructor(
    private ancho: number,
    private altura: number
  ) {}

  calcularArea(): number {
    return this.ancho * this.altura;
  }
}

class Circulo implements Figura {
  constructor(private radio: number) {}

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}

function compararAreas<T extends Figura, B extends Figura>(
  figura1: T,
  figura2: B
): string {
  const area1 = figura1.calcularArea();
  const area2 = figura2.calcularArea();

  if (area1 === area2) {
    return 'Las áreas son iguales.';
  } else if (area1 > area2) {
    return 'La primera figura tiene un área mayor.';
  } else {
    return 'La segunda figura tiene un área mayor.';
  }
}

const rectangulo = new Rectangulo(5, 10);
const circulo = new Circulo(7);

console.log(compararAreas(rectangulo, circulo)); // Output: "La segunda figura tiene un área mayor."
