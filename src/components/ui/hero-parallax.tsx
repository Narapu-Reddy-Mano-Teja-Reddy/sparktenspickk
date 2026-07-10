"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import Galaxy from "./Galaxy";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translateRange = isMobile ? 120 : 1000;
  const translateX = useTransform(scrollYProgress, [0, 1], [0, translateRange]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -translateRange]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0.75 : 0.2, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-700, 500]);
  
  return (
    <div
      ref={ref}
      className="h-[140vh] md:h-[250vh] pt-12 pb-20 md:pt-16 md:pb-40 overflow-hidden antialiased relative flex flex-col self-auto bg-background"
    >
      <div className="absolute top-0 left-0 right-0 h-[100vh] w-full pointer-events-none z-0 opacity-70">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.6}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.5}
          rotationSpeed={0.2}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <Header />
      <motion.div
        style={{
          opacity,
        }}
        className="mt-4 md:mt-8"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 md:space-x-20 mb-8 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-6 md:space-x-20 mb-8 md:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-16 pb-6 md:pt-20 md:pb-8 px-4 w-full left-0 top-0">
      {/* Decorative background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Radial gold glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary-gold/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary-gold/4 rounded-full blur-[80px]" />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#C89B3C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="#C89B3C" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-lines)" />
        </svg>
        {/* Horizontal scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent"
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-primary-gold/60"
          style={{ top: '30%', left: '15%' }}
          animate={{ y: [-10, 10, -10], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-1 h-1 rounded-full bg-primary-gold/80"
          style={{ top: '60%', left: '75%' }}
          animate={{ y: [8, -8, 8], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-primary-gold/30"
          style={{ top: '20%', right: '10%' }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10"
      >
        {/* Animated SPARK TENSPICK Title */}
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <motion.div 
            className="flex space-x-1"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {"SPARK TENSPICK".split("").map((char, index) => (
              <motion.span
                key={index}
                className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-shimmer"
                variants={{
                  hidden: { opacity: 0, y: 15, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 120 }
                  }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary-gold/30 bg-primary-gold/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-gold animate-pulse" />
          <span className="text-primary-gold text-xs uppercase tracking-[0.3em] font-heading">Global Technology Leader</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-heading text-foreground mb-4 leading-tight relative">
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-primary-gold/10 via-primary-gold/5 to-transparent blur-xl rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="relative z-10">Engineering Tomorrow's</span> <br />
          <span className="text-primary-gold relative z-10">
            Digital World
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </span>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-muted font-body leading-relaxed">
          We create enterprise software, AI-powered applications, automation systems, cloud solutions, and premium digital experiences that help businesses grow faster.
        </p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-6 md:gap-8 mt-10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[['50+', 'Projects Delivered'], ['99.9%', 'Uptime Guaranteed'], ['12+', 'Countries Served']].map(([num, label]) => (
            <div key={label} className="flex flex-col">
              <span className="font-heading text-primary-gold text-2xl md:text-3xl font-bold">{num}</span>
              <span className="text-muted text-xs uppercase tracking-widest font-heading">{label}</span>
            </div>
          ))}
        </motion.div>

        <div className="flex gap-4 flex-wrap">
          <Link to="/services" className="px-8 py-4 bg-primary-gold text-background font-bold tracking-widest uppercase hover:bg-secondary-gold transition-colors duration-300 shadow-[0_0_24px_rgba(200,155,60,0.35)]">
            Explore Services
          </Link>
          <Link to="/contact" className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-primary-gold hover:text-primary-gold transition-colors duration-300 bg-transparent">
            Book Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  );
};


export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        willChange: "transform",
      }}
      key={product.title}
      className="group/product h-60 w-[18rem] md:h-96 md:w-[30rem] relative flex-shrink-0 border border-border overflow-hidden"
    >
      <Link
        to={product.link}
        className="block"
      >
        <img
          src={product.thumbnail}
          loading="lazy"
          decoding="async"
          className="object-cover object-left-top absolute h-full w-full inset-0 opacity-70 group-hover/product:opacity-100 transition-opacity duration-500"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-500"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-primary-gold font-heading transition-opacity duration-500">
        {product.title}
      </h2>
    </motion.div>
  );
};
