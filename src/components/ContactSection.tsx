import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
export function ContactSection() {
  return (
    <section
      id="contacts"
      className="relative py-24 px-4 md:px-6 min-h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="mùa thu hà nội 3.png"
          alt="Cherry Blossoms"
          className="w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="max-w-lg"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Muốn tham gia cùng chúng tôi,
            </h2>
            <p className="text-xl text-white/80 mb-8">
              nhưng vẫn còn thắc mắc?
            </p>

            <p className="text-amber-200 uppercase tracking-widest text-sm mb-6">
              Để lại yêu cầu
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1 select-none">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border-b border-white/30 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-200 focus:bg-white/10 transition-all rounded-t-lg"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1 select-none">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border-b border-white/30 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-200 focus:bg-white/10 transition-all rounded-t-lg"
                  placeholder="+84 90 123 4567"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/60 ml-1 select-none">
                  Lời nhắn
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-white/5 border-b border-white/30 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-200 focus:bg-white/10 transition-all rounded-t-lg resize-none"
                  placeholder="Tôi quan tâm đến sản phẩm hộp kí ức Hà Nội..."
                />
              </div>

              <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-center gap-2 group mt-4 select-none">
                <span>Gửi yêu cầu</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
