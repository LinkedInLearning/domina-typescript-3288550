type Modo = 'dark' | 'light';

type Configuracion = {
  modo: Modo;
};

const LC_KEY = 'configuracion';

/**
 * Guardas de tipo para Configuración y Modo
 */
const esModo = (valor: unknown): valor is Modo => {
  return valor === 'dark' || valor === 'light';
};

const esConfiguracion = (valor: unknown): valor is Configuracion => {
  return (
    typeof valor === 'object' &&
    valor !== null &&
    'modo' in valor &&
    esModo(valor.modo) &&
    Object.keys(valor).length === 1
  );
};

// Definición de configuración
const configUsuario: Configuracion = {
  modo: 'dark',
};

// Se guarda la configuración en el local storage:
localStorage.setItem(LC_KEY, JSON.stringify(configUsuario));

// Se recupera la configuración:
const configuracionUsuario = localStorage.getItem(LC_KEY);
if (configuracionUsuario !== null) {
  const datos = JSON.parse(configuracionUsuario);
  if (esConfiguracion(datos)) {
    console.log(datos);
  } else {
    console.error('La configuración guardada no es válida');
  }
} else {
  console.error('No se encontraron configuraciones de usuario.');
}
