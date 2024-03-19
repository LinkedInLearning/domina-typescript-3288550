const miCanvas_1 = document.querySelector('#miCanvas');
//console.log(miCanvas_1.getContext('2d'));

const miCanvas_2 = document.querySelector('#miCanvas') as HTMLCanvasElement;
//console.log(miCanvas_2.getContext('2d')); // TypeScript sabe que miCanvas es un canvas

// Seleccionar un elemento
const miLista = document.getElementById('lista-elementos') as HTMLUListElement;

// Acceder a los hijos
const elementosLista = miLista.children; // HTMLCollection
console.log('elementosLista', elementosLista);

// Acceder al primer hijo
const primerElemento = miLista.firstElementChild as HTMLLIElement;
console.log('primerElemento', primerElemento);

// Navegar a los hermanos
const segundoElemento = primerElemento.nextElementSibling as HTMLLIElement;
console.log('segundoElemento', segundoElemento);

// Acceder al nodo padre
const padreLista = segundoElemento.parentElement as HTMLElement;
console.log('padreLista', padreLista);

// Crear un nuevo elemento de lista
const nuevoItem = document.createElement('li') as HTMLLIElement;
nuevoItem.textContent = 'Nuevo elemento';

// Adjuntar el nuevo elemento a la lista
miLista.appendChild(nuevoItem);
