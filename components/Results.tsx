import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './ui/animations';

const StatCard = ({ value, label }: { value: string, label: string }) => (
    <div className="flex flex-col p-6 border-l border-white/20">
        <span className="text-4xl md:text-6xl font-black text-white mb-2">{value}</span>
        <span className="text-sm text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
);

const Results = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section id="results" className="py-20 md:py-24 bg-[#050505] overflow-hidden scroll-mt-28">
      {/* Moving Ticker */}
      <div className="w-full bg-green-500 py-4 mb-16 md:mb-24 rotate-1 scale-105 border-y-4 border-black">
        <motion.div style={{ x }} className="flex whitespace-nowrap gap-8 md:gap-12 items-center">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-12">
                    <span className="text-2xl md:text-4xl font-black text-black uppercase">Result Driven</span>
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></span>
                    <span className="text-2xl md:text-4xl font-black text-black uppercase outline-text">ROI Focused</span>
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></span>
                </div>
            ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24 items-start">
            <div>
                <Reveal>
                    <h2 className="text-[10vw] lg:text-[6vw] font-medium uppercase leading-[0.9] tracking-tight text-white mb-6 md:mb-8">
                        <span className="block">Numbers</span>
                        <span className="block font-serif italic text-white/80">Don't Lie</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-md">Our AI-driven approach consistently outperforms traditional creative methods in speed, cost, and conversion.</p>
                </Reveal>
            </div>
            <Reveal delay={0.2} className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-8">
                <StatCard value="60%" label="Cost Reduction" />
                <StatCard value="3x" label="More Variations" />
                <StatCard value="72h" label="Turnaround" />
                <StatCard value="500+" label="Ads Created" />
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Results;