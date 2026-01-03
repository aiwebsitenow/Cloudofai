import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Loader from './components/Loader';
import ContactModal from './components/ContactModal';
import ChatWidget from './components/ChatWidget';

function App() {
  const [loading, setLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle scroll restoration and initial position
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Custom cursor effect with text support
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed top-0 left-0 w-4 h-4 bg-green-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out flex items-center justify-center hidden lg:flex will-change-transform';
    
    const cursorText = document.createElement('span');
    cursorText.className = 'text-black text-[2.5px] font-bold uppercase opacity-0 transition-opacity duration-200 whitespace-nowrap';
    cursor.appendChild(cursorText);
    
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    let currentScale = 1;

    const updateCursorStyle = () => {
        cursor.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
    }

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const clickable = target.closest('a, button');
        const customCursor = target.closest('[data-cursor-text]');

        // Prioritize clickable elements (links/buttons) even if they are inside a custom cursor area
        if (clickable) {
            currentScale = 3;
            cursorText.style.opacity = '0';
            cursor.classList.add('mix-blend-difference');
            cursor.style.backgroundColor = '#22c55e';
        } else if (customCursor) {
            const text = customCursor.getAttribute('data-cursor-text');
            currentScale = 4; // Reduced scale for smaller appearance
            cursorText.innerText = text || '';
            cursorText.style.opacity = '1';
            cursor.classList.remove('mix-blend-difference'); // Solid green for readability
            cursor.style.backgroundColor = '#22c55e'; // Ensure green
        } else {
            currentScale = 1;
            cursorText.style.opacity = '0';
            cursor.classList.add('mix-blend-difference');
            cursor.style.backgroundColor = '#22c55e';
        }
        updateCursorStyle();
    };
    
    // Initial position center to avoid jump
    cursor.style.left = '-100px'; 
    cursor.style.transform = `translate(-50%, -50%) scale(1)`;

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', onMouseOver);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-green-500 selection:text-black overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <AnimatePresence mode="wait">
        {loading && (
          <Loader 
            onComplete={() => {
              setLoading(false);
              // Ensure we start at the top
              window.scrollTo(0, 0);
            }} 
          />
        )}
      </AnimatePresence>

      <Navbar openContact={() => setIsContactOpen(true)} />
      <main>
        <Hero openContact={() => setIsContactOpen(true)} />
        <Services />
        <Work />
        <Results />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Contact />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Floating Elements */}
      <ChatWidget />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919625654137?text=Hi%2C%20I%27m%20interested%20in%20scaling%20my%20brand%20with%20AI%20Creative%20Studio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;