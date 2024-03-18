interface Hechizo {
  nombreHechizo: string;
  lanzarHechizo: () => void;
}

const implementaHechizo = (objeto: any): objeto is Hechizo => {
  return (
    objeto &&
    typeof objeto.nombreHechizo === 'string' &&
    typeof objeto.lanzarHechizo === 'function'
  );
};

const verificadorHechizo = {
  nombreHechizo: 'Lumos',
  lanzarHechizo: () => console.log('Que haya luz'),
};

// Implementar la comprobación de tipo en tiempo de ejecución
if (implementaHechizo(verificadorHechizo)) {
  console.log('verificadorHechizo implementa Hechizo');
} else {
  console.log('verificadorHechizo no implementa Hechizo');
}
