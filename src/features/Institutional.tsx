import { Section } from '../core/Section';
import { Button } from '../core/Button';
import { FadeUp, ImageReveal } from '../core/Motion';

export default function Institutional({ id }: { id: string }) {
  return (
    <Section id={id} className="bg-base-100 py-32" aria-labelledby="institucional-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center max-w-7xl mx-auto px-6">
        
        {/* Imagem (Left) */}
        <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[800px] w-full group overflow-hidden">
          <ImageReveal 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200" 
            alt="Chef Executivo do Áureo preparando prato no fogo" 
            className="w-full h-full object-cover origin-top hover:scale-[1.03] transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base-100 to-transparent h-1/3"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rotate-3 z-[-1]"></div>
        </div>

        {/* Content (Right) */}
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-4">
             <FadeUp>
              <span className="text-primary text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">Nossa Herança</span>
             </FadeUp>
             <FadeUp delay={0.1}>
              <h2 id="institucional-heading" className="text-4xl md:text-[3.5rem] leading-[1.1] font-headings font-light text-text-primary">
                O Tempo, a <br />
                <span className="font-serif italic text-primary">Tradição</span> e o Fogo
              </h2>
             </FadeUp>
          </header>

          <FadeUp delay={0.2} className="flex flex-col gap-6 text-text-secondary font-light leading-relaxed text-base md:text-lg">
            <p>
              Fundado em 1998 pelo aclamado Chef Vicenzo Áureo, nossa casa nasceu do desejo de resgatar memórias afetivas da culinária clássica aliadas a técnicas contemporâneas. Cada prato é um manifesto de paixão pela gastronomia de origem.
            </p>
            <p>
              Selecionamos nossos fornecedores em um raio de 100km, priorizando pequenos produtores, ingredientes sazonais orgânicos e carnes de origem garantida. Acreditamos que o luxo mora na pureza do ingrediente e no tempo dedicado ao seu preparo.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="pt-8 flex flex-wrap gap-8 items-center border-t border-white/5">
             <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif text-primary">25+</span>
                <span className="text-[10px] uppercase tracking-widest text-text-muted">Anos de Excelência</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
             <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif text-primary">3</span>
                <span className="text-[10px] uppercase tracking-widest text-text-muted">Estrelas Locais</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10 hidden md:block"></div>
             <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif text-primary">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-text-muted">Sustentável</span>
             </div>
          </FadeUp>

          <FadeUp delay={0.4} className="mt-6">
            <Button variant="outline" className="text-xs uppercase tracking-[0.2em] px-10 py-5 w-max hover:bg-white hover:text-black hover:border-white transition-all duration-300">Conheça Nossa Equipe</Button>
          </FadeUp>
        </div>

      </div>
    </Section>
  );
}
