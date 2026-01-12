import React from "react";
import { motion } from "framer-motion";
import { Users, Plane, Car, Hotel } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
const services = [
  {
    icon: Users,
    title: "Guides",
    description: "2 awesome guides who know everything about Japan!",
  },
  {
    icon: Plane,
    title: "Flights",
    description: "Routes: Moscow → Osaka, Tokyo → Moscow",
  },
  {
    icon: Car,
    title: "Transfers",
    description: "From the airport to the hotels and between cities",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description:
      "Comfortable accommodation, 2 people per room (breakfasts included)",
  },
];
export function IncludedSection() {
  return (
    <section
      id="included"
      className="bg-[#111] text-white py-24 px-4 md:px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Hộp kí ức Hà Nội
          </h2>
          <div className="h-px flex-1 bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GlassCard
              key={index}
              className="p-8 min-h-[280px] flex flex-col justify-between group"
              hoverEffect
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <div>
                <service.icon className="w-10 h-10 text-amber-200 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-amber-200 rounded-full" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
