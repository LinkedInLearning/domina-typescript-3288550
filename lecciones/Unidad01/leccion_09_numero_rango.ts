// Tipo Enumerate:
type Enumerar<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerar<N, [...Acc, Acc['length']]>;

type EjemploEnumerar1 = Enumerar<3>;
type EjemploEnumerar2 = Enumerar<100>;

// Tipo Rango:
type Rango<De extends number, A extends number> = Exclude<
  Enumerar<A>,
  Enumerar<De>
>;

// Enumerar<3> genera una unión de tipo de 0 | 1 | 2
// Enumerar<5> genera una unión de tipo de 0 | 1 | 2 | 3 | 4
// Exclude<0 | 1 | 2 | 3 | 4, 0 | 1 | 2>
// T = 3 | 4
type EjemploRango1 = Rango<3, 5>;
type EjemploRango2 = Rango<3, 100>;
