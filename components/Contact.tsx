import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">
        
        <div className="grid md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-6 lg:col-span-6">
                <h3 className="text-3xl font-bold uppercase mb-8 flex items-center gap-2">
                    Let's<span className="font-serif italic text-white/80 font-normal">Create</span>
                </h3>
                <div className="flex flex-col gap-4">
                    <p className="text-gray-400 mb-4">Looking for enterprise solutions?</p>
                    <a href="mailto:hello@aicreative.studio" className="text-2xl sm:text-3xl md:text-5xl font-bold hover:text-green-500 transition-colors break-words">
                        hello@aicreative.studio
                    </a>
                </div>
            </div>
            
            <div className="md:col-span-3 lg:col-span-3 md:pl-8">
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Sitemap</h4>
                <ul className="space-y-4 font-medium">
                    <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-green-500 transition-colors">Services</a></li>
                    <li><a href="#work" onClick={(e) => handleScroll(e, '#work')} className="hover:text-green-500 transition-colors">Work</a></li>
                    <li><a href="#results" onClick={(e) => handleScroll(e, '#results')} className="hover:text-green-500 transition-colors">Results</a></li>
                    <li><a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')} className="hover:text-green-500 transition-colors">Pricing</a></li>
                    <li><a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="hover:text-green-500 transition-colors">Testimonials</a></li>
                    <li><a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-green-500 transition-colors">FAQ</a></li>
                </ul>
            </div>

            <div className="md:col-span-3 lg:col-span-3 md:text-right">
                 <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Socials</h4>
                 <ul className="space-y-4 font-medium flex flex-col md:items-end">
                    <li><a href="https://www.instagram.com/aicreativeagency.ig" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors">Instagram <ArrowUpRight size={14}/></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors">Twitter <ArrowUpRight size={14}/></a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors">LinkedIn <ArrowUpRight size={14}/></a></li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 pt-8 border-t border-white/10 z-20">
            <p className="text-sm text-gray-500">© 2024 AI Creative Studio. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-gray-500">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms</a>
            </div>
        </div>

        {/* Watermark - Reduced Size */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] w-full text-center pointer-events-none select-none overflow-hidden z-0">
            <h1 className="text-[12vw] font-black uppercase leading-none text-white/[0.03] whitespace-nowrap">
                AI CREATIVE
            </h1>
        </div>
      </div>
    </footer>
  );
};

export default Contact;