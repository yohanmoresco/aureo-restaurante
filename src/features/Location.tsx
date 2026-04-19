import { Section } from '../core/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FadeUp } from '../core/Motion';

export default function Location({ id }: { id: string }) {
  return (
    <Section id={id} className="bg-base-200 py-32 border-b border-white/5 relative" aria-labelledby="location-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto px-6">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-6">
            <FadeUp>
              <span className="text-primary text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">Contato & Localização</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 id="location-heading" className="text-4xl md:text-[3.5rem] font-headings font-light text-text-primary">
                Como nos <span className="font-serif italic text-primary">Encontrar</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2} className="h-[2px] w-[60px] bg-primary/50 mt-2"></FadeUp>
          </header>

          <div className="flex flex-col gap-8 mt-4">
             <FadeUp delay={0.3} className="flex gap-6 items-start group">
                <div className="p-3 bg-base-100 border border-white/5 group-hover:border-primary/50 transition-colors">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                   <strong className="text-text-primary uppercase tracking-widest text-xs">Endereço</strong>
                   <p className="text-text-secondary font-light text-sm lg:text-base">
                      Rua Oscar Freire, 1250 - Jardins<br />
                      São Paulo - SP, 01426-001
                   </p>
                </div>
             </FadeUp>

             <FadeUp delay={0.4} className="flex gap-6 items-start group">
                <div className="p-3 bg-base-100 border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Clock size={24} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                   <strong className="text-text-primary uppercase tracking-widest text-xs">Horário de Funcionamento</strong>
                   <p className="text-text-secondary font-light text-sm lg:text-base">
                      Terça a Sábado: 19h00 às 23h30<br />
                      Domingo: 12h00 às 16h30
                   </p>
                </div>
             </FadeUp>

             <FadeUp delay={0.5} className="flex gap-6 items-start group">
                <div className="p-3 bg-base-100 border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Phone size={24} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                   <strong className="text-text-primary uppercase tracking-widest text-xs">Telefone / Reservas</strong>
                   <p className="text-text-secondary font-light text-sm lg:text-base">
                      +55 (11) 99999-9999<br />
                      +55 (11) 3000-0000
                   </p>
                </div>
             </FadeUp>

             <FadeUp delay={0.6} className="flex gap-6 items-start group">
                <div className="p-3 bg-base-100 border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                   <strong className="text-text-primary uppercase tracking-widest text-xs">E-mail Comercial</strong>
                   <p className="text-text-secondary font-light text-sm lg:text-base">
                      contato@aureorestaurante.com.br<br />
                      eventos@aureorestaurante.com.br
                   </p>
                </div>
             </FadeUp>
          </div>

          <FadeUp delay={0.7} className="mt-4">
             <a 
               href="https://maps.google.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide focus-ring rounded-sm bg-transparent text-text-primary border border-white/10 hover:border-white text-xs uppercase px-10 py-4"
             >
               Abrir no Google Maps
             </a>
          </FadeUp>
        </div>

        {/* Map Visual Placeholder */}
        <FadeUp delay={0.4} className="w-full h-[400px] lg:h-full min-h-[500px] bg-base-100 border border-white/10 relative overflow-hidden group">
           <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Abrir localização no Google Maps"></a>
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-100 group-hover:scale-105"></div>
           
           {/* Marker Overlay */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="flex flex-col items-center gap-2 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 bg-base-100/90 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(198,161,91,0.3)]">
                  <MapPin size={24} className="text-primary" />
                </div>
                <span className="bg-base-100 px-4 py-1 text-[10px] uppercase tracking-widest border border-white/10 text-text-primary">
                  Áureo Restaurante
                </span>
             </div>
           </div>
        </FadeUp>

      </div>
    </Section>
  );
}
