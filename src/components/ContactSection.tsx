import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
export function ContactSection() {
  return <section id="contacts" className="relative py-24 px-4 md:px-6 min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1920&auto=format&fit=crop" alt="Cherry Blossoms" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div className="max-w-lg" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Want to join us,
            </h2>
            <p className="text-xl text-white/80 mb-8">
              but still have questions?
            </p>

            <p className="text-amber-200 uppercase tracking-widest text-sm mb-6">
              Leave a request
            </p>

            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Your name</label>
                <input type="text" className="w-full bg-white/5 border-b border-white/30 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-200 focus:bg-white/10 transition-all rounded-t-lg" placeholder="John Doe" />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">
                  Phone number
                </label>
                <input type="tel" className="w-full bg-white/5 border-b border-white/30 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-200 focus:bg-white/10 transition-all rounded-t-lg" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1">Comment</label>
                <textarea rows={3} className="w-full bg-white/5 border-b border-white/30 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-200 focus:bg-white/10 transition-all rounded-t-lg resize-none" placeholder="I'm interested in the tour..." />
              </div>

              <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-center gap-2 group mt-4">
                <span>Send Request</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>;
}