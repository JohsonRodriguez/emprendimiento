"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, transform: "translateY(22px)" }} whileInView={{ opacity: 1, transform: "translateY(0)" }} viewport={{ once: true, amount: .18 }} transition={{ duration: .65, delay, ease: [.16, 1,.3,1] }}>{children}</motion.div>;
}
