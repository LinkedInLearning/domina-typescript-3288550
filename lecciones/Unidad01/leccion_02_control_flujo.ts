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

type Empleado = {
  nombre: string;
  salario: number;
};

type Estudiante = {
  nombre: string;
  grado: string;
};

function obtenerInformacionPersona(persona: Empleado | Estudiante): string {
  return 'salario' in persona
    ? `El salario de ${persona.nombre} es ${persona.salario} dólares.`
    : `El grado de ${persona.nombre} es ${persona.grado}.`;
}

const empleado: Empleado = {nombre: 'Juan', salario: 50000};
const estudiante: Estudiante = {nombre: 'María', grado: 'Ingeniería'};

console.log(obtenerInformacionPersona(empleado)); // Output: El salario de Juan es 50000 dólares.
console.log(obtenerInformacionPersona(estudiante)); // Output: El grado de María es Ingeniería.
