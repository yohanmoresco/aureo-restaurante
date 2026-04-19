import { Section } from '../core/Section';
import { Button } from '../core/Button';
import { FadeUp } from '../core/Motion';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero({ id }: { id: string }) {
  const shouldReduceMotion = useReducedMotion();

  const scrollToBooking = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section 
      id={id} 
      disablePadding
      className="relative min-h-[100dvh] flex items-center justify-center bg-base-100 overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      {/* Background Image com Zoom Lento (Ambiente Sensorial) */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
          alt="Ambiente sofisticado do Aureo Restaurante" 
          className="w-full h-full object-cover object-center"
          initial={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-base-100/60 transition-opacity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-base-100/50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-10 max-w-4xl mx-auto px-4 w-full pt-20">
        <div className="flex flex-col gap-6">
          <FadeUp delay={0.2}>
            <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.3em] uppercase drop-shadow-md">
              Alta Culinária Contemporânea
            </span>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-headings font-light text-text-primary tracking-tight">
              A Arte da <br />
              <span className="text-primary italic font-serif pr-2">Alta Gastronomia</span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.6}>
            <p className="text-base md:text-lg text-text-primary/80 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
              Uma composição sensorial de sabores, texturas e momentos inesquecíveis no coração da cidade.
            </p>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.8} className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
          <Button onClick={scrollToBooking} fullWidth={false} className="w-full sm:w-auto sm:min-w-[200px]">
            Reservar Mesa
          </Button>
          <Button onClick={scrollToMenu} variant="secondary" fullWidth={false} className="w-full sm:w-auto sm:min-w-[200px] border-white/20 text-text-primary hover:border-primary hover:text-text-primary">
            Ver Cardápio
          </Button>
        </FadeUp>
      </div>
    </Section>
  );
}
