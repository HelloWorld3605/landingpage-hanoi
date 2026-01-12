import React, { useEffect, useState } from "react";
import { Globe, Instagram, Facebook } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/30 backdrop-blur-lg" : "py-6 bg-transparent"
      }`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg tracking-wider select-none">
          <Globe className="w-5 h-5" />
          <span>Vietnam Explore</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-amber-200 transition-colors">
            Giới thiệu
          </a>
          <a
            href="#included"
            className="hover:text-amber-200 transition-colors"
          >
            Sản phẩm
          </a>
          <a
            href="#contacts"
            className="hover:text-amber-200 transition-colors"
          >
            Liên hệ
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
