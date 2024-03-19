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
  // const respuesta = await fetch(`https://api.ejemplo.com/usuarios/${idUsuario}`);
  // const datos = await respuesta.json();

  const datos = {
    id: 10,
    nombre: 'Usuario Ejemplo',
    correo: 'usuario@example.com',
  };

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
