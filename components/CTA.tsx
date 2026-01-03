import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/animations';

const CTA = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-green-500 text-black overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
            <Reveal>
                <h2 className="text-[14vw] md:text-[12vw] font-medium uppercase leading-[0.8] mb-8 md:mb-12 tracking-tight">
                    <span className="block">Ready To</span>
                    <span className="block font-serif italic opacity-90">Scale?</span>
                </h2>
            </Reveal>
            
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 md:gap-12 border-t border-black/20 pt-8 md:pt-12">
                <p className="text-xl md:text-3xl font-medium max-w-xl leading-tight">
                    Stop wasting time on creatives that don't convert. Let AI handle the heavy lifting.
                </p>
                <a 
                    href="https://calendly.com/aicreativeagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-4 bg-black text-white px-8 md:px-10 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold uppercase overflow-hidden transition-all w-full md:w-auto"
                >
                    <span className="absolute inset-0 w-full h-full bg-white translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                    <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors">
                        Book Strategy Call
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
            </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] border-[20px] border-black/10 rounded-full pointer-events-none" />
    </section>
  );
};

export default CTA;