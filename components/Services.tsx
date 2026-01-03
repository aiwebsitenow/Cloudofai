import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/animations';

const workImages = {
    beverage: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/61904791094042894541793739777006.jpg",
    fragrance: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/25555239967922247754397395054009.jpg",
    luxury: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/57771746241838848149800742235008.jpg",
    food: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/93466133177703819864753443026010.jpg",
    skincare: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/71239617260064955740449419102011.jpg"
};

const servicesData = [
  {
    id: "01",
    title: "AI UGC Ads",
    description: "Dominate social feeds with high-volume, high-converting user-generated content. We utilize AI avatars and voice synthesis to produce unlimited creative variations, allowing you to test hooks and scale winners faster than ever before.",
    subServices: [
        { name: "Viral Hook Testing", image: workImages.skincare },
        { name: "Hyper-Realistic Avatars", image: workImages.food },
        { name: "Voice Cloning & Dubbing", image: workImages.beverage },
        { name: "Performance Scripting", image: workImages.luxury }
    ],
    images: [
       workImages.skincare, 
       workImages.food, 
       workImages.beverage  
    ]
  },
  {
    id: "02",
    title: "AI Product Films",
    description: "Studio-quality commercial production without the studio price tag. We transform standard product imagery into breathtaking cinematic video assets using advanced generative video models and 3D compositing.",
    subServices: [
        { name: "Generative 3D Motion", image: workImages.beverage },
        { name: "Virtual Set Extensions", image: workImages.fragrance },
        { name: "Liquid & Particle Sims", image: workImages.food },
        { name: "Dynamic Lighting Effects", image: workImages.luxury }
    ],
    images: [
        workImages.beverage, 
        workImages.fragrance, 
        workImages.luxury  
    ]
  },
  {
    id: "03",
    title: "Web Experience",
    description: "We build award-winning digital flagships. Blending high-performance engineering with immersive WebGL interactions to create websites that tell your brand story and convert visitors into loyal customers.",
    subServices: [
        { name: "High-Conversion UI/UX", image: workImages.fragrance },
        { name: "WebGL & 3D Interactions", image: workImages.beverage },
        { name: "Headless CMS Architecture", image: workImages.skincare },
        { name: "Technical SEO & Speed", image: workImages.luxury }
    ],
    images: [
        workImages.fragrance, 
        workImages.beverage, 
        workImages.skincare  
    ]
  },
  {
    id: "04",
    title: "AI Automation",
    description: "Operational efficiency re-imagined. We construct bespoke AI workflows that automate repetitive tasks, synchronize data across platforms, and free your team to focus on high-leverage strategy.",
    subServices: [
        { name: "Custom Workflow Agents", image: workImages.luxury },
        { name: "Data Entry Automation", image: workImages.skincare },
        { name: "CRM & Lead Sync", image: workImages.food },
        { name: "Internal Ops Dashboards", image: workImages.beverage }
    ],
    images: [
        workImages.luxury, 
        workImages.skincare, 
        workImages.food  
    ]
  },
  {
    id: "05",
    title: "24/7 Voice Agent",
    description: "Deploy human-like voice AI to handle your phone lines. Our agents qualify leads, book appointments, and resolve support queries instantly, operating 24/7 with zero hold times.",
    subServices: [
        { name: "Inbound Customer Support", image: workImages.beverage },
        { name: "Outbound Lead Reactivation", image: workImages.fragrance },
        { name: "Appointment Setting", image: workImages.luxury },
        { name: "Multi-Language Support", image: workImages.skincare }
    ],
    images: [
        workImages.beverage, 
        workImages.fragrance, 
        workImages.luxury  
    ]
  },
  {
    id: "06",
    title: "AI Chatbots",
    description: "Turn your website traffic into revenue. Our intelligent chatbots engage visitors in natural conversation, capture contact details, recommend products, and answer complex queries instantly.",
    subServices: [
        { name: "Lead Gen & Qualification", image: workImages.food },
        { name: "eCommerce Product Quiz", image: workImages.skincare },
        { name: "24/7 Support Concierge", image: workImages.beverage },
        { name: "WhatsApp/Telegram Bots", image: workImages.fragrance }
    ],
    images: [
        workImages.food, 
        workImages.skincare, 
        workImages.beverage  
    ]
  },
  {
    id: "07",
    title: "App Development",
    description: "Scalable, secure, and intuitive applications for mobile and web. We handle full-cycle development from MVP to enterprise scale, using modern frameworks to ensure your product is future-proof.",
    subServices: [
        { name: "iOS & Android (React Native)", image: workImages.fragrance },
        { name: "SaaS Web Platforms", image: workImages.luxury },
        { name: "MVP Rapid Prototyping", image: workImages.food },
        { name: "Cloud Infrastructure", image: workImages.beverage }
    ],
    images: [
        workImages.fragrance, 
        workImages.luxury, 
        workImages.food  
    ]
  }
];

