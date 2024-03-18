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

type EjemploRango1 = Rango<3, 5>;
type EjemploRango2 = Rango<3, 100>;
