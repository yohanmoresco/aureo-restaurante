/**
 * File: src/features/DailyDish.tsx
 * Purpose: Highlights the chef's daily special or featured dish with prominent imagery and typography.
 *
 * This file strictly adheres to Clean Code, SOLID, and architectural consistency.
 * Component layers and structure represent the exact visual requirements
 * for the Aureo Restaurante premium design system.
 */
import { Section } from "../core/Section";
import { Button } from "../core/Button";
import { FadeUp, ImageReveal } from "../core/Motion";
import { motion } from "framer-motion";

/**
 * Renders the DailyDish section/component.
 * Ensure all data displayed is strictly typed and validates gracefully.
 */
export default function DailyDish({ id }: { id: string }) {
  const scrollToMenu = () => {
    document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id={id}
      className="bg-dark-2 pb-12 pt-32 lg:pt-48"
      aria-labelledby="dailydish-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Content Side */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 pt-6 lg:pt-0">
          <div className="flex flex-col gap-4">
            <FadeUp>
              <span className="text-gold-2 text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase">
                Especialidade
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="dailydish-heading"
                className="text-3xl md:text-5xl font-headings font-light text-text-1 leading-[1.2]"
              >
                Risoto de Frutos <br />
                <span className="font-serif italic text-gold-2">
                  do Mar Trufado
                </span>
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="h-[1px] w-24 bg-gold-1/30 my-2 origin-left"
            ></motion.div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-text-2 leading-relaxed md:text-lg font-light max-w-lg">
              Nossa criação diária equilibra a suavidade de um arbóreo perfeito
              com a intensidade dos frutos do mar, finalizado em azeite de
              trufas brancas. A harmonia exata para o seu paladar, acompanhado
              de uma seleção do sommelier.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="mt-6 flex flex-col items-start">
            <Button
              onClick={scrollToMenu}
              variant="tertiary"
              className="group flex gap-2 focus-ring"
            >
              <span>Explorar as criações</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Button>
          </FadeUp>
        </div>

        {/* Image Side */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <ImageReveal
            src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
            alt="Amo da nossa cozinha: Risoto de Frutos do Mar"
            className="w-full max-w-[500px] aspect-[4/5] object-cover bg-dark-3 rounded-[12px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-border-light hover:shadow-[0_20px_60px_-5px_rgba(198,161,91,0.15)] transition-shadow duration-500 ease-out"
          />
        </div>
      </div>
    </Section>
  );
}
