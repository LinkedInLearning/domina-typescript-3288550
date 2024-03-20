interface PerfilUsuario {
  id: number;
  nombre: string;
  correo: string;
}

// Guardia de tipo para PerfilUsuario
function esPerfilUsuario(data: unknown): data is PerfilUsuario {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    typeof data.id === 'number' &&
    'nombre' in data &&
    typeof data.nombre === 'string' &&
    'correo' in data &&
    typeof data.correo === 'string' &&
    Object.keys(data).length === 3
  );
}

// Llamada simulada a la API
async function obtenerPerfilUsuario(
  idUsuario: number
): Promise<PerfilUsuario | null> {
  const respuesta = await fetch(`./json/usuario.json`);
  const datos = await respuesta.json();

  // Mala práctica es asertar valores sin validarlos:
  // return datos as PerfilUsuario;


  if (esPerfilUsuario(datos)) {
    return datos;
  } else {
    console.error('Datos de perfil de usuario inválidos');
    return null;
  }
}

obtenerPerfilUsuario(10).then(
  resultado => {
    console.log(resultado);
  },
  error => {
    // manejar error aquí
  }
);
