interface Heroe {
    nombre: string;
    casa: string;
}
declare const jonSnow: Heroe;
interface HeroeConTitulo {
    nombre: string;
    casa: string;
    titulo: string;
}
declare const jonSnow_2: HeroeConTitulo;
interface HeroeNoble extends Heroe {
    titulo: string;
}
declare const jonSnow_3: HeroeNoble;
interface HeroeTituloOpcional {
    nombre: string;
    casa: string;
    titulo?: string;
}
declare const jonSnow_4: HeroeTituloOpcional;
interface Heroe {
    nombre: string;
    casa: string;
    [key: string]: string;
}
declare const jonSnow_5: Heroe;
