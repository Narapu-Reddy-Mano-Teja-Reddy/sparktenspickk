import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../components/ui/reveal-text';
import SEO from '../components/SEO';

/* ── Animated counter ── */
function AnimatedCounter({ value, suffix = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value}{suffix}
    </motion.span>
  );
}


export default function About() {
  return (
    <div className="w-full relative bg-background pt-32 pb-24 min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn more about SPARK TENSPICK, a premier global technology firm delivering premium enterprise software, AI automation, and high-end digital experiences." 
        keywords="About Spark Tenspick, tech legacy, software engineering leaders, software development India"
      />

      {/* ── Ambient background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-gold/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary-gold/3 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-6"
          >
            <span className="w-8 h-px bg-primary-gold" /> Our Story <span className="w-8 h-px bg-primary-gold" />
          </motion.span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-8 uppercase tracking-tight">
            About <span className="text-shimmer">Us</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-body max-w-5xl mx-auto leading-relaxed">
            <span className="text-primary-gold font-bold">SPARK TENSPICK</span> is a global technology powerhouse delivering innovative digital solutions.
            We engineer tomorrow's digital world today, bridging the gap between raw ambition and technological execution.
            Our focus is singular: engineering premium, scalable, and secure technology that propels global enterprises to market dominance.
          </p>
        </motion.div>

        {/* ── Stats Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/8 mb-32"
        >
          {[
            { num: '50', suffix: '+', label: 'Projects Delivered' },
            { num: '12', suffix: '+', label: 'Countries Served' },
            { num: '100', suffix: '+', label: 'Global Experts' },
            { num: '99.9', suffix: '%', label: 'Uptime SLA' },
          ].map(({ num, suffix, label }, i) => (
            <div key={label} className="bg-secondary p-6 sm:p-10 text-center group hover:bg-card transition-colors duration-300">
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="font-heading text-4xl md:text-5xl text-primary-gold mb-2"
              >
                <AnimatedCounter value={num} suffix={suffix} />
              </motion.p>
              <p className="text-muted text-xs uppercase tracking-widest font-heading">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── The Legacy ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-4">
              <span className="w-8 h-px bg-primary-gold" /> Our Heritage
            </span>
            <h2 className="font-heading text-4xl mb-6 uppercase tracking-widest border-b border-primary-gold/30 pb-4 inline-block text-shimmer">The Legacy</h2>
            <p className="text-white/70 font-body leading-relaxed text-lg mb-6">
              When deep experience and modern agility align, innovation is inevitable. SPARK TENSPICK represents the ultimate synergy of robust enterprise infrastructure and relentless software engineering talent.
              We inject aggressive innovation, elite engineering, and bleeding-edge digital strategy to solve high-stakes challenges.
            </p>
            <p className="text-white/70 font-body leading-relaxed text-lg">
              Together, we don't just participate in the digital economy; we define it. We build systems that process millions of transactions, interfaces that captivate millions of users, and architectures that stand resilient against any threat.
            </p>
          </div>
          <div className="relative aspect-square border border-primary-gold/30 p-4">
            <div className="w-full h-full bg-secondary overflow-hidden relative">
              <img src="/images/web-dev.jpg" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Corporate" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
            </div>
            <motion.div
              className="absolute -bottom-6 left-2 sm:-left-6 bg-background border border-primary-gold p-4 sm:p-6 shadow-[0_0_30px_rgba(200,155,60,0.2)]"
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <p className="font-heading text-primary-gold text-4xl mb-1">100+</p>
              <p className="text-white text-xs uppercase tracking-widest">Global Experts</p>
            </motion.div>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary-gold -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary-gold translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary-gold -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary-gold translate-x-1 translate-y-1" />
          </div>
        </motion.div>

        {/* ── Vision & Mission ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {[
            {
              title: 'Our Mission',
              text: 'To empower businesses globally by delivering cutting-edge, scalable, and premium digital solutions that drive exponential growth, operational efficiency, and unyielding technological superiority in a hyper-competitive landscape. We transform complex logic into intuitive, luxurious digital experiences.',
              dir: -1,
            },
            {
              title: 'Our Vision',
              text: 'To be the world\'s most trusted and relentlessly innovative technology partner, setting new, unbreakable standards in enterprise software, artificial intelligence, cloud architecture, and total digital transformation. We envision a future where our technology is the silent, flawless engine behind every major industry.',
              dir: 1,
            },
          ].map(({ title, text, dir }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: dir * 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 md:p-12 border border-primary-gold/20 group hover:border-primary-gold transition-colors duration-500 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
              {/* Number watermark */}
              <span className="absolute bottom-4 right-6 font-heading text-8xl text-primary-gold/5 select-none">0{i + 1}</span>
              <h2 className="font-heading text-3xl text-primary-gold mb-6 uppercase tracking-widest relative z-10">{title}</h2>
              <p className="text-white/80 font-body leading-relaxed text-lg relative z-10">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Core Values ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary-gold text-xs uppercase tracking-[0.3em] font-heading mb-4">
              <span className="w-8 h-px bg-primary-gold" /> Foundation <span className="w-8 h-px bg-primary-gold" />
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-wider mb-6">Core Values</h2>
            <p className="text-white/60 font-body max-w-2xl mx-auto text-lg">The foundational principles that govern every line of code we write and every partnership we forge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Innovation', desc: 'Pushing boundaries to invent what\'s next, not just what\'s now. We refuse to accept the status quo in technology.' },
              { title: 'Excellence', desc: 'Demanding the absolute highest standard in our engineering, our design, and our communication. Good is the enemy of great.' },
              { title: 'Integrity', desc: 'Unwavering transparency and ethics in our partnerships. We build trust by delivering on our promises, every single time.' },
              { title: 'Collaboration', desc: 'Fusing brilliant minds. The synergy of modern strategic consulting and elite software engineering excellence.' },
              { title: 'Agility', desc: 'Adapting to shifting markets with speed, precision, and grace. We architect software that pivots as fast as your business does.' },
              { title: 'Client Success', desc: 'Your victory is our singular, ultimate metric of achievement. We measure our success entirely by the growth of our partners.' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-secondary p-6 sm:p-10 border border-border hover:border-primary-gold transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient corner */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-primary-gold/20 font-heading text-5xl mb-4 block group-hover:text-primary-gold/40 transition-colors duration-300 relative z-10">0{idx + 1}</span>
                <h3 className="font-heading text-xl text-white uppercase tracking-widest mb-3 group-hover:text-primary-gold transition-colors duration-300 relative z-10">{value.title}</h3>
                <p className="text-white/60 font-body leading-relaxed text-sm relative z-10">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* ── Big Reveal Text ── */}
        <div className="text-center overflow-hidden pb-10 flex flex-col items-center justify-center">
          <div className="whitespace-nowrap">
            <RevealText
              text="INNOVATE"
              fontSize="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[150px]"
              textColor="text-secondary"
              overlayColor="text-white"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-primary-gold tracking-[0.5em] uppercase font-heading text-sm md:text-xl mt-4"
          >
            With Spark Tenspick
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 w-32 h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
