import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Reveal } from './ui/animations';

const FloatingBadge = ({ text, colorClass, image, className, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    className={`absolute hidden lg:flex items-center gap-3 p-2 pr-5 rounded-full border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm z-20 shadow-2xl ${className}`}
  >
     <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={image} alt={text} className="w-full h-full object-cover" />
     </div>
     <span className={`text-[11px] font-extrabold uppercase tracking-widest ${colorClass}`}>
        {text}
     </span>
  </motion.div>
);

const Hero = ({ openContact }: { openContact: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-6 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
       
       {/* Video Background */}
       <div className="absolute inset-0 z-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-40 pointer-events-none"
          >
             {/* Futuristic HUD/AI Interface video to represent AI Ads creation */}
            <source src="https://cdn.coverr.co/videos/coverr-futuristic-hud-ui-animation-5456/1080p.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#050505]/40 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]"></div>
       </div>

       {/* Background Ambience */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

       <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Top Tag */}
          <Reveal>
            <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-8 md:mb-12 hover:bg-white/10 transition-colors cursor-default shadow-lg">
                Digital Agency
            </div>
          </Reveal>

          {/* Main Typography & Floating Elements Wrapper */}
          <div className="relative mb-8 md:mb-12 w-full max-w-7xl mx-auto">
              {/* Floating Elements */}
              <FloatingBadge 
                  text="Web Design" 
                  colorClass="text-orange-400"
                  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80"
                  className="-top-6 left-[5%] xl:left-[10%] -rotate-6"
                  delay={0.4}
              />
              <FloatingBadge 
                  text="App Design" 
                  colorClass="text-blue-400"
                  image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=150&q=80"
                  className="-top-2 right-[5%] xl:right-[12%] rotate-6"
                  delay={0.6}
              />
               <FloatingBadge 
                  text="Branding" 
                  colorClass="text-green-400"
                  image="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=150&q=80"
                  className="bottom-8 right-[15%] xl:right-[20%] -rotate-3"
                  delay={0.8}
              />

              <Reveal width="100%">
                <h1 className="text-[12vw] lg:text-[7.5vw] font-medium uppercase leading-[0.9] tracking-tight text-white drop-shadow-2xl">
                    <span className="block">Innovative</span>
                    <span className="block font-serif italic text-white/90">Solutions To</span>
                    <span className="block">Elevate Your</span>
                    <span className="block font-serif italic text-white/90">Brand</span>
                </h1>
              </Reveal>
          </div>

          <Reveal delay={0.4}>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 font-light px-4 drop-shadow-lg">
                Transforming businesses through innovative strategies, advanced design, and integrated technology for impactful digital growth.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                    href="https://calendly.com/aicreativeagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-white text-black rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                >
                    <span className="absolute inset-0 w-full h-full bg-green-400 translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                    <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors">
                        Book Call
                        <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                </a>
                
                <button 
                    onClick={openContact}
                    className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-white/20 text-white rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden w-full sm:w-auto transition-all"
                >
                    <span className="absolute inset-0 w-full h-full bg-white translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                    <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors">
                        Contact Us
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </button>
            </div>
          </Reveal>

       </div>
    </section>
  );
};

export default Hero;