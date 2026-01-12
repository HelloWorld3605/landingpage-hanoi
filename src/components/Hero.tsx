import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Lăng Bác",
    image: "lăng bác.jpg",
  },
  {
    id: 2,
    title: "Hồ Gươm",
    image: "hồ gươm.jpg",
  },
  {
    id: 3,
    title: "Nhà Hát Lớn",
    image: "nhà hát lớn 1.JPG",
  },
  {
    id: 4,
    title: "Chùa Một Cột",
    image: "chùa một cột.jpg",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 group">
      {/* Background Carousel */}
      <AnimatePresence>
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover object-center select-none"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 select-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-16 md:h-16" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 select-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-16 md:h-16" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pointer-events-none">
        {/* Large Title */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-[10vw] md:text-[8vw] font-bold text-white leading-tight py-2 text-center md:text-left opacity-90 tracking-tighter mix-blend-overlay">
                {slides[currentSlide].title}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
