import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Reveal, FadeIn } from './ui/animations';
import { motion } from 'framer-motion';

const PricingCard = ({ tier, isMonthly, recommended = false }: any) => {
  const price = isMonthly ? tier.monthlyPrice : tier.annualPrice;
  // Usually annual prices are displayed as "per month, billed annually"
  const period = "/month"; 

  return (
    <div className={`relative p-6 md:p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full 
        ${recommended 
            ? 'bg-gradient-to-b from-white/10 to-transparent border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)] md:scale-105 z-10' 
            : 'bg-transparent border-white/10 hover:border-white/30 hover:bg-white/5'
        }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-lg">
            Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className={`text-xl font-bold uppercase tracking-wide mb-2 ${recommended ? 'text-green-400' : 'text-gray-300'}`}>
            {tier.name}
        </h3>
        <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-black text-white">{price}</span>
            <span className="text-sm text-gray-500">{period}</span>
        </div>
        {!isMonthly && (
             <span className="text-xs text-green-500 font-medium mt-1 block">Billed Annually (Save 20%)</span>
        )}
        <p className="text-sm text-gray-400 mt-6 leading-relaxed border-t border-white/10 pt-6">
            {tier.description}
        </p>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        {tier.features.map((feature: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
                <div className={`mt-1 min-w-[16px] min-h-[16px] rounded-full flex items-center justify-center ${recommended ? 'bg-green-500 text-black' : 'bg-white/20 text-white'}`}>
                    <Check size={10} strokeWidth={4} />
                </div>
                <span className="text-sm text-gray-300">{feature}</span>
            </div>
        ))}
      </div>

      <a 
        href="https://calendly.com/aicreativeagency"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative w-full py-4 rounded-full font-bold uppercase tracking-wide transition-all text-sm md:text-base flex items-center justify-center overflow-hidden
          ${recommended 
            ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
            : 'bg-white text-black'
          }`}
      >
        <span className={`absolute inset-0 w-full h-full translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none ${recommended ? 'bg-black' : 'bg-green-500'}`} />
        <span className={`relative z-10 transition-colors ${recommended ? 'group-hover:text-white' : 'group-hover:text-black'}`}>Book Call</span>
      </a>
    </div>
  );
};

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const tiers = [
        {
            name: "Starter",
            description: "Perfect for testing the waters with AI-driven creative.",
            monthlyPrice: "$497",
            annualPrice: "$397",
            features: [
                "3 AI UGC video ads",
                "3 variations each (9 total)",
                "Script writing included",
                "5-day turnaround",
                "1 round of revisions"
            ]
        },
        {
            name: "Growth",
            description: "For brands ready to scale aggressively with constant testing.",
            monthlyPrice: "$1,297",
            annualPrice: "$1,037",
            recommended: true,
            features: [
                "10 AI UGC video ads monthly",
                "2 variations each (20 total)",
                "Ongoing script optimization",
                "3-day turnaround",
                "Unlimited revisions",
                "Monthly performance report"
            ]
        },
        {
            name: "Scale",
            description: "High volume output for high spending ad accounts.",
            monthlyPrice: "$2,497",
            annualPrice: "$1,997",
            features: [
                "20 AI UGC video ads monthly",
                "3 variations each (60 total)",
                "A/B tested hooks & CTAs",
                "48h priority turnaround",
                "Dedicated account manager",
                "Weekly strategy calls"
            ]
        }
    ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0a0a0a] scroll-mt-28">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 text-center">
             <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-medium uppercase leading-[0.9] tracking-tight text-white mb-6">
                <span className="block">Simple</span>
                <span className="block font-serif italic text-white/80">Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg mb-8">Transparent packages designed to scale with your ad spend.</p>
            
            {/* Toggle Switch */}
            <div className="flex justify-center items-center gap-4">
                <span className={`text-sm font-bold uppercase transition-colors ${isMonthly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                <button 
                    onClick={() => setIsMonthly(!isMonthly)}
                    className="relative w-16 h-8 bg-white/10 rounded-full border border-white/20 p-1"
                >
                    <motion.div 
                        className="w-5 h-full bg-green-500 rounded-full shadow-md"
                        animate={{ x: isMonthly ? 0 : 32 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </button>
                <span className={`text-sm font-bold uppercase transition-colors ${!isMonthly ? 'text-white' : 'text-gray-500'}`}>Annually</span>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
             {tiers.map((tier, i) => (
                <Reveal 
                    key={i} 
                    delay={i * 0.1}
                    width="100%"
                    className={`
                        w-full 
                        ${tier.recommended ? 'lg:-mt-8 lg:-mb-8 z-10' : ''}
                        ${i === 2 ? 'md:col-span-2 md:w-[50%] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0' : ''}
                    `}
                >
                    <PricingCard tier={tier} isMonthly={isMonthly} recommended={tier.recommended} />
                </Reveal>
             ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;