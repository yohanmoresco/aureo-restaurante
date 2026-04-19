import { useState } from 'react';
import { Section } from '../core/Section';
import { Plus, Minus } from 'lucide-react';
import { FadeUp } from '../core/Motion';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Qual o traje adequado para o restaurante?",
    a: "Recomendamos traje esporte fino (Smart Casual). Pedimos a gentileza de evitar regatas, chinelos, roupas de banho ou roupas de academia para manter a atmosfera elegante da casa."
  },
  {
    q: "Aceitam crianças no restaurante?",
    a: "Sim, famílias são bem-vindas. No entanto, alertamos que nosso ambiente é voltado para uma experiência gastronômica adulta e intimista, e não possuímos menu infantil ou espaço kids."
  },
  {
    q: "Existe taxa de rolha?",
    a: "Sim, cobramos uma taxa de rolha de R$ 150 por garrafa de vinho ou espumante (750ml). Caso adquira uma garrafa de nossa carta, a taxa da primeira rolha é isenta."
  },
  {
    q: "Vocês possuem opções veganas ou para alérgicos?",
    a: "Nossa cozinha se adapta a restrições alimentares com aviso prévio. Ao fazer a reserva, por favor, informe sobre alergias ou restrições severas. Temos opções ovolactovegetarianas disponíveis no menu."
  },
  {
    q: "É possível realizar eventos privados ou mini-weddings?",
    a: "Sim! Disponibilizamos nosso mezanino para eventos privados de até 40 pessoas. Para informações de pacotes e menus exclusivos para eventos, entre em contato via e-mail corporativo."
  }
];

export default function FAQ({ id }: { id: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id={id} className="bg-base-100 py-32" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
        
        <header className="text-center flex flex-col gap-6 items-center">
          <FadeUp>
            <span className="text-primary text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">Informações Úteis</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 id="faq-heading" className="text-4xl md:text-[3.5rem] font-headings font-light text-text-primary">
              <span className="font-serif italic text-primary">Perguntas</span> Frequentes
            </h2>
          </FadeUp>
        </header>

        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, idx) => (
             <FadeUp delay={0.1 * idx} key={idx} className="border-b border-white/10 overflow-hidden">
               <button
                 className="w-full text-left py-6 flex justify-between items-center gap-4 focus-ring group"
                 onClick={() => toggleFaq(idx)}
                 aria-expanded={openIndex === idx}
               >
                 <span className={`text-base md:text-lg font-light tracking-wide transition-colors duration-300
                    ${openIndex === idx ? 'text-primary' : 'text-text-primary group-hover:text-primary'}
                 `}>
                   {faq.q}
                 </span>
                 <span className="text-primary shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                   {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                 </span>
               </button>
               
               <AnimatePresence>
                 {openIndex === idx && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                   >
                     <div className="pb-6 pr-8 text-text-secondary font-light text-sm lg:text-base leading-relaxed">
                       {faq.a}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </FadeUp>
          ))}
        </div>

      </div>
    </Section>
  );
}
