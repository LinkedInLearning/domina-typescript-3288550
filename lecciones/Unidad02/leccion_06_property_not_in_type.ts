// Cómo corregir el error "La propiedad Y no existe en el tipo X"
interface Heroe {
  nombre: string;
  casa: string;
}

const jonSnow: Heroe = {
  nombre: 'Jon Snow',
  casa: 'Stark',
};

console.log(jonSnow.titulo); //Error: La propiedad 'titulo' no existe en el tipo 'Heroe'.

// 1. Simplemente define una nueva interfaz
interface HeroeConTitulo {
  nombre: string;
  casa: string;
  titulo: string;
}

const jonSnow_2: HeroeConTitulo = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow.titulo);

// 2. Extendiendo interfaces
interface HeroeNoble extends Heroe {
  titulo: string;
}

const jonSnow_3: HeroeNoble = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow.titulo);

//   3. Propiedades opcionales
interface Heroe {
  nombre: string;
  casa: string;
  titulo?: string; // Una propiedad opcional
}

const jonSnow_4: Heroe = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow.titulo);

// 4. Signaturas de índice
interface Heroe {
  nombre: string;
  casa: string;
  [key: string]: string; // permitiendo propiedades dinámicas
}

const jonSnow_5: Heroe = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow.titulo);
