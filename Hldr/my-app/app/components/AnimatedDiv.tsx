'use client';

import { motion, Variants } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

const defaultFadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AnimatedDiv({ children, className, variants = defaultFadeInUp }: AnimatedDivProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
