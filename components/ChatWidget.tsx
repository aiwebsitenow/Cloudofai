import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatUrl = "https://aicreativeagency.notion.site/ebd//29585895b75680e49627ca9492850ce7";

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, originY: 1, originX: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-44 right-6 md:right-6 z-[60] w-[85vw] md:w-[400px] h-[500px] md:h-[600px] max-h-[60vh] md:max-h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 flex flex-col"
          >
             {/* Header */}
             <div className="bg-[#0a0a0a] p-4 flex justify-between items-center border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
                    </div>
                    <span className="font-bold text-white uppercase tracking-wider text-sm">AI Assistant</span>
                </div>
                
                <div className="flex items-center gap-1">
                    <a 
                        href={chatUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        title="Open in new tab"
                    >
                        <ExternalLink size={18} />
                    </a>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="text-gray-400 hover:text-white transition-colors p-2"
                    >
                        <X size={20} />
                    </button>
                </div>
             </div>
             {/* Iframe */}
             <div className="flex-1 w-full bg-white relative">
                 <iframe 
                    src={chatUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    title="Chatbot"
                 />
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Trigger Button - Positioned above WhatsApp (bottom-6 + height + gap) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-[50] w-14 h-14 md:w-16 md:h-16 bg-[#0a0a0a] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300 group"
      >
         <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
         >
             {isOpen ? (
                 <X className="text-white group-hover:text-green-500 transition-colors" size={24} />
             ) : (
                 <MessageCircle className="text-white group-hover:text-green-500 transition-colors" size={28} />
             )}
         </motion.div>
      </button>
    </>
  );
};

export default ChatWidget;