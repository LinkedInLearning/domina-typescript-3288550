type Mago = {
  readonly id: number;
  readonly nombre: string;
  casa: string;
};

// Haciendo todas las propiedades mutables:

type QuitarSoloLectura<T> = {
  -readonly [P in keyof T]: T[P];
};

type MagoEditable = QuitarSoloLectura<Mago>;

const magoEditable: MagoEditable = {
  id: 1,
  nombre: 'Harry Potter',
  casa: 'Gryffindor',
};

// Demostrando mutabilidad
magoEditable.id = 2; // Éxito
magoEditable.nombre = 'Harry James Potter'; // Éxito
magoEditable.casa = 'Slytherin'; // Éxito

// Manualmente ajustando las propiedades:

// Excluye 'id' y 'nombre' de Mago, luego añádelos de nuevo como mutables
type MagoConIdentidadModificada = Omit<Mago, 'id' | 'nombre'> & {
  id: number;
  nombre: string;
};

const magoConIdentidadModificada: MagoConIdentidadModificada = {
  id: 5,
  nombre: 'Ron Weasley',
  casa: 'Gryffindor',
};

// Demostrando cambios permitidos
magoConIdentidadModificada.id = 6; // Éxito
magoConIdentidadModificada.nombre = 'Ronald Bilius Weasley'; // Éxito
magoConIdentidadModificada.casa = 'Hufflepuff';
// Esto seguiría funcionando ya que 'casa' era mutable desde el principio.
