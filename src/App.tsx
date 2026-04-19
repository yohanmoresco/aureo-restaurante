import React, { Suspense } from 'react';
import Navbar from './layout/Navbar';
import Hero from './features/Hero';
import DailyDish from './features/DailyDish';
import Menu from './features/Menu';
import Footer from './layout/Footer';

const Gallery = React.lazy(() => import('./features/Gallery'));
const Institutional = React.lazy(() => import('./features/Institutional'));
const Testimonials = React.lazy(() => import('./features/Testimonials'));
const Booking = React.lazy(() => import('./features/Booking'));
const LocationMap = React.lazy(() => import('./features/Location'));
const FAQ = React.lazy(() => import('./features/FAQ'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-text-primary selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-grow w-full relative">
        <Hero id="hero" />
        <DailyDish id="prato-do-dia" />
        <Institutional id="historia" />
        <Menu id="cardapio" />
        
        <Suspense fallback={
          <div className="min-h-[300px] flex items-center justify-center text-primary w-full tracking-[0.2em] text-xs uppercase" aria-live="polite" aria-busy="true">
            Preparando...
          </div>
        }>
          <Gallery id="galeria" />
          <Testimonials id="avaliacoes" />
          <Booking id="reserva" />
          <LocationMap id="localizacao" />
          <FAQ id="faq" />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
