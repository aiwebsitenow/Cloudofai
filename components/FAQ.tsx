import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from './ui/animations';
import { AnimatePresence, motion } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only scroll if opened and it's not the initial render
        if (isOpen && containerRef.current) {
            const timer = setTimeout(() => {
                const yOffset = -120; // Offset for fixed navbar + padding
                const element = containerRef.current;
                if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div ref={containerRef} className="border-b border-white/10">
            <button 
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <h3 className={`text-base md:text-2xl font-bold uppercase transition-colors pr-8 ${isOpen ? 'text-green-500' : 'text-white group-hover:text-green-500/80'}`}>
                    {question}
                </h3>
                <motion.div 
                    initial={false}
                    animate={{ 
                        rotate: isOpen ? 45 : 0,
                        backgroundColor: isOpen ? "#22c55e" : "rgba(0,0,0,0)",
                        borderColor: isOpen ? "#22c55e" : "rgba(255,255,255,0.2)",
                        color: isOpen ? "#000000" : "#ffffff",
                        scale: isOpen ? [1, 1.15, 1] : 1
                    }}
                    transition={{ 
                        duration: 0.3,
                        scale: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    className="flex-shrink-0 p-2 rounded-full border border-white/20"
                >
                    <Plus size={16} className="md:w-5 md:h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { 
            q: "How does your AI UGC Ad process work?", 
            a: "We start by analyzing your brand assets and past performance data. Our AI models then generate scripts, select avatars (or clone your spokesperson), and produce high-quality video variations. You receive ready-to-launch creatives in 48-72 hours, designed specifically to stop the scroll." 
        },
        { 
            q: "Do your Voice Agents sound robotic?", 
            a: "Not at all. We use state-of-the-art voice synthesis that includes natural pauses, intonations, and fillers (like 'um' or 'ah') to create a conversational experience indistinguishable from a human agent. They can handle interruptions and complex logic flows seamlessly." 
        },
        { 
            q: "Can you build custom AI tools for our internal operations?", 
            a: "Yes. Our AI Automation service creates bespoke workflows. Whether it's automating data entry between your CRM and spreadsheets, building an internal knowledge base bot, or auto-drafting client emails, we build secure, scalable solutions to save your team hundreds of hours." 
        },
        { 
            q: "What is the timeline for a Web or App project?", 
            a: "Timelines vary by complexity. A high-converting landing page or marketing site typically takes 2-4 weeks. A full custom mobile app or SaaS platform MVP usually ranges from 8-12 weeks. We work in agile sprints to ensure you see progress every week." 
        },
        { 
            q: "How do your AI Chatbots differ from standard support widgets?", 
            a: "Standard widgets rely on rigid decision trees. Our AI Chatbots understand natural language and context. They can recommend specific products based on user preferences, check order status in real-time, and even upsell customers—acting more like a top-tier salesperson than a support ticket form." 
        },
        { 
            q: "Do you offer white-label services for other agencies?", 
            a: "Yes, we partner with select marketing agencies to provide white-label AI creative and development fulfillment. We act as your silent backend production team, allowing you to scale your service offerings without increasing overhead." 
        }
    ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#050505] scroll-mt-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal className="mb-12 md:mb-16">
            <h2 className="text-[10vw] lg:text-[5vw] font-medium uppercase leading-[0.9] tracking-tight text-white mb-4">
                <span className="block">Common</span>
                <span className="block font-serif italic text-white/80">Questions</span>
            </h2>
            <div className="h-1 w-20 bg-green-500"></div>
        </Reveal>

        <div>
            {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 0.1} width="100%">
                    <FAQItem 
                        question={faq.q} 
                        answer={faq.a} 
                        isOpen={openIndex === i} 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                    />
                </Reveal>
            ))}
        </div>
        
        <Reveal className="mt-16 text-center w-full">
            <p className="text-gray-400 mb-6">Still have questions about our services?</p>
            <a 
                href="https://calendly.com/aicreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/20 rounded-full font-bold uppercase overflow-hidden transition-all hover:border-white"
            >
                <span className="absolute inset-0 w-full h-full bg-white translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                <span className="relative z-10 group-hover:text-black transition-colors">Book a 15-min Chat</span>
            </a>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;