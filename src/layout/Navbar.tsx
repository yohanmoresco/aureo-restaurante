/**
 * File: src/layout/Navbar.tsx
 * Purpose: Main navigation header with scroll-aware styling and mobile menu toggling.
 *
 * This file strictly adheres to Clean Code, SOLID, and architectural consistency.
 * Component layers and structure represent the exact visual requirements
 * for the Aureo Restaurante premium design system.
 */
import { useState, useEffect } from "react";
import { Button } from "../core/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

/**
 * Renders the Navbar section/component.
 * Ensure all data displayed is strictly typed and validates gracefully.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "O Prato", href: "#prato-do-dia" },
    { label: "Cardápio", href: "#cardapio" },
    { label: "A Essência", href: "#historia" },
    { label: "Ambiente", href: "#galeria" },
    { label: "Avaliações", href: "#avaliacoes" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed w-full z-50 transition-all duration-700 ease-out border-b border-transparent ${isScrolled ? "bg-dark-1/90 backdrop-blur-xl border-border-light py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-gradient-to-b from-black/80 to-transparent py-8"}`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1440px] flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-xl md:text-2xl font-headings font-bold text-gold-2 tracking-[0.2em] focus-ring px-2 rounded-sm"
          aria-label="Ir para o topo"
        >
          ÁUREO
        </a>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase text-text-1/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-gold-2 transition-colors focus-ring py-1 rounded-sm relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-1 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <Button
            onClick={() =>
              document
                .getElementById("reserva")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Fazer reserva"
            className="text-sm px-8 py-3 min-h-0 whitespace-nowrap bg-gradient-premium text-dark-1 hover:brightness-110 transition-all duration-500 rounded-sm font-semibold tracking-widest uppercase"
          >
            Reservar Mesa
          </Button>
        </div>

        <button
          className="lg:hidden text-text-1 focus-ring p-2 rounded-sm hover:text-gold-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} strokeWidth={1.5} />
          ) : (
            <MenuIcon size={28} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-dark-1/98 backdrop-blur-3xl border-t border-border-light flex flex-col p-8 gap-8 shadow-2xl h-screen"
          >
            <ul className="flex flex-col items-center justify-center gap-10 text-sm font-medium tracking-[0.15em] uppercase h-1/2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-text-1 hover:text-gold-2 transition-colors focus-ring px-2 py-1 block text-lg"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("reserva")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                fullWidth
                aria-label="Fazer reserva"
                className="uppercase tracking-widest bg-gradient-premium text-dark-1 py-4"
              >
                Reservar Mesa
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
