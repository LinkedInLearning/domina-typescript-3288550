import * as yup from 'yup';

// https://github.com/jquense/yup

interface RespuestaApi {
  usuario: string;
  contrasena: string;
  email: string;
}

const esquemaRegistracion = yup.object({
  usuario: yup.string().required().min(3),
  contrasena: yup.string().required().min(8),
  email: yup.string().email().required(),
});

const cargarDatos = async (idUsuario: number): Promise<RespuestaApi> => {
  // const response = await fetch(`https://api.ejemplo.com/usuarios/${idUsuario}`);
  // const datos = await response.json();

  const datos = {
    usuario: 'ejemploUsuario',
    contrasena: 'ejemploContraseña',
    email: 'ejemplo@email.com',
  };

  try {
    await esquemaRegistracion.validate(datos);
  } catch (error) {
    throw new Error('Formato de respuesta API inválido.');
  }

  return datos as RespuestaApi;
};

cargarDatos(10);
