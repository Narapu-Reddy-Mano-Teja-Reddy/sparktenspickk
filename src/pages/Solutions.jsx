import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineChip, HiOutlineCloud, HiOutlineChartBar, HiOutlineDeviceMobile, HiOutlineGlobe, HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const solutions = [
  {
    title: "Enterprise Software Solutions",
    desc: "Custom-built, high-performance software architectures designed to streamline your most complex operations, drastically improve workforce productivity, and seamlessly scale to support your long-term, global business growth. We build monolithic and microservice infrastructures tailored to your unique requirements.",
    icon: <HiOutlineCode className="w-12 h-12 text-primary-gold" />
  },
  {
    title: "AI & Intelligent Automation",
    desc: "Transform repetitive, error-prone tasks into perfectly executed automated workflows using advanced artificial intelligence, machine learning pipelines, and intelligent business automation. We integrate custom LLMs and computer vision to give your enterprise a distinct cognitive advantage.",
    icon: <HiOutlineChip className="w-12 h-12 text-primary-gold" />
  },
  {
    title: "Cloud & Digital Infrastructure",
    desc: "Deploy on hyper-scalable cloud solutions and modern hosting architectures. We construct secure, auto-scaling digital infrastructure on AWS, Azure, and GCP built specifically for 99.99% high availability, fault tolerance, and uncompromised military-grade security.",
    icon: <HiOutlineCloud className="w-12 h-12 text-primary-gold" />
  },
  {
    title: "Business Management Systems",
    desc: "Comprehensive ERP, CRM, POS, HRMS, inventory, and complete business management platforms. We replace fragmented legacy systems with unified, centralized dashboards that give you absolute, real-time control over every operational metric of your business.",
    icon: <HiOutlineChartBar className="w-12 h-12 text-primary-gold" />
  },
  {
    title: "Digital Experience Solutions",
    desc: "We engineer modern, lightning-fast websites, cross-platform mobile applications, SaaS platforms, and secure customer portals. Our design philosophy marries striking luxury aesthetics with frictionless, intuitive user experiences that guarantee maximum conversion rates.",
    icon: <HiOutlineDeviceMobile className="w-12 h-12 text-primary-gold" />
  },
  {
    title: "Brand & Digital Growth",
    desc: "Complete, high-impact branding, UI/UX design, technical SEO, digital marketing, and data-driven growth strategies. We don't just build your product; we orchestrate market penetration strategies that strengthen your online presence and generate measurable, compounding ROI.",
    icon: <HiOutlineGlobe className="w-12 h-12 text-primary-gold" />
  },
  {
    title: "Innovation Consulting",
    desc: "Elite technology consulting services to help legacy businesses confidently adopt modern technologies, optimize bloated workflows, and architect a strategic roadmap for the next decade of technological disruption and aggressive market expansion.",
    icon: <HiOutlineLightBulb className="w-12 h-12 text-primary-gold" />
  }
];

export default function Solutions() {
  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="Solutions We Offer" 
        description="Discover custom enterprise software, AI automation engines, cloud architectures, POS and ERP management dashboards." 
        keywords="enterprise IT solutions, business automation tools, custom ERP systems, cloud security"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl text-white mb-8 uppercase tracking-tight leading-tight">
            Smart Digital <br className="hidden md:block" /> <span className="text-primary-gold">Solutions</span> For Every Business
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-body max-w-4xl mx-auto leading-relaxed">
            At <strong className="text-primary-gold font-bold">SPARK TENSPICK</strong>, we deliver intelligent, fiercely scalable, and future-ready technology solutions that solve complex, high-stakes business challenges. 
            Whether you're a funded startup launching your first disruptive product or a legacy enterprise modernizing global operations, our solutions are meticulously engineered to improve efficiency, accelerate hyper-growth, and drive total digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {solutions.map((sol, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 sm:p-10 border border-border group hover:border-primary-gold transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-8 relative z-10 p-4 bg-background inline-block rounded-xl border border-border group-hover:border-primary-gold/50 transition-colors w-20 h-20 flex items-center justify-center">
                {sol.icon}
              </div>
              <h3 className="font-heading text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-primary-gold transition-colors duration-300 relative z-10">{sol.title}</h3>
              <p className="text-white/70 font-body leading-relaxed flex-grow text-lg relative z-10">{sol.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary border border-primary-gold/30 p-8 sm:p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-10 blur-3xl rounded-full bg-primary-gold pointer-events-none"></div>
          <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-widest mb-6 relative z-10">Ready to Transform Your Enterprise?</h2>
          <p className="text-white/80 font-body text-xl max-w-3xl mx-auto leading-relaxed mb-10 relative z-10">
            Stop losing ground to technological inefficiencies. Partner with SPARK TENSPICK to architect the exact digital solution your business needs to dominate the market.
          </p>
          <Link to="/contact" className="relative z-10 inline-block px-10 py-5 bg-primary-gold text-background font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-background transition-all duration-300 shadow-[0_0_20px_rgba(200,155,60,0.4)]">
            Schedule a Technical Consultation
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
