import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const categories = ["All", "Software", "Websites", "AI & Automation", "Branding"];
const projects = [
  { 
    id: 1, 
    category: "Software", 
    title: "Global Supply Chain ERP", 
    description: "A comprehensive enterprise resource planning system that handles logistics across 30+ countries, reducing operational costs by 40%.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" 
  },
  { 
    id: 2, 
    category: "Websites", 
    title: "Luxury Hospitality Platform", 
    description: "A high-end booking platform for premium resorts, featuring immersive 3D virtual tours and seamless international payment gateways.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" 
  },
  { 
    id: 3, 
    category: "Software", 
    title: "FinTech Trading Dashboard", 
    description: "Real-time institutional trading platform built with WebSockets, handling millions of transactions per second with ultra-low latency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" 
  },
  { 
    id: 4, 
    category: "AI & Automation", 
    title: "Predictive Analytics Engine", 
    description: "Machine learning model deployed for a top-tier retail client to forecast inventory demands with 98% accuracy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" 
  },
  { 
    id: 5, 
    category: "Websites", 
    title: "Next-Gen E-Commerce", 
    description: "A highly optimized headless e-commerce solution driving $50M+ in annual sales, with an average page load time under 0.5s.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800" 
  },
  { 
    id: 6, 
    category: "Branding", 
    title: "Corporate Identity Overhaul", 
    description: "Complete visual rebranding for a legacy financial institution, modernizing their digital presence and physical assets.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800" 
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="Our Portfolio" 
        description="A curated showcase of SPARK TENSPICK's engineering achievements, including ERP integrations, FinTech dashboards, and custom AI systems." 
        keywords="software portfolio, custom ERP case study, e-commerce case study, agritech apps, branding redesigns"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl text-foreground mb-6 uppercase">
            Our <span className="text-primary-gold">Portfolio</span>
          </h1>
          <p className="text-muted text-lg md:text-xl font-body max-w-3xl mx-auto leading-relaxed">
            A curated showcase of our finest engineering achievements and digital designs, transforming complex challenges into elegant solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border uppercase tracking-widest text-sm transition-colors duration-300 font-heading ${
                filter === cat 
                  ? 'border-primary-gold bg-primary-gold text-background' 
                  : 'border-border text-foreground hover:border-primary-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative overflow-hidden border border-border bg-card aspect-[4/5]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700"
                />
                
                {/* Default visible bottom text */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <span className="text-primary-gold text-xs tracking-widest uppercase font-heading mb-2 block">{project.category}</span>
                  <h3 className="text-white text-2xl font-heading">{project.title}</h3>
                </div>

                {/* Hover overlay text */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                  <span className="text-primary-gold text-xs tracking-widest uppercase font-heading mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                  <h3 className="text-white text-3xl font-heading mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                  <p className="text-muted font-body text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
