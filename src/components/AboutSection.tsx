import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    label: "Buổi sáng",
    place: "Hồ Gươm",
    image:
      "https://images.unsplash.com/photo-1600664223430-ef53a1f2b6a4?q=80&w=200&auto=format&fit=crop",
    align: "right",
  },
  {
    label: "Nhịp sống",
    place: "Phố Cổ",
    image:
      "https://images.unsplash.com/photo-1589187155475-5c7c4c9a8c4a?q=80&w=200&auto=format&fit=crop",
    align: "left",
  },
  {
    label: "Chiều muộn",
    place: "Hồ Tây",
    image:
      "https://images.unsplash.com/photo-1599127989103-7e6bcbf9f6df?q=80&w=200&auto=format&fit=crop",
    align: "right",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#111] text-white py-24 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12 md:w-24 bg-white/30" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center uppercase">
            Địa điểm yêu thích
          </h2>
          <div className="h-px w-12 md:w-24 bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
              Hà Nội không chỉ là một thành phố, mà là{" "}
              <span className="text-amber-200 font-normal">
                nơi cất giữ ký ức
              </span>
              .
            </h3>

            <p className="text-xl text-white/70">
              Ở đây có những buổi sáng chậm rãi, những con phố cũ, và những
              chiều gió lặng bên mặt hồ.
            </p>

            <p className="text-white/60 leading-loose max-w-md">
              Mỗi góc phố, mỗi quán cà phê, mỗi con đường quen thuộc đều mang
              theo một câu chuyện rất riêng. Hà Nội không ồn ào để gây ấn tượng
              — Hà Nội ở lại rất lâu trong ký ức.
            </p>

            <div className="pt-8">
              <img
                src="https://images.unsplash.com/photo-1589187155475-5c7c4c9a8c4a?q=80&w=400&auto=format&fit=crop"
                alt="Ha Noi Street"
                className="rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-white/10 via-white/50 to-white/10" />

            <div className="space-y-24 relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    item.align === "left" ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Text */}
                  <div
                    className={`flex-1 ${
                      item.align === "left" ? "md:text-left" : "md:text-right"
                    } pl-12 md:pl-0`}
                  >
                    <span className="text-amber-200 text-sm tracking-widest uppercase mb-1 block">
                      {item.label}
                    </span>
                    <h4 className="text-3xl font-bold">{item.place}</h4>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#111] -translate-x-1/2 z-10" />

                  {/* Image */}
                  <div className="flex-1 pl-12 md:pl-0">
                    <img
                      src={item.image}
                      alt={item.place}
                      className="w-32 h-32 object-cover rounded-lg border border-white/20 shadow-2xl shadow-black/50 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
