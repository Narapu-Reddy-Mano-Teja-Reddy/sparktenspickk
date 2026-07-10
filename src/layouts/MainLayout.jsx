import React, { useEffect, useState, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Vapourise Particle Text ── */
function VapouriseText({ text }) {
  const letters = text.split('');
  return (
    <div className="vapourise-container" aria-label={text}>
      {letters.map((char, i) => (
        <span
          key={i}
          className="vapourise-letter"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <span
          key={`p-${i}`}
          className="vapour-particle"
          style={{
            left: `${(i / 12) * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Glassmorphism Social Icon ── */
function GlassIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-social-icon group"
    >
      <span className="glass-social-inner">{children}</span>
    </a>
  );
}

/* ── SVG Icons ── */
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452H16.89v-5.569c0-1.327-.024-3.037-1.852-3.037-1.854 0-2.137 1.448-2.137 2.942v5.664H9.344V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.981 1.981 0 1 1 0-3.963 1.981 1.981 0 0 1 0 3.963zm1.706 13.019H3.63V9h3.413v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industries', path: '/industries' },
  { name: 'Process', path: '/process' },
  { name: 'Contact', path: '/contact' },
];

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    
    const resetScroll = () => {
      const html = document.documentElement;
      const originalScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      html.style.scrollBehavior = originalScrollBehavior;
    };

    resetScroll();
    
    // Also reset after exit transition (250ms) to ensure it overrides any layout/height changes
    const timer = setTimeout(resetScroll, 280);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground selection:bg-primary-gold selection:text-background">

      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_4px_30px_rgba(200,155,60,0.08)]'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 sm:gap-4 flex-nowrap group">
            <motion.img
              src="/logo.png"
              alt="SPARK TENSPICK Logo"
              className="h-14 sm:h-18 md:h-22 w-auto flex-shrink-0 object-contain drop-shadow-[0_0_12px_rgba(200,155,60,0.5)]"
              whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 20px rgba(200,155,60,0.8))' }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col leading-none flex-shrink-0">
              <span className="font-heading text-white text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase">Spark</span>
              <span className="font-heading text-primary-gold text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase">Tenspick</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isServices = link.name === 'Services';
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={
                    isServices
                      ? `relative text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 px-3.5 py-1.5 rounded-full border border-primary-gold/30 bg-primary-gold/5 shadow-[0_0_12px_rgba(200,155,60,0.15)] hover:bg-primary-gold/10 hover:shadow-[0_0_20px_rgba(200,155,60,0.35)] ${
                          location.pathname === link.path ? 'text-primary-gold border-primary-gold/60' : 'text-primary-gold hover:text-secondary-gold'
                        }`
                      : `relative text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 group ${
                          location.pathname === link.path ? 'text-primary-gold' : 'text-muted hover:text-primary-gold'
                        }`
                  }
                >
                  {link.name}
                  {!isServices && (
                    <span className={`absolute -bottom-1 left-0 h-px bg-primary-gold transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-block relative px-6 py-2 border border-primary-gold text-primary-gold uppercase tracking-widest text-xs xl:text-sm overflow-hidden group transition-all duration-300 hover:text-background"
            >
              <span className="absolute inset-0 bg-primary-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative">Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={mobileMenuOpen ? 'open' : 'closed'}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col px-4 py-6 space-y-4">
                {navLinks.map((link, i) => {
                  const isServices = link.name === 'Services';
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={
                          isServices
                            ? `block text-sm tracking-widest uppercase py-2 px-3 border-l-2 border-primary-gold bg-primary-gold/5 text-primary-gold transition-colors font-bold shadow-[inset_0_0_8px_rgba(200,155,60,0.1)]`
                            : `block text-sm tracking-widest uppercase py-1 ${
                                location.pathname === link.path ? 'text-primary-gold' : 'text-muted hover:text-primary-gold'
                              } transition-colors`
                        }
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <Link
                    to="/contact"
                    className="inline-block mt-4 text-center w-full px-6 py-3 bg-primary-gold text-background uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer ── */}
      <footer className="relative bg-secondary border-t border-white/10 pt-16 overflow-hidden">

        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-gold/3 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div>
              <Link to="/" className="mb-6 flex items-center gap-3 sm:gap-4 flex-nowrap group">
                <img
                  src="/logo.png"
                  alt="SPARK TENSPICK Logo"
                  className="h-14 sm:h-16 md:h-18 w-auto flex-shrink-0 object-contain drop-shadow-[0_0_10px_rgba(200,155,60,0.4)]"
                />
                <div className="flex flex-col leading-none flex-shrink-0">
                  <span className="font-heading text-white text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase">Spark</span>
                  <span className="font-heading text-primary-gold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase">Tenspick</span>
                </div>
              </Link>
              <p className="text-muted font-body mb-6 text-sm leading-relaxed">
                Empowering global businesses with world-class technology, enterprise software, AI, and digital innovation.
              </p>

              {/* Glass Social Icons */}
              <ul className="flex space-x-3">
                <li>
                  <GlassIcon href="#" label="LinkedIn">
                    <IconLinkedIn />
                  </GlassIcon>
                </li>
                <li>
                  <GlassIcon href="#" label="Instagram">
                    <IconInstagram />
                  </GlassIcon>
                </li>
                <li>
                  <GlassIcon href="#" label="Facebook">
                    <IconFacebook />
                  </GlassIcon>
                </li>
                <li>
                  <GlassIcon href="#" label="YouTube">
                    <IconYouTube />
                  </GlassIcon>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-white tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-primary-gold" />Quick Links
              </h3>
              <ul className="space-y-3 text-muted font-body text-sm">
                {[
                  ['About Us', '/about'],
                  ['Our Services', '/services'],
                  ['Enterprise Solutions', '/solutions'],
                  ['Our Process', '/process'],
                  ['Contact Us', '/contact'],
                ].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} className="hover:text-primary-gold transition-colors group flex items-center gap-2">
                      <span className="w-0 group-hover:w-3 h-px bg-primary-gold transition-all duration-300" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading text-white tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-primary-gold" />Legal
              </h3>
              <ul className="space-y-3 text-muted font-body text-sm">
                {[['Privacy Policy', '#privacy'], ['Terms of Service', '#terms'], ['Cookie Policy', '#cookie']].map(([label, hash]) => (
                  <li key={label}>
                    <a href={hash} className="hover:text-primary-gold transition-colors group flex items-center gap-2">
                      <span className="w-0 group-hover:w-3 h-px bg-primary-gold transition-all duration-300" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-white tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-primary-gold" />Contact
              </h3>
              <div className="space-y-5 text-muted font-body text-sm">
                <div>
                  <h4 className="text-primary-gold text-xs uppercase tracking-widest font-heading mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold" /> India HQ
                  </h4>
                  <p className="text-xs mb-1">Bazar Street, Pullampeta, India</p>
                  <p className="text-xs">
                    <a href="tel:+917330863893" className="hover:text-primary-gold transition-colors">+91 73308 63893</a>
                  </p>
                </div>
                <div>
                  <h4 className="text-primary-gold text-xs uppercase tracking-widest font-heading mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold" /> Kuwait Office
                  </h4>
                  <p className="text-xs mb-1">Block 10, Salmiya, Kuwait</p>
                  <p className="text-xs">
                    <a href="tel:+96555139630" className="hover:text-primary-gold transition-colors">+965 55139630</a>
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <a href="mailto:sparktenspick@gmail.com" className="hover:text-primary-gold transition-colors text-xs break-all">
                    sparktenspick@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-muted font-body text-xs">Copyright &copy; 2026 SPARK TENSPICK. All Rights Reserved.</p>
            <p className="text-muted/40 font-body text-xs">Crafted with precision &amp; purpose.</p>
          </div>
        </div>

        {/* ── Vapourise Footer Brand Text ── */}
        <div className="w-full overflow-hidden pt-4 pb-8 pointer-events-none select-none">
          <VapouriseText text="SPARK TENSPICK" />
        </div>
      </footer>
    </div>
  );
}
