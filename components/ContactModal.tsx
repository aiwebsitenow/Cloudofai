import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
        onClose();
        window.location.href = "https://www.instagram.com/aicreativeagency.ig";
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
                <div className="bg-[#111] border border-white/10 w-full max-w-lg rounded-3xl p-8 md:p-10 pointer-events-auto relative overflow-hidden shadow-2xl">
                     <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <h3 className="text-3xl font-bold uppercase mb-2">Let's Talk</h3>
                    <p className="text-gray-400 mb-8">Tell us about your brand and goals.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-green-500 focus:outline-none transition-colors" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-green-500 focus:outline-none transition-colors" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Website / Social</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-green-500 focus:outline-none transition-colors" placeholder="instagram.com/brand" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-green-500 focus:outline-none transition-colors h-32 resize-none" placeholder="How can we help you scale?" required></textarea>
                        </div>

                        <button type="submit" className="group relative w-full bg-green-500 text-black font-bold uppercase py-4 rounded-xl overflow-hidden transition-all flex items-center justify-center gap-2 mt-4">
                            <span className="absolute inset-0 w-full h-full bg-white translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                            <span className="relative z-10 flex items-center gap-2">
                                Send Request <Send size={18} />
                            </span>
                        </button>
                    </form>
                </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;