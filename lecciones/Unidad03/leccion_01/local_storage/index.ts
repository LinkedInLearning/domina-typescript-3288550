const configuracionUsuario = localStorage.getItem('configuracion');
if (configuracionUsuario !== null) {
  const datos = JSON.parse(configuracionUsuario);
  console.log(datos);
} else {
  console.log('No se encontraron configuraciones de usuario.');
}
