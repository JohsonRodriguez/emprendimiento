"use client";

import { motion, useReducedMotion } from "motion/react";

export default function LocaleTemplate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, transform: "translateY(4px) scale(0.995)" }}
      animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
      transition={{ duration: .32, ease: [.23, 1, .32, 1] }}
    >
      {children}
    </motion.div>
  );
}
