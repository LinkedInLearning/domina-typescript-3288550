// Extensión de la interfaz Window
// Caso de Uso: Registro Personalizado de Errores
// Implementación de un mecanismo de registro de errores global que puede
// capturar y reportar errores en toda la aplicación.
// Extendiendo el objeto window para el registro global de errores
interface Window {
  logError: (error: Error, contexto?: string) => void;
}

// Implementación de la función global de registro de errores
window.logError = (error, contexto = 'General') => {
  console.log(`Error en ${contexto}:`, error);
  // Aquí, típicamente enviarías la información del error a 
  // un servicio de monitoreo
};

// Manejador global de errores
window.onerror = (mensaje, source, lineno, colno, error) => {
  window.logError(
    error || new Error(mensaje.toString()),
    'Excepción no manejada'
  );
  return true; // Evita el manejo predeterminado del error
};

// Ejemplo de uso directo de la función de registro
try {
  // Algún proceso propenso a errores
  throw new Error('Algo salió mal');
} catch (error) {
  window.logError(error as Error, 'Función de ejemplo');
}

throw new Error('Algo salió mal otra vez');
