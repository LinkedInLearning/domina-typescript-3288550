// Cómo corregir el error "El argumento de tipo '..' no es asignable al parámetro de tipo…"

interface Casa {
  nombre: string;
  simbolo: string;
}

const declareAllegiance = (casa: Casa) => {
  console.log(`${casa.nombre} promete lealtad al reino.`);
};

declareAllegiance({
  nombre: 'Stark',
  simbolo: 'Direwolf',
  lema: 'El invierno se acerca',
});

// Simplemente estructurando el valor:

const declaraAlianza = (casa: Casa) => {
  console.log(`${casa.nombre} promete lealtad al reino.`);
};

declaraAlianza({nombre: 'Stark', simbolo: 'Lobo Huargo'});
// eliminar el lema para que coincida con la interfaz de Casa

// Aserción de tipo
// Los asertos de tipo deben ser utilizados con precaución, ya que indican a TypeScript
// que confíe en el conocimiento del desarrollador sobre su propio análisis.
const declaraAlianza_2 = (casa: Casa) => {
  console.log(`${casa.nombre} promete lealtad al reino.`);
};

declaraAlianza_2({
  name: 'Stark',
  simbolo: 'Lobo Huargo',
  lema: 'Se acerca el invierno',
} as unknown as Casa);
