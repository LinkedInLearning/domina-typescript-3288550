interface LibroMagico {
  titulo: string;
  autor: string;
  propiedadesMagicas: any;
}

interface CurriculoHogwarts {
  pociones: {
    libroTexto: LibroMagico;
    complementarios: LibroMagico[];
  };
  defensaContraLasArtesOscuras: {
    libroTexto: LibroMagico;
    complementarios: LibroMagico[];
  };
  // Se pueden añadir clases adicionales aquí
}

// Extraer la estructura específica usando el tipo de acceso indexado:

// Extrayendo el tipo para el libro complementario de la clase de pociones
type LibroComplementarioClasePociones =
  CurriculoHogwarts['pociones']['complementarios'];
// LibroComplementarioClasePociones = LibroMagico[]

// Extrayendo el tipo para los materiales de lectura de la clase de Pociones
type MaterialesLecturaPociones = CurriculoHogwarts['pociones'];
// MaterialesLecturaPociones = {
//    libroTexto: LibroMagico,
//    complementarios: LibroMagico[]
//  }

// Utilizando keyof para Enumerar Clases de Hogwarts
type ClaseHogwarts = keyof CurriculoHogwarts;

// ClaseHogwarts = "pociones" | "defensaContraLasArtesOscuras"

// Ejemplo:
function listarMaterialesParaClase(nombreClase: ClaseHogwarts) {
  // Implementación: listar todos los materiales para la clase dada
  console.log(nombreClase);
}

listarMaterialesParaClase('pociones');
