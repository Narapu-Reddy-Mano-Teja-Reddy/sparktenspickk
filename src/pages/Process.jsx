import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const processes = [
  { 
    step: "01", 
    name: "Discover", 
    desc: "We begin by understanding your business, objectives, challenges, and target audience. Through meticulous research and strategic planning, we define the project's scope, identify the optimal technology approach, and establish crystal-clear success metrics that ensure our engineering efforts are aligned with your bottom line.",
    includes: ["Business Consultation & Goal Definition", "Stakeholder Requirement Analysis", "Competitive Market Research", "Technology Stack Planning", "Solution Architecture Blueprint"]
  },
  { 
    step: "02", 
    name: "Design", 
    desc: "Our design team creates intuitive user experiences and strikingly modern interfaces that embody your brand's identity while ensuring frictionless usability across all devices, screen sizes, and accessibility standards. We believe design is not decoration — it's strategy.",
    includes: ["Deep User Research & Persona Mapping", "Information Architecture & Wireframing", "High-Fidelity UI/UX Design", "Interactive Clickable Prototypes", "Design System Creation & Review"]
  },
  { 
    step: "03", 
    name: "Develop", 
    desc: "Our elite engineers build hyper-scalable, rigorously secure, and high-performance digital solutions using the latest modern technologies and disciplined agile development practices. Every sprint delivers tangible, tested, production-ready features.",
    includes: ["Modular Frontend Development (React, Next.js)", "Robust Backend Engineering (Node.js, Python, Go)", "Third-Party API Integration & Custom APIs", "Optimized Database Architecture (PostgreSQL, MongoDB)", "Continuous Integration & Code Reviews"]
  },
  { 
    step: "04", 
    name: "Test", 
    desc: "Every feature, every edge case, every possible failure point undergoes rigorous automated and manual testing to guarantee functionality, performance under load, military-grade security, and pixel-perfect compatibility across every device and platform.",
    includes: ["Comprehensive Functional Testing", "Load & Stress Performance Testing", "Systematic Bug Tracking & Fixing", "Cross-Browser & Cross-Device Testing", "Formal User Acceptance Testing (UAT)"]
  },
  { 
    step: "05", 
    name: "Launch", 
    desc: "After successful validation by our QA team and your stakeholders, we deploy your solution with a meticulously planned launch strategy. We ensure zero downtime, maximum reliability, and a smooth handover that empowers your team from day one.",
    includes: ["Zero-Downtime Production Deployment", "Performance Tuning & Optimization", "Real-time Health Monitoring Setup", "Comprehensive Technical Documentation", "Team Onboarding & Training Sessions"]
  },
  { 
    step: "06", 
    name: "Support & Scale", 
    desc: "Our partnership doesn't end at launch — it evolves. We provide continuous maintenance, proactive security updates, performance improvements, and scalable feature enhancements to ensure your technology grows as aggressively as your business does.",
    includes: ["Priority Technical Support (SLA-backed)", "New Feature Design & Development", "Proactive Security Patches & Audits", "Ongoing Performance Optimization", "Continuous Innovation & R&D"]
  }
];

export default function Process() {
  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="Our Process" 
        description="A structured, battle-tested six-phase development methodology (Discover, Design, Develop, Test, Launch, Support) ensuring quality, speed, and transparency." 
        keywords="software development process, agile design India, tech strategy, QA testing"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl text-white mb-8 uppercase tracking-tight leading-tight">
            Our Development <br className="hidden md:block" /><span className="text-primary-gold">Process</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
            Every successful digital product begins with a structured, battle-tested process. Our proven six-phase development methodology ensures complete transparency, deep collaboration, and uncompromising quality at every single stage.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary-gold/20 pl-8 md:pl-10 ml-4 md:ml-8">
          {processes.map((proc, index) => (
            <motion.div 
              key={proc.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-20 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] md:-left-[50px] top-1 w-5 h-5 rounded-full bg-primary-gold border-4 border-background group-hover:shadow-[0_0_12px_rgba(200,155,60,0.6)] transition-shadow duration-300"></div>
              
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary-gold/40 font-heading text-6xl md:text-7xl group-hover:text-primary-gold/80 transition-colors duration-500">{proc.step}</span>
                <h2 className="text-3xl md:text-4xl text-white font-heading uppercase tracking-widest group-hover:text-primary-gold transition-colors duration-300">{proc.name}</h2>
              </div>
              
              <div className="bg-card p-6 sm:p-10 border border-border group-hover:border-primary-gold/50 transition-colors duration-500">
                <p className="text-white/80 font-body text-lg leading-relaxed mb-8">{proc.desc}</p>
                <div className="pt-6 border-t border-border">
                  <h4 className="text-primary-gold uppercase tracking-[0.3em] text-xs font-bold mb-5 font-heading">Includes</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {proc.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 font-body text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-gold mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center border border-primary-gold/30 bg-secondary p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 blur-3xl rounded-full bg-primary-gold pointer-events-none"></div>
          <p className="text-white text-xl md:text-2xl font-body max-w-3xl mx-auto leading-relaxed relative z-10">
            "From concept to deployment and beyond, <strong className="text-primary-gold font-bold">SPARK TENSPICK</strong> delivers technology solutions that are built to scale, engineered for performance, and designed to empower businesses in an ever-evolving digital world."
          </p>
          <Link to="/contact" className="relative z-10 inline-block mt-10 px-10 py-5 bg-primary-gold text-background font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(200,155,60,0.4)]">
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
