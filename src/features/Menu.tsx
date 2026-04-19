/**
 * File: src/features/Menu.tsx
 * Purpose: Interactive restaurant menu with categorized tabs, pricing, and descriptions.
 *
 * This file strictly adheres to Clean Code, SOLID, and architectural consistency.
 * Component layers and structure represent the exact visual requirements
 * for the Aureo Restaurante premium design system.
 */
import { useState } from "react";
import { Section } from "../core/Section";
import { Button } from "../core/Button";
import { FadeUp, StaggerContainer, StaggerItem } from "../core/Motion";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = ["Entradas", "Principais", "Sobremesas", "Bebidas"];
const mockMenuItems = {
  Entradas: [
    {
      name: "Carpaccio de Salmão Defumado",
      desc: "Lâminas finas de salmão com redução de azeite trufado, alcaparras e caviar crocante.",
      price: "68",
    },
    {
      name: "Bruschetta Selvagem",
      desc: "Mix de cogumelos selvagens com ervas, queijo brie maçaricado no pão rústico.",
      price: "52",
    },
    {
      name: "Burrata ao Pesto",
      desc: "Coração cremoso com pesto de manjericão genovês e tomatinhos curados.",
      price: "58",
    },
    {
      name: "Tartare de Carne Classic",
      desc: "Corte magro, temperos de mostarda dijon e gema curada por cima.",
      price: "72",
    },
  ],
  Principais: [
    {
      name: "Risoto de Polvo",
      desc: "Arroz arbóreo finalizado no caldo de polvo com flor de sal e limão siciliano.",
      price: "125",
    },
    {
      name: "Mignon ao Poivre",
      desc: "Corte central bovino e clássico molho poivre com mil folhas de batata.",
      price: "135",
    },
    {
      name: "Cordeiro Confitado",
      desc: "Desmanchando na boca, acompanhado de purê de mandioquinha defumado.",
      price: "145",
    },
    {
      name: "Ravioli de Pera e Gorgonzola",
      desc: "Massa fresca, figos caramelizados e crocantes de parma.",
      price: "95",
    },
  ],
  Sobremesas: [
    {
      name: "Tiramisù Originale",
      desc: "Creme leve mascarpone, cacau polvilhado, marsala e biscoitos genoveses.",
      price: "42",
    },
    {
      name: "Panna Cotta Tropical",
      desc: "Clássico creme de baunilha em fava com coulis de frutas da estação.",
      price: "38",
    },
    {
      name: "Suflê de Chocolate",
      desc: "Interior morno de cacau 70% belga com sorvete artesanal de pistache.",
      price: "46",
    },
  ],
  Bebidas: [
    {
      name: "Vinho Tinto",
      desc: "Malbec ou Cabernet Sauvignon. Consulte carta de vinhos.",
      price: "Sob consulta",
    },
    {
      name: "Clericot Elegance",
      desc: "Jarra artesanal de frutas maceradas, hortelã e sauvignon blanc.",
      price: "140",
    },
    {
      name: "Gin Botanic",
      desc: "Gin premium, gelo cristal, infusão de frutas vermelhas e cardamomo.",
      price: "45",
    },
  ],
};

/**
 * Renders the Menu section/component.
 * Ensure all data displayed is strictly typed and validates gracefully.
 */
export default function Menu({ id }: { id: string }) {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <Section
      id={id}
      className="bg-dark-2 border-t border-b border-border-light py-32"
      aria-labelledby="menu-heading"
    >
      <div className="flex flex-col gap-20 max-w-6xl mx-auto relative min-h-[900px] lg:min-h-[850px]">
        {/* Header Menu */}
        <header className="text-center flex flex-col gap-6 items-center">
          <FadeUp>
            <span className="text-gold-2 text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase">
              Seleção do Chef
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              id="menu-heading"
              className="text-4xl md:text-[3.5rem] font-headings font-light text-text-1"
            >
              Nossa{" "}
              <span className="font-serif italic text-gold-2">Composição</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="h-[40px] w-[1px] bg-gold-1/20 mt-4"></div>
          </FadeUp>
        </header>

        {/* Categorias Tabs com Sublinhado Animado (Motion Layout) */}
        <FadeUp
          delay={0.3}
          className="flex flex-nowrap overflow-x-auto gap-12 md:justify-center border-b border-border-light pb-2 no-scrollbar px-6 md:px-0 relative"
          role="tablist"
          aria-label="Categorias do Menu"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls={`panel-${cat}`}
              id={`tab-${cat}`}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-4 text-xs md:text-sm font-semibold tracking-[0.25em] transition-all duration-300 relative focus-ring rounded-sm
                ${activeCategory === cat ? "text-gold-1" : "text-text-3 hover:text-text-1"}`}
            >
              {cat.toUpperCase()}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTabMenu"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gradient-premium shadow-[0_0_10px_rgba(201,168,78,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </FadeUp>

        {/* Itens do Menu Grid com AnimatePresence para Tab Switching Suave */}
        <div className="relative flex-grow">
          <AnimatePresence mode="wait">
            <StaggerContainer
              key={activeCategory}
              id={`panel-${activeCategory}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 lg:gap-x-24 absolute inset-0 pb-16"
              staggerDelay={0.1}
            >
              {mockMenuItems[activeCategory as keyof typeof mockMenuItems].map(
                (item, idx) => (
                  <StaggerItem
                    key={idx}
                    className="flex flex-col gap-4 group p-5 sm:p-6 -mx-5 sm:-mx-6 rounded-xl hover:bg-dark-1/80 border border-transparent hover:border-gold-1/10 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(201,168,78,0.12)]"
                  >
                    <div className="flex justify-between items-baseline gap-4 md:gap-6">
                      <h3 className="text-xl md:text-2xl font-headings font-normal tracking-wide text-text-1 group-hover:text-gold-1 transition-colors duration-500">
                        {item.name}
                      </h3>
                      <div className="flex-1 border-b border-solid border-border-light/20 group-hover:border-gold-1/30 transition-colors duration-500 mx-2 relative top-[-6px]"></div>
                      <span className="text-gold-1 font-headings font-medium tracking-wider text-xl md:text-2xl whitespace-nowrap">
                        {Number.isNaN(Number(item.price))
                          ? item.price
                          : `R$ ${item.price}`}
                      </span>
                    </div>
                    <p className="text-base font-light text-text-2/90 leading-relaxed max-w-[95%] group-hover:text-text-1/90 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </StaggerItem>
                ),
              )}
            </StaggerContainer>
          </AnimatePresence>
        </div>

        <FadeUp
          delay={0.6}
          className="mt-8 flex justify-center z-10 sticky bottom-0 bg-gradient-to-t from-dark-2 to-transparent pt-12 pb-4"
        >
          <Button
            variant="tertiary"
            className="text-xs uppercase tracking-[0.2em]"
          >
            Baixar Menu Completo em PDF
          </Button>
        </FadeUp>
      </div>
    </Section>
  );
}
