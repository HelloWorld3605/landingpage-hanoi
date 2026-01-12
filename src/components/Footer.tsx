import React from "react";
import { Globe, Instagram, Video, Send } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-[#111] text-white py-12 px-4 md:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg tracking-wider opacity-80 select-none">
          <Globe className="w-5 h-5" />
          <span>Vietnam Explore</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm text-white/60">
          <a href="#about" className="hover:text-white transition-colors">
            Giới thiệu
          </a>
          <a href="#included" className="hover:text-white transition-colors">
            Sản phẩm
          </a>
          <a href="#contacts" className="hover:text-white transition-colors">
            Liên hệ
          </a>
        </div>

        {/* Social & Action */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-white/60">
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Video className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center text-xs text-white/20 select-none">
        © {new Date().getFullYear()} Vietnam Explore. All rights reserved.
      </div>
    </footer>
  );
}
