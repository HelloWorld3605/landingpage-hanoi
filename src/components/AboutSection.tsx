import React from 'react';
import { motion } from 'framer-motion';
const timeline = [{
  days: 'Days 1-3',
  city: 'Osaka',
  image: 'https://images.unsplash.com/photo-1590559399607-57505cd27e54?q=80&w=200&auto=format&fit=crop',
  align: 'right'
}, {
  days: 'Days 4-6',
  city: 'Kyoto',
  image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=200&auto=format&fit=crop',
  align: 'left'
}, {
  days: 'Days 7-10',
  city: 'Tokyo',
  image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=200&auto=format&fit=crop',
  align: 'right'
}];
export function AboutSection() {
  return <section id="about" className="bg-[#111] text-white py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex items-center justify-center gap-4 mb-20" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <div className="h-px w-12 md:w-24 bg-white/30" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center uppercase">
            About the Tour
          </h2>
          <div className="h-px w-12 md:w-24 bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description */}
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
              We've planned a simple and convenient{' '}
              <span className="text-amber-200 font-normal">
                10-day itinerary
              </span>{' '}
              for your trip to Japan.
            </h3>
            <p className="text-xl text-white/70">
              You'll visit three cities: <br />
              <span className="text-amber-400 text-2xl font-serif">
                Osaka, Kyoto, and Tokyo.
              </span>
            </p>
            <p className="text-white/60 leading-loose max-w-md">
              No need to worry about routes, schedules, or finding places —
              everything is already organized. We'll show you where to go, what
              to see, and where to eat, so you can simply{' '}
              <span className="text-amber-200">enjoy the journey</span>.
            </p>

            <div className="pt-8">
              <img src="https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=400&auto=format&fit=crop" alt="Japan Street" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-white/10 via-white/50 to-white/10" />

            <div className="space-y-24 relative">
              {timeline.map((item, index) => <motion.div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }}>
                  {/* Text Content */}
                  <div className={`flex-1 ${item.align === 'left' ? 'md:text-left' : 'md:text-right'} pl-12 md:pl-0`}>
                    <span className="text-amber-200 text-sm tracking-widest uppercase mb-1 block">
                      {item.days}
                    </span>
                    <h4 className="text-3xl font-bold">{item.city}</h4>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#111] -translate-x-1/2 z-10" />

                  {/* Image */}
                  <div className="flex-1 pl-12 md:pl-0">
                    <img src={item.image} alt={item.city} className="w-32 h-32 object-cover rounded-lg border border-white/20 shadow-2xl shadow-black/50 hover:scale-105 transition-transform duration-300" />
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}