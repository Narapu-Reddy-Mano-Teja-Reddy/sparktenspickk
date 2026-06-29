"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text?: string;
  textColor?: string;
  overlayColor?: string;
  fontSize?: string;
  letterDelay?: number;
}

export function RevealText({
  text = "STUNNING",
  textColor = "text-white",
  overlayColor = "text-primary-gold",
  fontSize = "text-[150px] md:text-[250px]",
  letterDelay = 0.08,
}: RevealTextProps) {
  return (
    <div className="flex items-center justify-center relative">
      <div className="flex flex-wrap justify-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className={`${fontSize} font-black tracking-tight relative font-heading ${textColor} hover:${overlayColor} transition-colors duration-300`}
            initial={{ 
              y: 60,
              opacity: 0,
            }}
            whileInView={{ 
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * letterDelay,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
