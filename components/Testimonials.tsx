import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "We went from waiting 2-3 weeks for creator content to getting 10 ads in 3 days. Game changer.",
        name: "Sarah Jenkins",
        role: "CMO",
        company: "FitLife Co.",
        stars: 5
    },
    {
        quote: "Cut our creative costs by 60% and our ROAS improved by 35%. The math just works.",
        name: "Mike Ross",
        role: "Founder",
        company: "TechGear",
        stars: 5
    },
    {
        quote: "Found 3 new winning ads in the first month. Scaled our account from $15k to $60k/day.",
        name: "David Chen",
        role: "Head of Growth",
        company: "PureSkin",
        stars: 5
    },
    {
        quote: "They understand performance marketing. It's not just video production, it's strategic creative.",
        name: "Jessica Alba",
        role: "Director",
        company: "HomeGoods",
        stars: 5
    }
];

const TestimonialCard = ({ data }: any) => (
    <div className="min-w-[85vw] md:min-w-[450px] bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 mr-4 md:mr-6 flex flex-col justify-between h-[280px] md:h-[300px]">
        <div>
            <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(data.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-green-500 text-green-500" />
                ))}
            </div>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-200">"{data.quote}"</p>
        </div>
        <div className="flex items-center gap-4 mt-6 md:mt-8">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white/50 text-sm font-bold border border-white/10">
                {data.name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-white uppercase text-sm">{data.name}</div>
                <div className="text-xs text-gray-500">{data.role}, {data.company}</div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Horizontal scroll effect based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="testimonials" ref={containerRef} className="py-24 md:py-32 bg-black overflow-hidden relative scroll-mt-28">
      <div className="container mx-auto px-6 mb-12 md:mb-16 flex items-end justify-between">
         <h2 className="text-[10vw] lg:text-[6vw] font-medium uppercase leading-[0.9] tracking-tight text-white max-w-2xl">
            <span className="block">Client</span>
            <span className="block font-serif italic text-white/80">Testimonials</span>
        </h2>
         <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
      </div>

      <div className="relative w-full">
         <motion.div style={{ x }} className="flex pl-6 md:pl-[10vw]">
            {testimonials.map((t, i) => (
                <TestimonialCard key={i} data={t} />
            ))}
            {testimonials.map((t, i) => (
                <TestimonialCard key={`dup-${i}`} data={t} />
            ))}
         </motion.div>
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;