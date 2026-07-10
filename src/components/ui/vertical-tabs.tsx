"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SERVICES = [
  {
    id: "01",
    title: "Custom Development & Software Engineering",
    description: "Build robust, scalable enterprise software, highly available SaaS platforms, and sophisticated web/mobile applications. We utilize modern stacks like React, Node.js, and Python to ensure your software is future-proof and hyper-optimized.",
    image: "/images/web-dev.jpg",
  },
  {
    id: "02",
    title: "Artificial Intelligence & Automation",
    description: "Transform your operations with AI Chatbots, LLM-driven applications, predictive analytics, and seamless workflow automation. We embed intelligent algorithms that reduce overhead and drastically improve operational efficiency.",
    image: "/images/automation.jpg",
  },
  {
    id: "03",
    title: "Cloud Architecture & DevOps",
    description: "Deploy with confidence on AWS, Azure, and Google Cloud. We set up robust Kubernetes clusters, CI/CD pipelines, and serverless architectures guaranteeing 99.99% uptime, uncompromising security, and infinite scalability.",
    image: "/images/erp.jpg",
  },
  {
    id: "04",
    title: "UI/UX & Product Design",
    description: "Deliver breathtaking digital experiences. Our design philosophy marries minimalist luxury aesthetics with intuitive functionality, resulting in engaging interfaces that delight users and drive unparalleled conversion rates.",
    image: "/images/ui-uix.jpg",
  },
  {
    id: "05",
    title: "Digital Marketing & Branding",
    description: "Elevate your brand presence globally. From data-driven SEO and performance marketing to cohesive corporate identity and high-impact social media management, we position your business as a market leader.",
    image: "/images/digital-marketing.jpg",
  }
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-background py-8 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-1 mb-12">
              <h2 className="tracking-tighter text-balance text-4xl font-bold md:text-5xl lg:text-6xl text-foreground font-heading">
                How we elevate <br/> <span className="text-primary-gold">your business</span>
              </h2>
              <span className="text-xs font-bold text-primary-gold uppercase tracking-[0.3em] block mt-4">
                (OUR CORE SERVICES)
              </span>
            </div>

            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 pl-3 md:pl-0 text-left transition-all duration-500 border-t border-border/50 first:border-0",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    <div className="absolute left-0 md:left-[-24px] top-0 bottom-0 w-[2px] bg-secondary">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-primary-gold origin-top"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-xs font-medium mt-1 tabular-nums opacity-50 font-heading">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 font-heading text-balance",
                          isActive ? "text-primary-gold" : ""
                        )}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted text-sm md:text-base font-normal leading-relaxed max-w-xl pb-2 font-body mt-4">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-square md:aspect-4/3 lg:aspect-[4/5] rounded-xl overflow-hidden bg-secondary border border-border">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block opacity-70"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent opacity-80" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-primary-gold/50 flex items-center justify-center text-primary-gold hover:bg-background transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-primary-gold/50 flex items-center justify-center text-primary-gold hover:bg-background transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
