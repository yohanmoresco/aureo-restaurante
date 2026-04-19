import { Section } from '../core/Section';
import { FadeUp, ImageReveal } from '../core/Motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200', // Ambiente Restaurante Dark moody
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200', // Fine dining plating dark
  'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200', // Premium meat dark board
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200', // Wine glasses dark moody
  'https://images.unsplash.com/photo-1611520175743-30ff00129621?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200', // Dark fine dining table setting
  'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200', // Cocktail close-up dark background
];

export default function Gallery({ id }: { id: string }) {
  return (
    <Section id={id} className="bg-base-100 py-32" aria-labelledby="gallery-heading">
      <div className="flex flex-col gap-20">
        
        {/* Header da Galeria */}
        <header className="text-center flex flex-col gap-6 items-center max-w-4xl mx-auto px-6">
          <FadeUp>
            <span className="text-primary text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">Nosso Ambiente</span>
          </FadeUp>
          <FadeUp delay={0.1}>
             <h2 id="gallery-heading" className="text-4xl md:text-[3.5rem] font-headings font-light text-text-primary">
                A <span className="font-serif italic text-primary">Atmosfera</span> Áureo
              </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
             <p className="text-text-secondary text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Cada detalhe da nossa casa foi pensado para criar memórias inesquecíveis. Um refúgio de sofisticação e conforto no coração da cidade.
            </p>
          </FadeUp>
        </header>

        {/* Masonry-like Grid Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4 px-1 md:px-4">
          {galleryImages.map((src, idx) => {
             let spanClass = "aspect-square";
             
             // Criar um layout mais dinâmico
             if (idx === 0) spanClass = "aspect-square lg:aspect-[4/5] lg:row-span-2";
             if (idx === 1) spanClass = "aspect-square lg:aspect-video lg:col-span-2";
             if (idx === 2) spanClass = "aspect-square";
             if (idx === 3) spanClass = "aspect-[4/5] lg:aspect-square";
             if (idx === 4) spanClass = "aspect-video lg:col-span-2";
             if (idx === 5) spanClass = "aspect-square lg:aspect-[4/5] lg:row-span-2";

             return (
               <div key={idx} className={`relative overflow-hidden group w-full h-full ${spanClass}`}>
                 <ImageReveal src={src} alt={`Galeria ${idx + 1}`} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-base-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               </div>
             )
          })}
        </div>

      </div>
    </Section>
  );
}
