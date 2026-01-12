import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Instagram, Send, Video } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/30 backdrop-blur-lg" : "py-6 bg-transparent"
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
          <Link to="/test-3d" className="hover:text-amber-200 transition-colors text-amber-500 font-bold">
            Test 3D
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Video className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
