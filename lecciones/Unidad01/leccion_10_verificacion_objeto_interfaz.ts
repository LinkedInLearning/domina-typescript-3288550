interface Hechizo {
  nombreHechizo: string;
  lanzarHechizo: () => void;
}

const implementaHechizo = (objeto: unknown): objeto is Hechizo => {
  return (
    typeof objeto === 'object' &&
    objeto !== null &&
    // Object.keys(objeto).length === 2 &&
    'nombreHechizo' in objeto &&
    'lanzarHechizo' in objeto &&
    typeof objeto.nombreHechizo === 'string' &&
    typeof objeto.lanzarHechizo === 'function'
  );
};

const verificadorHechizo = {
  nombreHechizo: 'Lumos',
  lanzarHechizo: () => console.log('Que haya luz'),
};

const verificadorHechizo2 = {
  nombreHechizo: 'Lumos',
  noPertenece: 'noPertenece',
  lanzarHechizo: () => console.log('Que haya luz'),
};

// Implementar la comprobación de tipo en tiempo de ejecución
if (implementaHechizo(verificadorHechizo)) {
  console.log('verificadorHechizo implementa Hechizo');
} else {
  console.log('verificadorHechizo no implementa Hechizo');
}

if (implementaHechizo(verificadorHechizo2)) {
  console.log('verificadorHechizo2 implementa Hechizo');
} else {
  console.log('verificadorHechizo2 no implementa Hechizo');
}
