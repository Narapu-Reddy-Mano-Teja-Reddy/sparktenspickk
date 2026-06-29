import React, { useState } from 'react';
import { HeroParallax } from '../components/ui/hero-parallax';
import VerticalTabs from '../components/ui/vertical-tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Radar, IconContainer } from '../components/ui/radar-effect';
import { HiDocumentText, HiDocumentReport } from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { RiFilePaper2Fill } from "react-icons/ri";
import SEO from '../components/SEO';

/* ── Service card with local image ── */
function ServiceCard({ img, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden border border-white/8 bg-card hover:border-primary-gold/50 transition-all duration-500"
    >
      <Link to="/services" className="block w-full h-full">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-white text-lg uppercase tracking-widest mb-3 group-hover:text-primary-gold transition-colors duration-300">{title}</h3>
          <p className="text-muted text-sm font-body leading-relaxed">{desc}</p>
          <div className="mt-4 flex items-center gap-2 text-primary-gold text-xs uppercase tracking-widest font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn More</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary-gold/0 group-hover:bg-primary-gold/10 transition-colors duration-500 rounded-bl-3xl pointer-events-none" />
      </Link>
    </motion.div>
  );
}

/* ── Marquee ticker ── */
const tickers = ['Enterprise Software', 'AI & Automation', 'Cloud Architecture', 'UI/UX Design', 'Data Analytics', 'Digital Marketing', 'ERP Solutions', 'Web Development', 'Mobile Apps', 'CRM Systems'];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { quote: "SPARK TENSPICK transformed our entire digital infrastructure. Their team delivered excellence that exceeded every expectation.", author: "Ahmed Al-Rashid", role: "CEO, Gulf Ventures", country: "🇰🇼" },
    { quote: "The AI-powered platform they built for us processes over 2M transactions daily with 99.9% uptime. Truly world-class engineering.", author: "Priya Sharma", role: "CTO, FinEdge India", country: "🇮🇳" },
    { quote: "From concept to deployment in 6 weeks — premium quality, zero compromise. They set a new benchmark for technology partners.", author: "Mark Thompson", role: "VP Technology, Global Retail Co.", country: "🇺🇸" },
  ];

  return (
    <div className="w-full relative">
      <SEO 
        title="Home" 
        description="SPARK TENSPICK is a premier global technology firm engineering premium enterprise software, AI-powered automation systems, cloud architecture, and high-end digital experiences." 
        keywords="Spark Tenspick, Tenspick, Kuwait tech firm, India software company, premium enterprise software, AI integration"
      />

      {/* ── Hero Parallax ── */}
      <HeroParallax products={[
        { title: "App Development",    link: "/services", thumbnail: "/images/app-dev.jpg" },
        { title: "ERP Systems",         link: "/services", thumbnail: "/images/erp.jpg" },
        { title: "Digital Marketing",   link: "/services", thumbnail: "/images/digital-marketing.jpg" },
        { title: "Data Analytics",      link: "/services", thumbnail: "/images/data-analytics.jpg" },
        { title: "Automation",          link: "/services", thumbnail: "/images/automation.jpg" },
        { title: "UI/UX Design",        link: "/services", thumbnail: "/images/ui-uix.jpg" },
        { title: "Web Development",     link: "/services", thumbnail: "/images/web-dev.jpg" },
        { title: "App Development",     link: "/services", thumbnail: "/images/app-dev.jpg" },
        { title: "ERP Systems",         link: "/services", thumbnail: "/images/erp.jpg" },
        { title: "Digital Marketing",   link: "/services", thumbnail: "/images/digital-marketing.jpg" },
        { title: "Data Analytics",      link: "/services", thumbnail: "/images/data-analytics.jpg" },
        { title: "Automation",          link: "/services", thumbnail: "/images/automation.jpg" },
        { title: "UI/UX Design",        link: "/services", thumbnail: "/images/ui-uix.jpg" },
        { title: "Web Development",     link: "/services", thumbnail: "/images/web-dev.jpg" },
        { title: "App Development",     link: "/services", thumbnail: "/images/app-dev.jpg" },
      ]} />

      {/* ── Scrolling Ticker ── */}
      <div className="bg-primary-gold/8 border-y border-primary-gold/20 py-4 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...tickers, ...tickers].map((t, i) => (
            <span key={i} className="font-heading text-xs uppercase tracking-[0.25em] text-primary-gold/70 flex items-center gap-4">
              {t} <span className="text-primary-gold/40">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── About / Pioneering Section ── */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-gold/3 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-4"
              >
                <span className="w-8 h-px bg-primary-gold" /> Who We Are
              </motion.span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                PIONEERING THE <span className="text-primary-gold block mt-2">FUTURE OF TECH</span>
              </h2>
              <p className="text-muted text-lg font-body leading-relaxed mb-6">
                SPARK TENSPICK is a premier global technology firm formed through a strategic collaboration between TENSPICK and Spark Groups Kuwait.
              </p>
              <p className="text-muted text-lg font-body leading-relaxed mb-10">
                With a deep focus on luxury digital aesthetics and robust enterprise engineering, we bridge the gap between imagination and execution. Our cross-functional teams specialize in solving complex business challenges with elegant, scalable technology.
              </p>

              {/* Feature bullets */}
              <ul className="space-y-3 mb-10">
                {['ISO-certified engineering standards', 'Operations across 12+ countries', '24/7 dedicated support teams', 'NDA-protected client partnerships'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-muted font-body text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 border border-primary-gold text-primary-gold uppercase tracking-widest text-sm hover:bg-primary-gold hover:text-background transition-all duration-300 font-bold group">
                Discover Our Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-primary-gold/20 relative">
                <img
                  src="/images/web-dev.jpg"
                  alt="Technology Hub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card border border-primary-gold/40 p-6 shadow-[0_0_30px_rgba(200,155,60,0.2)]"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <p className="font-heading text-4xl text-primary-gold mb-1">99.9%</p>
                <p className="text-muted text-xs uppercase tracking-widest font-heading">Uptime Delivered</p>
              </motion.div>
              {/* Top right badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary-gold px-4 py-2"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <span className="font-heading text-background text-xs uppercase tracking-widest font-bold">Since 2020</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Services with Local Images ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="services-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C89B3C" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-4">
              <span className="w-8 h-px bg-primary-gold" /> What We Build <span className="w-8 h-px bg-primary-gold" />
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground uppercase tracking-wider mb-4">Our Services</h2>
            <p className="text-muted text-lg font-body max-w-2xl mx-auto">
              From concept to deployment, we deliver end-to-end technology solutions that drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { img: '/images/app-dev.jpg',        title: 'App Development',   desc: 'Native & cross-platform mobile applications engineered for performance, scale, and stunning UX.' },
              { img: '/images/erp.jpg',             title: 'ERP Solutions',     desc: 'End-to-end enterprise resource planning systems that unify operations across every business unit.' },
              { img: '/images/digital-marketing.jpg', title: 'Digital Marketing', desc: 'Data-driven campaigns, SEO, social media, and performance marketing that converts at scale.' },
              { img: '/images/data-analytics.jpg', title: 'Data Analytics',    desc: 'Business intelligence dashboards and predictive analytics that turn raw data into strategic gold.' },
              { img: '/images/automation.jpg',      title: 'AI Automation',     desc: 'Intelligent process automation powered by machine learning to eliminate inefficiency.' },
              { img: '/images/ui-uix.jpg',          title: 'UI/UX Design',      desc: 'Premium interfaces with meticulous attention to aesthetics, usability, and brand excellence.' },
              { img: '/images/web-dev.jpg',         title: 'Web Development',   desc: 'High-performance web platforms built with modern stacks — fast, secure, and globally accessible.' },
              { img: '/images/app-dev.jpg',         title: 'Cloud Solutions',   desc: 'Scalable cloud architecture on AWS, Azure, and GCP with 99.9% uptime guaranteed.' },
            ].map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-3 px-10 py-4 border border-primary-gold text-primary-gold uppercase tracking-widest text-sm hover:bg-primary-gold hover:text-background transition-all duration-300 font-bold group">
              View All Services
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Numbers Section ── */}
      <section className="py-20 bg-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '50+', label: 'Projects Delivered' },
              { num: '12+', label: 'Countries Served' },
              { num: '99.9%', label: 'Uptime SLA' },
              { num: '100+', label: 'Tech Experts' },
            ].map(({ num, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <motion.p
                  className="font-heading text-5xl md:text-6xl text-primary-gold mb-2"
                  whileInView={{ scale: [0.8, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                >
                  {num}
                </motion.p>
                <p className="text-muted text-xs uppercase tracking-[0.2em] font-heading">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Radar Section ── */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-4">
              <span className="w-8 h-px bg-primary-gold" /> Technology Ecosystem <span className="w-8 h-px bg-primary-gold" />
            </span>
            <h2 className="font-heading text-4xl text-foreground mb-6 uppercase tracking-wider">Our Ecosystem</h2>
            <p className="text-muted text-lg leading-relaxed">
              We deploy an interconnected ecosystem of intelligent tools, secure servers, and automated pipelines. From initial design to global deployment, every layer is optimized for peak performance and scale.
            </p>
          </div>
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center space-y-4">
            <div className="mx-auto w-full max-w-4xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer text="Enterprise Software" delay={0.2} icon={<HiDocumentText className="h-8 w-8 text-primary-gold" />} />
                <IconContainer delay={0.4} text="Cloud Architecture" icon={<AiFillDollarCircle className="h-8 w-8 text-primary-gold" />} />
                <IconContainer text="UI/UX Engineering" delay={0.3} icon={<BsClipboardDataFill className="h-8 w-8 text-primary-gold" />} />
              </div>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer text="Data Analytics" delay={0.5} icon={<BiSolidReport className="h-8 w-8 text-primary-gold" />} />
                <IconContainer text="Server Management" delay={0.8} icon={<HiMiniDocumentArrowUp className="h-8 w-8 text-primary-gold" />} />
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer delay={0.6} text="Process Automation" icon={<HiDocumentReport className="h-8 w-8 text-primary-gold" />} />
                <IconContainer delay={0.7} text="AI Integration" icon={<RiFilePaper2Fill className="h-8 w-8 text-primary-gold" />} />
              </div>
            </div>
            <Radar className="absolute -bottom-12" />
          </div>
        </div>
      </section>

      {/* ── Services via Vertical Tabs ── */}
      <VerticalTabs />



      {/* ── CTA Section ── */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <defs>
              <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C89B3C" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-6">
              <span className="w-8 h-px bg-primary-gold" /> Ready to Transform? <span className="w-8 h-px bg-primary-gold" />
            </span>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-8 leading-tight">
              Let's Build Something <span className="text-primary-gold">Extraordinary</span>
            </h2>
            <p className="text-muted text-lg font-body mb-10 max-w-2xl mx-auto">
              Book a free 30-minute strategy consultation with our senior architects. No obligation — just expert guidance tailored to your goals.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="px-10 py-5 bg-primary-gold text-background font-bold tracking-widest uppercase hover:bg-secondary-gold transition-colors duration-300 shadow-[0_0_40px_rgba(200,155,60,0.4)] text-sm">
                Start Your Project
              </Link>
              <Link to="/services" className="px-10 py-5 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-primary-gold hover:text-primary-gold transition-colors duration-300 bg-transparent text-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
