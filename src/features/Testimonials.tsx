import { Section } from '../core/Section';
import { FadeUp, StaggerContainer, StaggerItem } from '../core/Motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Arthur Valmont",
    role: "Crítico Gastronômico, Revista Sabor",
    text: "Mignon ao Poivre é uma viagem sem volta. O melhor ponto que já experienciei em anos. O Áureo redefine o conceito de excelência.",
    stars: 5,
  },
  {
    name: "Heloísa Figueiredo",
    role: "Empresária",
    text: "O ambiente é tão acolhedor e luxuoso quanto a comida. Minhas noites de celebração em família sempre terminam no Áureo.",
    stars: 5,
  },
  {
    name: "Carlos Medeiros",
    role: "Chef de Cozinha",
    text: "O respeito pelos ingredientes locais, o atendimento impecável, o vinho no ponto exato. Não há nenhum outro restaurante igual na cidade.",
    stars: 5,
  }
];

export default function Testimonials({ id }: { id: string }) {
  return (
    <Section id={id} className="bg-dark-2 py-32 border-t border-border-light relative" aria-labelledby="testimonials-heading">
      <div className="flex flex-col gap-20 max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Testimonials */}
        <header className="text-center flex flex-col gap-6 items-center max-w-2xl mx-auto">
          <FadeUp>
            <span className="text-gold-2 text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">Vozes da Experiência</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 id="testimonials-heading" className="text-4xl md:text-[3.5rem] font-headings font-light text-text-1">
              O que dizem os <span className="font-serif italic text-gold-2">Apreciadores</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="h-[40px] w-[1px] bg-gold-1/20 mt-4"></FadeUp>
        </header>

        {/* Testimonial Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
          {testimonials.map((t, idx) => (
             <StaggerItem key={idx} className="bg-dark-1 p-10 flex flex-col justify-between gap-8 group hover:-translate-y-2 transition-transform duration-500 will-change-transform border border-border-light hover:border-gold-1/20">
               <div className="flex flex-col gap-6">
                 {/* Estrelas */}
                 <div className="flex gap-1 text-gold-2">
                   {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                   ))}
                 </div>
                 <p className="text-text-2 font-light italic leading-relaxed text-sm lg:text-base relative pl-4 border-l border-gold-1/30">
                   "{t.text}"
                 </p>
               </div>
               <footer className="pt-6 border-t border-border-light flex flex-col gap-1">
                 <strong className="text-text-1 font-headings font-normal tracking-wider text-base">{t.name}</strong>
                 <span className="text-[11px] text-text-muted uppercase tracking-widest">{t.role}</span>
               </footer>
             </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </Section>
  );
}
