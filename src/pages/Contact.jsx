import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', country: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', company: '', email: '', phone: '', country: '', service: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with SPARK TENSPICK for enterprise software development, AI solutions, or custom digital consultations. Let's build something extraordinary together." 
        keywords="contact Spark Tenspick, hire developers, AI consultation, enterprise software inquiry"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white mb-8 uppercase tracking-tight leading-tight">
            Let's <span className="text-primary-gold">Collaborate</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-body max-w-4xl mx-auto leading-relaxed">
            Whether you are looking to completely overhaul your enterprise infrastructure, launch a disruptive new product, or modernize legacy systems, our dedicated team of engineers, designers, and strategists is ready to build the future with you. Reach out today and let's engineer something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Office Cards & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* India Card */}
            <div className="bg-card p-5 sm:p-10 border border-border group hover:border-primary-gold transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              <h2 className="text-2xl sm:text-3xl text-white font-heading uppercase mb-8 flex items-center gap-4 relative z-10">
                <span className="w-10 h-px bg-primary-gold block"></span> India HQ
              </h2>
              <div className="space-y-5 text-white/70 font-body relative z-10">
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">Phone</span> 
                  <a href="tel:+917330863893" className="hover:text-primary-gold transition-colors">+91 73308 63893</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">WhatsApp</span> 
                  <a href="https://wa.me/917330863893" target="_blank" rel="noopener noreferrer" className="hover:text-primary-gold transition-colors">+91 73308 63893</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">Email</span> 
                  <span className="flex flex-col">
                    <a href="mailto:info@sparktenspick.com" className="hover:text-primary-gold transition-colors break-all">info@sparktenspick.com</a>
                    <a href="mailto:contact@sparktenspick.com" className="hover:text-primary-gold transition-colors break-all">contact@sparktenspick.com</a>
                  </span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">Address</span> 
                  <span>Bazar Street, Pullampeta, India</span>
                </p>
              </div>
            </div>

            {/* Kuwait Card */}
            <div className="bg-card p-5 sm:p-10 border border-border group hover:border-primary-gold transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              <h2 className="text-2xl sm:text-3xl text-white font-heading uppercase mb-8 flex items-center gap-4 relative z-10">
                <span className="w-10 h-px bg-primary-gold block"></span> Kuwait Office
              </h2>
              <div className="space-y-5 text-white/70 font-body relative z-10">
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">Phone</span> 
                  <a href="tel:+96555139630" className="hover:text-primary-gold transition-colors">+965 55139630</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">WhatsApp</span> 
                  <a href="https://wa.me/96555139630" target="_blank" rel="noopener noreferrer" className="hover:text-primary-gold transition-colors">+965 55139630</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">Email</span> 
                  <span className="flex flex-col">
                    <a href="mailto:info@sparktenspick.com" className="hover:text-primary-gold transition-colors break-all">info@sparktenspick.com</a>
                    <a href="mailto:contact@sparktenspick.com" className="hover:text-primary-gold transition-colors break-all">contact@sparktenspick.com</a>
                  </span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-primary-gold uppercase tracking-widest text-xs font-bold font-heading sm:mt-1 w-28 sm:w-32 flex-shrink-0">Address</span> 
                  <span>Block 10, Salmiya, Kuwait</span>
                </p>
              </div>
            </div>

            {/* Why Choose Us Mini-Section */}
            <div className="bg-secondary p-6 sm:p-10 border border-primary-gold/20">
              <h3 className="font-heading text-2xl text-primary-gold uppercase tracking-widest mb-6">Why Contact Us?</h3>
              <ul className="space-y-4">
                {[
                  "Free 30-Minute Strategy Consultation",
                  "NDA-Protected Confidential Discussions",
                  "Response Within 4 Business Hours",
                  "Access to Senior Technical Architects",
                  "No Obligation — Just Expert Guidance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-body">
                    <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-5 sm:p-10 border border-border space-y-6">
              <h3 className="font-heading text-2xl text-white uppercase tracking-widest mb-4">Send Us a Message</h3>
              <p className="text-white/60 font-body text-sm mb-6 border-b border-border pb-6">Fill out the form below and our team will get back to you within 4 business hours.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-background border border-border p-4 text-white focus:border-primary-gold outline-none transition-colors font-body" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Company</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-background border border-border p-4 text-white focus:border-primary-gold outline-none transition-colors font-body" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Work Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-border p-4 text-white focus:border-primary-gold outline-none transition-colors font-body" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-background border border-border p-4 text-white focus:border-primary-gold outline-none transition-colors font-body" placeholder="+1 234 567 890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Country</label>
                  <input name="country" value={formData.country} onChange={handleChange} className="w-full bg-background border border-border p-4 text-white focus:border-primary-gold outline-none transition-colors font-body" placeholder="United States" />
                </div>
                <div>
                  <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-background border border-border p-4 text-white/60 focus:border-primary-gold outline-none transition-colors appearance-none font-body">
                    <option value="">Select a service</option>
                    <option value="software">Enterprise Software</option>
                    <option value="ai">AI & Automation</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="design">UI/UX Design</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="consulting">Technology Consulting</option>
                  </select>
                </div>
              </div>



              <div>
                <label className="block text-primary-gold text-xs tracking-widest uppercase mb-2 font-heading">Project Details *</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-background border border-border p-4 text-white focus:border-primary-gold outline-none transition-colors resize-none font-body" placeholder="Tell us about your project goals, timeline, and any specific requirements..."></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-5 bg-primary-gold text-background font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(200,155,60,0.3)] hover:shadow-[0_0_30px_rgba(200,155,60,0.5)] text-sm">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>

        {/* Success Popup */}
        <AnimatePresence>
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-10 right-10 bg-primary-gold text-background px-8 py-6 shadow-2xl z-50 flex items-center gap-4 border border-secondary-gold"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <div>
                <h4 className="font-heading uppercase text-sm font-bold">Inquiry Submitted Successfully</h4>
                <p className="font-body text-sm mt-1">Our executive team will contact you within 4 hours.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
