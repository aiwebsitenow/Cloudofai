import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const greetings = [
  "Hello", 
  "नमस्ते", 
  "Hola", 
  "Hallo", 
  "হ্যালো"
];

const services = [
  "AI UGC Ads",
  "AI Product Films",
  "Web Experience",
  "AI Automation",
  "24/7 Voice Agent",
  "AI Chatbots",
  "App Development"
];

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'greetings' | 'intro' | 'services'>('greetings');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Timings (ms)
  const greetingTime = 250;
  // Reduced intro time slightly as the text is smaller and easier to read now
  const introTime = 1200; 
  const serviceTime = 400; // Slightly longer for the slide effect

  // Calculate total expected duration for the progress bar
  const totalTime = (greetings.length * greetingTime) + introTime + (services.length * serviceTime);

  useEffect(() => {
    // Progress bar simulation
    const interval = 30; // Update freq
    const totalSteps = totalTime / interval;
    const increment = 100 / totalSteps;
    
    const timer = setInterval(() => {
        setProgress(p => {
            const next = p + increment;
            return next >= 100 ? 100 : next;
        });
    }, interval);

    return () => clearInterval(timer);
  }, [totalTime]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'greetings') {
        if (greetingIndex < greetings.length - 1) {
            timeout = setTimeout(() => {
                setGreetingIndex(prev => prev + 1);
            }, greetingTime);
        } else {
            timeout = setTimeout(() => {
                setPhase('intro');
            }, greetingTime);
        }
    } else if (phase === 'intro') {
         // Show "We are experts in" for a moment before starting services
         timeout = setTimeout(() => {
            setPhase('services');
        }, introTime);
    } else if (phase === 'services') {
        // Cycle through services
        if (serviceIndex < services.length - 1) {
            timeout = setTimeout(() => {
                setServiceIndex(prev => prev + 1);
            }, serviceTime);
        } else {
            // After last service, wait one cycle then finish
            timeout = setTimeout(() => {
                onComplete();
            }, serviceTime);
        }
    }

    return () => clearTimeout(timeout);
  }, [phase, greetingIndex, serviceIndex, onComplete]);

  return (
    <motion.div
        className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-sans px-4"
        exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-[90vw] mx-auto">
            <AnimatePresence mode="wait">
                {phase === 'greetings' ? (
                    <motion.div
                        key="greetings"
                        className="absolute inset-0 flex items-center justify-center"
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.5 } }}
                    >
                        <motion.p 
                            key={`greeting-${greetingIndex}`}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.2 }}
                            className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter"
                        >
                            {greetings[greetingIndex]}
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="services-block"
                        className="flex flex-col items-center justify-center w-full h-full pb-20 pt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mb-8 md:mb-10"
                        >
                            <Logo className="w-20 h-20 md:w-24 md:h-24 opacity-90" />
                        </motion.div>

                        {/* Static Intro Text - Reduced Size */}
                        <motion.p 
                            className="text-xl md:text-2xl text-green-500 font-medium font-serif italic mb-8 md:mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            We are experts in
                        </motion.p>
                        
                        {/* Cycling Services List - Curved Slide Animation */}
                        <div className="h-24 md:h-32 w-full flex items-center justify-center relative perspective-[600px] overflow-hidden">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {phase === 'services' && (
                                    <motion.h3
                                        key={services[serviceIndex]}
                                        initial={{ 
                                            y: "100%", 
                                            opacity: 0, 
                                            rotateX: -45,
                                            filter: "blur(4px)"
                                        }}
                                        animate={{ 
                                            y: "0%", 
                                            opacity: 1, 
                                            rotateX: 0,
                                            filter: "blur(0px)"
                                        }}
                                        exit={{ 
                                            y: "-100%", 
                                            opacity: 0, 
                                            rotateX: 45,
                                            filter: "blur(4px)"
                                        }}
                                        transition={{ 
                                            duration: 0.5,
                                            ease: [0.16, 1, 0.3, 1] // Custom ease for smooth slide
                                        }}
                                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight text-center leading-[0.9] absolute w-full origin-center"
                                    >
                                        {services[serviceIndex]}
                                    </motion.h3>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 overflow-hidden z-20">
             <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="block text-5xl md:text-8xl font-black text-white/10 tracking-tighter"
            >
                {Math.min(Math.round(progress), 100)}%
            </motion.span>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5 z-20">
             <motion.div 
                className="h-full bg-green-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
             />
        </div>
    </motion.div>
  );
};

export default Loader;