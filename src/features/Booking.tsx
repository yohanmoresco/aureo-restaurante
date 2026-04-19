import { useState } from 'react';
import { Section } from '../core/Section';
import { Button } from '../core/Button';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { FadeUp } from '../core/Motion';
import { motion, AnimatePresence } from 'framer-motion';

export default function Booking({ id }: { id: string }) {
  const [formData, setFormData] = useState({ date: '', time: '', guests: '2', name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reserva solicitada:', formData);
    setIsSubmitted(true);
    // Reset after some time if desired, but showing success is fine
  };

  return (
    <Section id={id} className="bg-dark-1 py-32 border-t border-b border-border-light relative overflow-hidden" aria-labelledby="reserva-heading">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-1/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto px-6 relative z-10 items-center">
        
        {/* Reservation Info */}
        <div className="flex flex-col gap-10 lg:pr-12">
           <header className="flex flex-col gap-6">
              <FadeUp>
                <span className="text-gold-2 text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">Garantia do Seu Lugar</span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 id="reserva-heading" className="text-4xl md:text-[3.5rem] leading-[1.1] font-headings font-light text-text-1">
                  Reserve Sua <br />
                  <span className="font-serif italic text-gold-2">Mesa</span> no Áureo
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="h-[2px] w-[60px] bg-gold-1/50 mt-2"></FadeUp>
           </header>
           
           <FadeUp delay={0.3} className="text-text-2 text-base lg:text-lg font-light leading-relaxed">
             Para garantir a melhor experiência possível, sugerimos que reservas sejam feitas com pelo menos 48 horas de antecedência. Nossa capacidade é propositalmente limitada para assegurar atendimento de excelência.
           </FadeUp>
           
           <FadeUp delay={0.4} className="flex flex-col gap-4 text-sm font-light text-text-muted mt-4 border-l border-gold-1/20 pl-6">
              <p><strong className="text-text-1 font-medium tracking-wide">Dress Code:</strong> Esporte Fino / Smart Casual. Não permitimos regatas, chinelos ou roupas de banho.</p>
              <p><strong className="text-text-1 font-medium tracking-wide">Tolerância:</strong> O tempo máximo de espera para reservas confirmadas é de 15 minutos.</p>
              <p><strong className="text-text-1 font-medium tracking-wide">Eventos Privados:</strong> Para mesas superiores a 8 pessoas, favor contatar via WhatsApp.</p>
           </FadeUp>
        </div>

        {/* Form Container */}
        <FadeUp delay={0.2} className="bg-dark-2 border border-border-light p-8 md:p-12 lg:p-16 relative shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit} 
                className="flex flex-col gap-8 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted flex items-center gap-2">
                       <Calendar size={12} className="text-gold-2"/> Data
                     </label>
                     <input 
                       type="date" 
                       name="date"
                       min={getTodayDate()}
                       value={formData.date}
                       onChange={handleChange}
                       required 
                       className="w-full bg-dark-1 border border-border-light text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 transition-colors custom-date-input" 
                     />
                   </div>
                   
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted flex items-center gap-2">
                       <Clock size={12} className="text-gold-2"/> Horário
                     </label>
                     <select 
                       name="time"
                       value={formData.time}
                       onChange={handleChange}
                       required
                       className="w-full bg-dark-1 border border-border-light text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 hover:bg-dark-2 cursor-pointer appearance-none"
                     >
                       <option value="" disabled className="text-text-muted">Selecione</option>
                       <option value="19:00">19:00</option>
                       <option value="19:30">19:30</option>
                       <option value="20:00">20:00</option>
                       <option value="20:30">20:30</option>
                       <option value="21:00">21:00</option>
                       <option value="21:30">21:30</option>
                       <option value="22:00">22:00</option>
                     </select>
                   </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted flex items-center gap-2">
                    <Users size={12} className="text-gold-2"/> Número de Pessoas
                  </label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-1 border border-border-light text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 hover:bg-dark-2 cursor-pointer appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Pessoa' : 'Pessoas'}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Nome Completo</label>
                     <input 
                       type="text" 
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       placeholder="Vicenzo Áureo"
                       className="w-full bg-dark-1 border border-border-light text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 transition-colors placeholder:text-text-1/20" 
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Telefone / WhatsApp</label>
                     <input 
                       type="tel"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange} 
                       required
                       placeholder="(11) 99999-9999"
                       className="w-full bg-dark-1 border border-border-light text-text-1 px-4 py-3 text-sm focus:outline-none focus:border-gold-1/50 focus:ring-1 focus:ring-gold-1/50 transition-colors placeholder:text-text-1/20" 
                     />
                  </div>
                </div>

                <Button type="submit" variant="primary" className="mt-4 w-full justify-center group">
                  Solicitar Reserva
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">→</span>
                </Button>
                
                <p className="text-center text-[10px] text-text-muted uppercase tracking-wider mt-2">
                  Você não será cobrado agora.
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center justify-center text-center gap-6 h-full"
              >
                <div className="w-16 h-16 rounded-full bg-gold-1/10 border border-gold-1/30 flex items-center justify-center mb-2">
                  <CheckCircle size={32} className="text-gold-2" />
                </div>
                <h3 className="text-2xl md:text-3xl font-headings text-text-1">
                  Reserva Solicitada
                </h3>
                <p className="text-text-2 font-light max-w-sm">
                  Recebemos seus dados. Nossa equipe entrará em contato via WhatsApp em breve para confirmar sua mesa.
                </p>
                <Button variant="outline" className="mt-8 text-xs uppercase tracking-[0.2em] px-8" onClick={() => {
                  setFormData({ date: '', time: '', guests: '2', name: '', phone: '' });
                  setIsSubmitted(false);
                }}>
                  Fazer nova reserva
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </FadeUp>

      </div>
    </Section>
  );
}
