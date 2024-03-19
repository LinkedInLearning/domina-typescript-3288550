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

console.log(jonSnow_2.titulo);

// 2. Extendiendo interfaces
interface HeroeNoble extends Heroe {
  titulo: string;
}

const jonSnow_3: HeroeNoble = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow_3.titulo);

//   3. Propiedades opcionales
interface HeroeTituloOpcional {
  nombre: string;
  casa: string;
  titulo?: string; // Una propiedad opcional
}

const jonSnow_4: HeroeTituloOpcional = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow_4.titulo);

// 4. Signaturas de índice
interface HeroeIndice {
  nombre: string;
  casa: string;
  [key: string]: string; // permitiendo propiedades dinámicas
}

const jonSnow_5: HeroeIndice = {
  nombre: 'Jon Snow',
  casa: 'Stark',
  titulo: 'Rey en el Norte',
};

console.log(jonSnow_5.titulo);