const ServiceItem = ({ service, isOpen, onClick }: any) => {
  const [activeImage, setActiveImage] = useState(service.images[0]);
  
  // Reset active image when service changes or closes
  useEffect(() => {
    setActiveImage(service.images[0]);
  }, [isOpen, service]);

  return (
    <div className="border-t border-white/10 last:border-b border-white/10">
      <div 
        onClick={onClick}
        data-cursor-text="Click Me"
        className="group relative flex flex-col cursor-pointer transition-colors hover:bg-white/5"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16 py-8 md:py-16 px-4 md:px-0">
            {/* Number */}
            <span className={`text-4xl md:text-6xl font-serif italic text-white/30 w-[80px] md:w-[120px] transition-colors duration-500 ${isOpen ? 'text-green-500 opacity-100' : 'group-hover:text-white/50'}`}>
                {service.id}
            </span>

            <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 md:gap-12 w-full">
                        {/* Title */}
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <h3 className={`text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight uppercase transition-all duration-500 ${isOpen ? 'text-white' : 'text-white group-hover:text-green-500'}`}>
                                {service.title}
                            </h3>
                            {/* Mobile Arrow */}
                            <div className={`md:hidden transform transition-transform duration-300 ${isOpen ? 'rotate-90 text-green-500' : 'text-white/50'}`}>
                                <ArrowRight size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                >
                    <div className="px-4 md:px-0 pb-12 md:pb-24 pl-0 md:pl-[144px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                            
                            {/* Visuals - Responsive */}
                            <div className="relative w-full perspective-1000">
                                {/* Mobile Image - Updates on hover */}
                                <div className="lg:hidden w-full h-[250px] md:h-[350px] overflow-hidden rounded-lg mb-4 bg-[#111] relative">
                                    <AnimatePresence>
                                        <motion.img 
                                            key={activeImage}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1.05 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            src={activeImage} 
                                            alt={service.title} 
                                            className="absolute inset-0 w-full h-full object-cover" 
                                        />
                                     </AnimatePresence>
                                </div>

                                {/* Desktop Stacked Images */}
                                <div className="hidden lg:block relative h-[300px] md:h-[450px]">
                                    {/* Main Focus Image (updates on hover) */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-64 aspect-[4/5] z-30"
                                        initial={{ rotate: -15, y: 100, opacity: 0 }}
                                        animate={{ rotate: -8, y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="w-full h-full rounded-sm shadow-2xl overflow-hidden relative bg-[#111]">
                                            <AnimatePresence>
                                                <motion.img 
                                                    key={activeImage}
                                                    src={activeImage} 
                                                    alt="visual 1" 
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1.05 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                                    className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-125" 
                                                />
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                    
                                    {/* Background Stack Images */}
                                    <motion.div
                                        className="absolute top-20 left-48 w-56 aspect-square z-20"
                                        initial={{ rotate: 10, y: 100, opacity: 0 }}
                                        animate={{ rotate: 4, y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                    >
                                        <img src={service.images[1]} alt="visual 2" className="w-full h-full object-cover rounded-sm shadow-2xl brightness-90 contrast-125" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute bottom-10 left-20 w-48 aspect-[3/2] z-10"
                                        initial={{ rotate: -5, y: 100, opacity: 0 }}
                                        animate={{ rotate: -2, y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    >
                                        <div className="w-full h-full bg-[#111] border border-white/20 rounded-sm flex items-center justify-center overflow-hidden">
                                            <img src={service.images[2]} alt="visual 3" className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Column: Info & Sub-services */}
                            <div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="max-w-xl mb-8 md:mb-12"
                                >
                                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8 font-light">
                                        {service.description}
                                    </p>
                                    <a 
                                        href="https://calendly.com/aicreativeagency"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative px-8 py-3 rounded-full border border-white/30 text-white font-medium overflow-hidden flex items-center gap-2 uppercase text-sm tracking-wider w-fit transition-all hover:border-white"
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-white translate-y-full rounded-[100%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                                        <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                                            Explore Service
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </a>
                                </motion.div>

                                <div className="space-y-4 md:space-y-6" onMouseLeave={() => setActiveImage(service.images[0])}>
                                    {service.subServices.map((sub: {name: string, image: string}, i: number) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + (i * 0.1) }}
                                            onMouseEnter={() => setActiveImage(sub.image)}
                                            className="group/item flex items-center justify-between py-3 md:py-4 border-b border-white/10 cursor-pointer hover:pl-4 transition-all duration-300"
                                        >
                                            <span className="text-lg md:text-xl font-light text-gray-300 group-hover/item:text-white transition-colors">{sub.name}</span>
                                            <Plus size={20} className="text-gray-500 group-hover/item:text-green-500 transition-colors" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Services = () => {
  const [openId, setOpenId] = useState("01");

  return (
    <section id="services" className="py-20 md:py-32 bg-[#050505] text-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16 md:mb-24 text-center">
             <h2 className="text-[10vw] lg:text-[7vw] font-medium uppercase leading-[0.9] tracking-tight text-white">
                <span className="block">Our</span>
                <span className="block font-serif italic text-white/80">Expertise</span>
            </h2>
        </Reveal>

        <div className="flex flex-col">
            {servicesData.map((service) => (
                <ServiceItem 
                    key={service.id} 
                    service={service} 
                    isOpen={openId === service.id} 
                    onClick={() => setOpenId(openId === service.id ? "" : service.id)} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;