import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hà nội 1.jpg"
          alt="Hà Nội Scenery"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Large Title */}
        <motion.h1
          className="text-[15vw] md:text-[12vw] font-bold text-white leading-none text-center md:text-left opacity-90 tracking-tighter mix-blend-overlay"
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 0.9,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          Hà Nội
        </motion.h1>
      </div>
    </section>
  );
}
