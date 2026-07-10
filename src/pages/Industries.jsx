import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const industries = [
  { 
    title: "Education", 
    desc: "Transforming the learning experience through robust digital platforms.",
    items: ["School Management Systems", "Interactive Learning Platforms", "Student & Parent Portals", "Secure Online Examination Systems", "Virtual Classroom Integration"] 
  },
  { 
    title: "Healthcare", 
    desc: "Digitalizing patient care while ensuring strict HIPAA and data compliance.",
    items: ["Hospital Management Systems (HMS)", "Telemedicine Appointment Platforms", "Patient & Doctor Portals", "EHR/EMR Software Solutions", "AI Diagnostic Tools"] 
  },
  { 
    title: "Retail & E-Commerce", 
    desc: "Driving high-volume sales through lightning-fast, secure online storefronts.",
    items: ["Headless E-Commerce Stores", "Omnichannel POS Systems", "Automated Inventory Management", "Customer Loyalty & Reward Solutions", "Dynamic Pricing Algorithms"] 
  },
  { 
    title: "Restaurants & Hospitality", 
    desc: "Elevating the guest experience from reservation to check-out.",
    items: ["Restaurant POS & Kitchen Displays", "Seamless Online Ordering", "QR Menu & Payment Systems", "Comprehensive Hotel Management", "Real-time Reservation Platforms"] 
  },
  { 
    title: "Real Estate & Construction", 
    desc: "Modernizing property management and large-scale project execution.",
    items: ["Immersive Property Portals", "Agent & Broker CRM Systems", "Construction Project Management", "Contractor ERP Solutions", "Virtual 3D Property Tours"] 
  },
  { 
    title: "Manufacturing", 
    desc: "Streamlining production pipelines and supply chain logistics.",
    items: ["Production Management & Analytics", "Supply Chain Optimization Solutions", "Inventory Automation & Tracking", "Industrial IoT Software", "Quality Control Dashboards"] 
  },
  { 
    title: "Finance & Banking", 
    desc: "Securing millions of transactions with ultra-low latency architecture.",
    items: ["Real-time Financial Dashboards", "Highly Secure Banking Applications", "Digital Payment Gateway Integrations", "Algorithmic Reporting Systems", "Blockchain Security Audits"] 
  },
  { 
    title: "Agriculture", 
    desc: "Bringing precision technology to modern farming and distribution.",
    items: ["IoT Farm Management Platforms", "Smart Agriculture Data Solutions", "B2B Agritech Marketplace Applications", "Supply Chain & Harvest Tracking", "Predictive Weather Models"] 
  },
  { 
    title: "Logistics & Transportation", 
    desc: "Optimizing global routing and real-time fleet management.",
    items: ["GPS Fleet Management & Routing", "Real-time Delivery Tracking", "Automated Warehouse Systems", "Global Logistics Automation", "Freight Forwarding ERPs"] 
  },
  { 
    title: "Government & Public Sector", 
    desc: "Digitizing public services with uncompromised security and accessibility.",
    items: ["Digital Citizen Services Portals", "Civic Workflow Automation", "Administrative Tax Software", "Public Information & Alert Systems", "Secure Identity Verification"] 
  },
  { 
    title: "Startups & SMEs", 
    desc: "Accelerating go-to-market strategies with lean, scalable engineering.",
    items: ["Rapid MVP Development", "Scalable SaaS Platforms", "Disruptive Product Engineering", "Cost-effective Business Automation", "Investor Pitch Prototypes"] 
  },
  { 
    title: "Corporate Enterprises", 
    desc: "Future-proofing legacy corporations against digital disruption.",
    items: ["Custom Enterprise Software", "Total Digital Transformation", "Zero-downtime Cloud Migration", "Generative AI Integration", "Advanced Business Intelligence"] 
  },
];

export default function Industries() {
  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="Industries We Empower" 
        description="Bespoke enterprise engineering solutions tailored for Education, Healthcare, Retail, Real Estate, Finance, Logistics, and Corporate Enterprises." 
        keywords="industries served, EdTech solutions, FinTech engineering, HealthTech software, agritech apps, corporate transformation"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white mb-6 uppercase tracking-tight leading-tight">
            Industries We <span className="text-primary-gold">Empower</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-body max-w-5xl mx-auto leading-relaxed">
            Technology is not a one-size-fits-all solution. We collaborate with global leaders across diverse, highly regulated industries, delivering bespoke digital solutions that crush operational bottlenecks, ensure strict compliance, and unlock unprecedented avenues for innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-card p-6 sm:p-10 border border-border group hover:border-primary-gold transition-colors duration-500 flex flex-col justify-start relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <h3 className="font-heading text-2xl text-primary-gold mb-4 uppercase tracking-widest relative z-10">{ind.title}</h3>
              <p className="text-white font-body text-lg mb-6 leading-relaxed relative z-10">{ind.desc}</p>
              
              <ul className="space-y-3 relative z-10 border-t border-border pt-6 mt-auto">
                {ind.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-body text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
