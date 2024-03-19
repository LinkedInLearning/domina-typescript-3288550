// Ejemplo que simula el proceso de registro en varios 
// pasos utilizando operaciones asíncronas en secuencia.

// En este escenario, tenemos una serie de pasos
// de validación que deben completarse secuencialmente.
// En cada paso, el usuario recibe información sobre el
// progreso.

// Simularemos estos pasos con funciones asíncronas 
// que se resuelven después de un retraso,
// representando operaciones que consumen tiempo como 
// validaciones en el servidor o
// verificaciones en la base de datos.

type ResultadoPasoValidacion = {
  paso: number;
  mensaje: string;
  esValido: boolean;
};

const simularPasoValidacion = async (
  paso: number
): Promise<ResultadoPasoValidacion> => {
  return new Promise(resolver => {
    setTimeout(() => {
      const esValido = Math.random() > 0.2; 
      // Simula una verificación de validación con un 
      // 80% de probabilidades de pasar
      const mensaje = esValido
        ? `Paso ${paso} completado exitosamente.`
        : `Fallo de validación en el paso ${paso}.`;
      console.log(mensaje); // En una aplicación real, se actualizaría la interfaz de usuario en su lugar
      resolver({paso, mensaje, esValido});
    }, 1000 * paso); // Simula un retraso para cada paso de validación
  });
};

const validarProcesoRegistro = async (): Promise<void> => {
  const pasos = [1, 2, 3, 4];
  // Representa cada paso del proceso de registro/validación
  let todosPasosValidos = true;

  for (const paso of pasos) {
    const resultado = await simularPasoValidacion(paso);
    if (!resultado.esValido) {
      todosPasosValidos = false;
      break; // Detener el proceso de validación si algún 
      // paso falla
    }
  }

  if (todosPasosValidos) {
    console.log(
      `Todos los pasos completados exitosamente. 
      Usuario registrado con éxito.`
    );
    // Continuar con el siguiente paso en el proceso de 
    // registro, por ejemplo, crear la cuenta de usuario
  } else {
    console.log(
      `Proceso de registro detenido debido 
      a un paso de validación fallido.`
    );
    // Proporcionar retroalimentación al usuario y 
    // potencialmente permitirle corregir la entrada
  }
};

// Invocar el proceso de validación
validarProcesoRegistro().catch(error =>
  console.error(
    `El proceso de validación del registro encontró un error:`,
    error
  )
);
