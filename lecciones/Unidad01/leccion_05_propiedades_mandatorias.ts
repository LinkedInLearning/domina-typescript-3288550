type Mago = {
  nombre: string;
  apellido: string;
  casa: string;
  edad: number; // La manera normal de hacer un campo obligatorio
  mascota?: Animal; // La manera normal de hacer un campo opcional es usando `?`
};

interface Animal {
  nombre: string;
  edad: number;
}

const mago: Mago = {
  nombre: 'Harry',
  apellido: 'Potter',
  casa: 'Gryffindor',
  edad: 17,
};

// Utilizando Partial:
const nombreCompletolMagoParcia = ({
  apellido,
  nombre,
}: Partial<Mago>): string => {
  return `${nombre} ${apellido}`;
};

console.log(
  nombreCompletolMagoParcia({apellido: mago.apellido, nombre: mago.nombre})
);
console.log(nombreCompletolMagoParcia({apellido: mago.apellido})); // falta un parámetro pero no se genera error
console.log('**************');

//Utilizando Pick:
const nombreCompletoMagoPick = ({
  apellido,
  nombre,
}: Pick<Mago, 'apellido' | 'nombre'>): string => {
  return `${nombre} ${apellido}`;
};

console.log(
  nombreCompletoMagoPick({apellido: mago.apellido, nombre: mago.nombre})
);
// console.log(nombreCompletoMagoPick({ apellido: mago.apellido })); // error
console.log('**************');

type Mago2 = Pick<Mago, 'apellido' | 'nombre'> &
  Partial<Omit<Mago, 'apellido' | 'nombre'>>;

//Utilizando Pick:
const nombreCompletoMago2 = ({apellido, nombre, edad}: Mago2): string => {
  if (edad) {
    console.log(`El mago tiene ${edad} años!`);
  }
  return `${nombre} ${apellido}`;
};

console.log(
  nombreCompletoMago2({apellido: mago.apellido, nombre: mago.nombre})
);
console.log(
  nombreCompletoMago2({
    apellido: mago.apellido,
    nombre: mago.nombre,
    edad: mago.edad,
  })
);
