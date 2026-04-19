export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-border-light py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-12 justify-between items-start">
        <div className="flex flex-col gap-4 max-w-sm">
          <strong className="text-2xl font-headings font-bold text-gold-2 tracing-widest uppercase">AU R E O</strong>
          <p className="text-text-2 text-sm mt-4 leading-relaxed">
            Restaurante sofisticado com culinária autoral e experiência sensorial.
          </p>
        </div>

        <nav aria-label="Links Úteis" className="flex gap-16 text-sm text-text-2 w-full md:w-auto">
          <ul className="flex flex-col gap-4">
            <li className="font-semibold text-text-1 uppercase tracking-wider mb-2">Navegação</li>
            <li><a href="#hero" className="hover:text-gold-2 transition-colors focus-ring">Início</a></li>
            <li><a href="#cardapio" className="hover:text-gold-2 transition-colors focus-ring">Cardápio</a></li>
            <li><a href="#reserva" className="hover:text-gold-2 transition-colors focus-ring">Reservas</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
             <li className="font-semibold text-text-1 uppercase tracking-wider mb-2">Legal</li>
             <li><a href="#termos" className="hover:text-gold-2 transition-colors focus-ring">Termos</a></li>
             <li><a href="#privacidade" className="hover:text-gold-2 transition-colors focus-ring">Privacidade</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
             <li className="font-semibold text-text-1 uppercase tracking-wider mb-2">Social</li>
             <li><a href="https://instagram.com" className="hover:text-gold-2 transition-colors focus-ring" target="_blank" rel="noopener noreferrer">Instagram</a></li>
             <li><a href="https://facebook.com" className="hover:text-gold-2 transition-colors focus-ring" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-16 pt-8 border-t border-border-light text-sm text-text-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Aureo Restaurante. Todos os direitos reservados.</p>
        <span className="flex gap-4 items-center text-xs">
           <button className="underline focus-ring text-gold-2 font-bold">PT</button>
           <div className="w-px h-3 bg-neutral-600"></div>
           <button className="hover:underline focus-ring">EN</button>
        </span>
      </div>
    </footer>
  );
}
