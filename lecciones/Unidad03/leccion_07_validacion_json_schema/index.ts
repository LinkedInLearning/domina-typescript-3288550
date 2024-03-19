import {default as apiDataSchema} from './json_schema/apiDataSchema.json';

type APIDataSchema = typeof apiDataSchema;

async function obtenerValidarUsuario(
  url: string,
  esquema: APIDataSchema
): Promise<APIDataSchema | null> {
  // const respuesta = await fetch(url);
  // const datosUsuario = await respuesta.json();

  // Verificar los datos:
  const datosUsuario = {
    idUsuario: 1,
    nombre: 'John Cena',
    email: 'john.cena@gmail.com',
  };

  // Verificar si todos los campos en datosUsuario coinciden con el esquema
  const esValido = Object.entries(esquema).every(
    ([campo, tipo]) => typeof datosUsuario[campo] === tipo
  );

  if (esValido) {
    return datosUsuario as unknown as APIDataSchema;
  } else {
    console.error('La validación de datos de la API falló.');
    return null;
  }
}

// Uso de ejemplo
const apiUrl = 'https://api.example.com/user/1';
obtenerValidarUsuario(apiUrl, apiDataSchema).then(datos => {
  if (datos) {
    console.log('Datos de usuario son válidados:', datos);
  }
});
