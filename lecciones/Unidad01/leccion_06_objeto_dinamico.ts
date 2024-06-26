// Forma incorrecta:
const personaje = {};
// personaje.nombre = 'Severus Snape';

// --------------------------------------

// Definición de un objeto con propiedades dinámicas
const criaturaMagica: {[nombre: string]: string} = {};

// Añadiendo propiedades dinámicamente
criaturaMagica.especie = 'Búho';
criaturaMagica.dueno = 'Harry Potter';
console.log(
  `Criatura actualizada: ${criaturaMagica.nombre}, 
  un ${criaturaMagica.especie}, propiedad de ${criaturaMagica.dueno}`
);

// --------------------------------------

// Definición de un objeto con propiedades dinámicas
const coloresCasas: Record<string, string[]> = {
  Gryffindor: ['Escarlata', 'Oro'],
};

console.log('Antes de la asignación dinámica: ', coloresCasas.Gryffindor);

// Añadiendo dinámicamente más casas y sus colores
coloresCasas.Hufflepuff = ['Amarillo', 'Negro'];
coloresCasas.Ravenclaw = ['Azul', 'Bronce'];
coloresCasas.Slytherin = ['Verde', 'Plata'];
console.log('OtraCasa: ', coloresCasas.OtraCasa);

console.log('Después de la asignación dinámica: ');
for (const casa in coloresCasas) {
  console.log(`${casa}: ${coloresCasas[casa].join(' y ')}`);
}
