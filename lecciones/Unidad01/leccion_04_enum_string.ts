// Utilizando el operador in:
enum PersonajesBreakingBad {
  WalterWhite = 'Heisenberg',
  JessePinkman = "Cap'n Cook",
  SaulGoodman = "Slippin' Jimmy",
}

const esUnCaracterDeBreakingBad = (personaje: string): boolean => {
  return personaje in PersonajesBreakingBad;
};

console.log(esUnCaracterDeBreakingBad('WalterWhite')); // true
console.log(esUnCaracterDeBreakingBad('GusFring')); // false

// Utilizando Object.values() para verificar si ambos,
// la llave o el valor string son parte del Enum

enum ApodosBreakingBad {
  Heisenberg = 'Walter White',
  CapnCook = 'Jesse Pinkman',
  SlippinJimmy = 'Saul Goodman',
}

const esApodoDeBreakingBad = (apodo: string): boolean => {
  const apodos: string[] = Object.values(ApodosBreakingBad);
  return apodos.includes(apodo);
};

console.log(esApodoDeBreakingBad('Walter White')); // true
console.log(esApodoDeBreakingBad('Mike')); // false
