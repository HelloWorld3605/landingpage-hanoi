import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
const features = [
  {
    title: "3 cities",
    subtitle: "in Japan",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "10 days",
    subtitle: "adventure",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Gigabytes",
    subtitle: "of photos",
    image:
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Eat ramen",
    subtitle: "authentic",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Enjoy",
    subtitle: "the vibe",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=400&auto=format&fit=crop",
  },
];
export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hà nội 1.jpg"
          alt="Japan Scenery"
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
          JAPAN
        </motion.h1>

        {/* Feature Cards Scroll */}
        <div className="mt-8 md:mt-12 overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex gap-4 min-w-max px-2">
            {features.map((feature, index) => (
              <GlassCard
                key={index}
                className="w-36 h-48 md:w-48 md:h-64 relative group flex-shrink-0"
                hoverEffect
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-lg font-bold leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-xs text-white/80">{feature.subtitle}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Floating Book Button */}
        <motion.div
          className="absolute bottom-12 right-6 md:right-12 hidden md:block"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1,
            type: "spring",
          }}
        >
          <button className="bg-white text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-amber-100 transition-colors shadow-lg shadow-black/20">
            Book
          </button>
        </motion.div>
      </div>
    </section>
  );
}
