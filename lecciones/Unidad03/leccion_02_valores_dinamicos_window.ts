// Método 1: Extensión de la interfaz Window
// Caso de Uso: Registro Personalizado de Errores
// Implementación de un mecanismo de registro de errores global que puede
// capturar y reportar errores en toda la aplicación.
// Extendiendo el objeto window para el registro global de errores
interface Window {
  logError: (error: Error, context?: string) => void;
}

// Implementación de la función global de registro de errores
window.logError = (error, context = 'General') => {
  console.log(`Error en ${context}:`, error);
  // Aquí, típicamente enviarías la información del error a un servicio de monitoreo
};

// Manejador global de errores
window.onerror = (message, source, lineno, colno, error) => {
  window.logError(
    error || new Error(message.toString()),
    'Excepción no manejada'
  );
  return true; // Evita el manejo predeterminado del error
};

// Ejemplo de uso directo de la función de registro
try {
  // Algún proceso propenso a errores
  throw new Error('Algo salió mal');
} catch (error) {
  window.logError(error, 'Función de ejemplo');
}

// Método 2: Extensión de Window con una Interfaz Personalizada
// Caso de Uso: Gestión de Estado Global
// En aplicaciones que no utilizan bibliotecas o frameworks de gestión de estado, puede ser útil adjuntar un objeto de estado global a la ventana para acceder fácilmente a través de diferentes partes de la aplicación, especialmente para proyectos pequeños a medianos.

// Definición de una interfaz para el estado global
interface CustomWindow extends Window {
  appState: {
    userLoggedIn: boolean;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
  };
}

// Haciendo un casting del objeto window global al tipo de la interfaz personalizada
declare let window: CustomWindow;

// Inicializando el estado global
window.appState = {
  userLoggedIn: false,
  theme: 'light',
  setTheme: function (theme: 'light' | 'dark') {
    this.theme = theme;
    // Lógica adicional para aplicar el tema en toda la aplicación
    console.log(`Tema establecido en ${theme}`);
  },
};

// Ejemplo de uso
window.appState.setTheme('dark');
console.log(`Usuario conectado: ${window.appState.userLoggedIn}`);
