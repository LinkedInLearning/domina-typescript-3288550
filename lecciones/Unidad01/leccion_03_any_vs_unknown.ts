// Ambos pueden contener cualquier tipo de dato:

let valorAny: any = 10;
valorAny = 'Hola!';
valorAny = true;

let valorUknown: unknown = 10;
valorUknown = 'Hola!';
valorUknown = true;

// Any puede ser asignado a cualquier tipo de variable o propiedad:

const valorAnyEjemplo: any = undefined;

// no hay error en este escenario a pesar de que la constante tiene un tipo string:
const valorString: string = valorAnyEjemplo;

interface InterfacePrueba {
  propiedadMandatoria: boolean;
}

// el compilador tampoco genera errores en este escenario:
const instanciaInterface: InterfacePrueba = {
  propiedadMandatoria: valorAnyEjemplo,
};

/**
 * Tipo 'any' no debe utilizarse en código de producción
 * debido al riesgo de pasar valores inválidos a propiedades tipadas
 */

// Unknown solo puede asignarse a sí mismo:

const valorUnknownEjemplo: unknown = undefined;

// el compilador genera un error en este escenario:
const valorNumeral: number = valorUnknownEjemplo;

// aquí no se genera ningún error:
const otroValorUnknown: unknown = valorUnknownEjemplo;

// Para asignar un valor unknown a un valor tipado, debemos aplicar la aserción:

const otraInstanciaInterface: InterfacePrueba = {
  propiedadMandatoria: valorUnknownEjemplo as boolean,
};

/**
 * Es una buena práctica verificar el tipo de dato del valor unknown
 * antes de hacer la aserción. Para esto aplicamos una guarda de tipo.
 */

if (typeof valorUnknownEjemplo === 'boolean') {
  otraInstanciaInterface.propiedadMandatoria = valorUnknownEjemplo as boolean;
}
