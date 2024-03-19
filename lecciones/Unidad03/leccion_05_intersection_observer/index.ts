const observador: IntersectionObserver = new IntersectionObserver(
  (entradas: IntersectionObserverEntry[]) => {
    entradas.forEach((entrada: IntersectionObserverEntry) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      } else {
        entrada.target.classList.remove('visible');
      }
    });
  }
);
observador.observe(document.querySelector('.text-animado')!);
