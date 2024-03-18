type ParesClaveValor<T> = {
  [P in keyof T]: [P, T[P]];
}[keyof T][];

type InventarioMago = {
  varita: number;
  nombrePoción: string;
};

// Ejemplo 1:

type Ejemplo1 = ParesClaveValor<InventarioMago>;
// El tipo es (["varita", number] | ["nombrePoción", string])[]
const ejemplo1: Ejemplo1 = [
  ['varita', 10],
  ['nombrePoción', 'dulce'],
];

// Ejemplo 2:

type ManejadoresEventos = {
  onClick: () => void;
  onMouseEnter: () => void;
  onKeyPress: (tecla: string) => boolean;
};

type EntradasManejadores = ParesClaveValor<ManejadoresEventos>;
// El tipo es ["onClick", () => void] | ["onMouseEnter", () => void]
// | ["onKeyPress", (tecla: string) => boolean])[]
const ejemplo2Eventos: EntradasManejadores = [
  ['onClick', () => {}],
  ['onKeyPress', (tecla: string) => typeof tecla === 'string'],
  ['onMouseEnter', () => {}],
];

type ObjetoTiposMixtos = {
  id: number;
  esValido: boolean;
  nombre: string;
  calcularPuntuacion: (valores: number[]) => number;
};

type EntradasTiposMixtos = ParesClaveValor<ObjetoTiposMixtos>;
// El tipo es [("id", number) | ("esValido", boolean) | ("nombre", string)
// | ("calcularPuntuacion", (valores: number[]) => number)][]
const ejemplo2TiposMixtos: EntradasTiposMixtos = [
  ['id', 4],
  ['esValido', true],
  ['nombre', 'Ana'],
  ['calcularPuntuacion', (valores: number[]) => valores.length],
];
