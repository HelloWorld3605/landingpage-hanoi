import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  return <motion.div className={`
        backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden
        ${hoverEffect ? 'hover:bg-white/20 transition-colors duration-300 cursor-pointer' : ''}
        ${className}
      `} {...props}>
      {children}
    </motion.div>;
}