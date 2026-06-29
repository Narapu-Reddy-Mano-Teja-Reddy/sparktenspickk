import React from 'react';
import { motion } from 'framer-motion';
import VerticalTabs from '../components/ui/vertical-tabs';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const serviceDetails = [
  {
    title: "Web Application Development",
    desc: "From progressive web apps to large-scale enterprise portals, we build blazing-fast, SEO-optimized, and visually stunning web applications using React, Next.js, Vue, and Angular. Every pixel is purposeful.",
    features: ["Single Page Applications (SPA)", "Progressive Web Apps (PWA)", "Headless CMS Integrations", "Real-time Dashboards", "Admin Panels & ERPs"]
  },
  {
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile applications for iOS and Android, engineered for performance, offline capability, and seamless user experiences that keep customers coming back.",
    features: ["React Native & Flutter", "Native iOS (Swift) & Android (Kotlin)", "Offline-first Architecture", "Push Notifications & Analytics", "App Store Optimization"]
  },
  {
    title: "E-Commerce Solutions",
    desc: "End-to-end online commerce platforms that convert visitors to paying customers. We build secure, high-availability storefronts that process payments globally and scale during peak traffic.",
    features: ["Custom Storefront Development", "Payment Gateway Integration", "Inventory & Order Management", "Multi-currency & Multi-language", "Subscription & Recurring Billing"]
  },
  {
    title: "Enterprise Software & ERP",
    desc: "Custom enterprise resource planning systems that unify your business processes — from finance and HR to supply chain and manufacturing — into a single, powerful command center.",
    features: ["Custom ERP Development", "CRM & Sales Automation", "HRMS & Payroll Systems", "Asset & Inventory Tracking", "Business Intelligence & Reporting"]
  },
  {
    title: "Cloud & DevOps",
    desc: "We architect, migrate, and manage cloud-native infrastructure on AWS, Azure, and GCP. Our DevOps pipelines guarantee zero-downtime deployments and infinite horizontal scalability.",
    features: ["Cloud Architecture Design", "CI/CD Pipeline Automation", "Kubernetes & Docker Orchestration", "Infrastructure as Code (Terraform)", "24/7 Monitoring & Incident Response"]
  },
  {
    title: "AI, ML & Data Science",
    desc: "Unlock the hidden potential in your data. We build intelligent systems — from chatbots and recommendation engines to predictive models — that make your business smarter every day.",
    features: ["Custom LLM & Chatbot Development", "Predictive Analytics Models", "Computer Vision Solutions", "Natural Language Processing", "Data Pipeline & ETL Automation"]
  }
];

export default function Services() {
  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="Our Services" 
        description="Explore custom software development, mobile apps, headless e-commerce, ERP system integration, cloud automation, and high-end design services." 
        keywords="software development services, mobile app development Swift, headless ecommerce, custom CRM development"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl text-white mb-8 uppercase tracking-tight leading-tight">
            Our <span className="text-primary-gold">Services</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-body max-w-4xl mx-auto leading-relaxed">
            We deliver end-to-end digital services that span the full product lifecycle — from strategic planning and premium design to agile development, cloud deployment, and continuous optimization. Every service is powered by elite engineering talent and an obsession with perfection.
          </p>
        </motion.div>
        
        {/* Interactive Services Showcase */}
        <VerticalTabs />

        {/* Detailed Service Breakdown */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-6">Full Service <span className="text-primary-gold">Breakdown</span></h2>
            <p className="text-white/60 font-body text-lg max-w-3xl mx-auto">A deeper look at what we deliver for each core discipline.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
                className="bg-card p-6 sm:p-10 border border-border hover:border-primary-gold transition-colors duration-500 group"
              >
                <span className="text-primary-gold/30 font-heading text-5xl block mb-4 group-hover:text-primary-gold/60 transition-colors">0{index + 1}</span>
                <h3 className="font-heading text-2xl text-white uppercase tracking-widest mb-4 group-hover:text-primary-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-white/70 font-body text-lg leading-relaxed mb-8">{service.desc}</p>
                
                <div className="border-t border-border pt-6">
                  <h4 className="text-primary-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 font-heading">Includes</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/60 font-body text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-gold flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center border border-primary-gold/30 bg-secondary p-8 sm:p-12 md:p-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white uppercase mb-6">Need a Custom Service?</h2>
          <p className="text-white/70 font-body text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Our services are flexible and modular. If you have a challenge that doesn't fit neatly into a category, our engineering consultants will craft a bespoke solution tailored exclusively to your needs.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-primary-gold text-background font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(200,155,60,0.4)]">
            Contact Our Team
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
