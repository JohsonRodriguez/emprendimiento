"use client";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/content";

export function Navbar({ locale, d }: { locale: Locale; d: Dictionary }) {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  const ids = ["top","services","process","before-after","work","about","contact"];
  return <header className={`navbar ${scrolled ? "scrolled" : ""}`}><div className="nav-inner">
    <Link href={`/${locale}`} className="logo" aria-label="Nueva Web home"><span>N</span>Nueva Web</Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{d.nav.map((item,i)=><a key={item} href={`#${ids[i]}`}>{item}</a>)}</nav>
    <div className="nav-actions"><div className="locale-switch" aria-label="Language"><Link className={locale === "es" ? "active" : ""} href="/es">ES</Link><span>/</span><Link className={locale === "en" ? "active" : ""} href="/en">EN</Link></div><a className="button primary nav-cta" href="#contact">{d.proposal}</a><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X size={24}/>:<List size={24}/>}</button></div>
  </div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{d.nav.map((item,i)=><a onClick={()=>setOpen(false)} key={item} href={`#${ids[i]}`}>{item}</a>)}<a className="button primary" href="#contact">{d.proposal}</a></nav>}</header>;
}
