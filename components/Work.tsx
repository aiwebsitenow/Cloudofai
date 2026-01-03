import React, { useState, useRef } from 'react';
import { Play, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { Reveal } from './ui/animations';

interface Project {
  category: string;
  title: string;
  metric: string;
  image: string;
  video?: string;
}

const WorkItem = ({ category, title, metric, image, video, delay }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reveal delay={delay} className="w-full">
      {/* Aspect ratio 4:5 for vertical content */}
      <div 
        className="group relative w-full aspect-[4/5] bg-gray-900 overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {video ? (
            <div className="w-full h-full relative">
                <video 
                    ref={videoRef}
                    src={video}
                    poster={image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
            </div>
        ) : (
            <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60" 
            />
        )}
        
        {/* Play Icon / Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className={`w-20 h-20 bg-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 shadow-lg ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
             <Play className="fill-black text-black ml-1" size={32} />
          </div>
        </div>

        {/* Content Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20">
          <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider border border-white/5">{category}</span>
              <span className="text-green-400 text-xs font-mono font-bold tracking-tight bg-green-500/10 px-2 py-1 rounded">{metric}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold uppercase leading-none text-white tracking-tight">{title}</h3>
        </div>
      </div>
    </Reveal>
  );
};

const Work = () => {
  const projects: Project[] = [
    {
        category: "Beverage",
        title: "NaturAqua",
        metric: "Brand Lift 40%",
        image: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/61904791094042894541793739777006.jpg",
        video: "https://cdn.coverr.co/videos/coverr-strawberries-falling-into-water-5287/1080p.mp4" 
    },
    {
        category: "Fragrance",
        title: "Amyris No.7",
        metric: "Top Seller",
        image: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/25555239967922247754397395054009.jpg",
        video: "https://cdn.coverr.co/videos/coverr-woman-in-white-dress-5536/1080p.mp4" 
    },
    {
        category: "Luxury",
        title: "Midnight Rose",
        metric: "2.8x AOV",
        image: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/57771746241838848149800742235008.jpg"
    },
    {
        category: "Food",
        title: "Chef's Splash",
        metric: "Viral Content",
        image: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/93466133177703819864753443026010.jpg"
    },
    {
        category: "Skincare",
        title: "AvoGlow",
        metric: "Subscribers +200%",
        image: "https://res.cloudinary.com/subframe/image/upload/v1711417507/tf-web/71239617260064955740449419102011.jpg"
    }
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-8 text-center md:text-left">
            <Reveal>
                <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-medium uppercase leading-[0.9] tracking-tight text-white">
                    <span className="block">Selected</span>
                    <span className="block font-serif italic text-white/80">Works</span>
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <a 
                    href="https://aicreativeagency.notion.site/ebd//29585895b75680e49627ca9492850ce7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 pb-1 border-b border-green-500 text-green-500 uppercase font-bold tracking-wide hover:text-white hover:border-white transition-colors mb-2 md:mb-4"
                >
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                </a>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
                <WorkItem 
                    key={i}
                    delay={0.1 * i}
                    category={project.category}
                    title={project.title}
                    metric={project.metric}
                    image={project.image}
                    video={project.video}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;