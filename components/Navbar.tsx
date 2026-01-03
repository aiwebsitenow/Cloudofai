import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const Navbar = ({ openContact }: { openContact: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for the menu close animation/state update to finish unlocking the body scroll
    setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
            // Native scrollIntoView with smooth behavior relies on CSS scroll-margin-top
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300); // Slight delay to match exit animation or allow render cycle
  };

  const handleDesktopLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: 0.4
        }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            delayChildren: 0.1,
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number]
        }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 100 },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`
                w-full max-w-5xl rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300
                ${scrolled ? 'bg-white/10 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-transparent border border-transparent'}
            `}
        >
          <a href="#hero" className="flex items-center gap-3" onClick={(e) => handleDesktopLinkClick(e, '#hero')}>
            <Logo className="h-10 w-10 md:h-12 md:w-12" />
            <span className="font-bold text-lg md:text-xl tracking-tight text-white uppercase">AI Creative</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={(e) => handleDesktopLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
              <button 
                onClick={openContact}
                className="hidden md:block group relative px-6 py-2 rounded-full border border-white/20 overflow-hidden bg-black text-white transition-all hover:border-white"
              >
                <span className="absolute inset-0 w-full h-full bg-white translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                <span className="relative z-10 font-bold text-xs uppercase tracking-wide group-hover:text-black transition-colors duration-500">
                    Contact
                </span>
              </button>
              <button 
                className="md:hidden text-white p-1"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#050505] z-[60] md:hidden flex flex-col items-center justify-center space-y-6"
          >
             <button 
                className="absolute top-8 right-8 text-white p-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>

            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                variants={linkVariants}
                className="text-4xl font-light uppercase hover:text-green-500"
                onClick={(e) => handleMobileLinkClick(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              variants={linkVariants}
              onClick={() => {
                setIsOpen(false);
                openContact();
              }}
              className="group relative bg-white text-black px-10 py-4 rounded-full font-bold text-xl uppercase mt-8 overflow-hidden"
            >
                <span className="absolute inset-0 w-full h-full bg-green-500 translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                <span className="relative z-10">Contact Us</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;