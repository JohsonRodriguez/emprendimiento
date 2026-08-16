"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/lib/content";
import { assetPath } from "@/lib/assets";
export function BilingualDemo({ d }: { d: Dictionary }) {
  const [lang,setLang]=useState<"es"|"en">("es"); const reduce=useReducedMotion(); const copy=d.languageCopy[lang];

  useEffect(() => {
    if (reduce) return;
    const interval = window.setInterval(() => {
      setLang((current) => current === "es" ? "en" : "es");
    }, 2000);
    return () => window.clearInterval(interval);
  }, [reduce]);

  return <div className="language-demo"><div className="demo-bar"><span><GlobeHemisphereWest size={20}/>{d.viewSite}</span><div><button className={lang==="es"?"active":""} onClick={()=>setLang("es")} aria-pressed={lang==="es"}>ES</button><button className={lang==="en"?"active":""} onClick={()=>setLang("en")} aria-pressed={lang==="en"}>EN</button></div></div><div className="demo-stage"><AnimatePresence initial={false}><motion.div key={lang} className="demo-content" initial={reduce?false:{opacity:0}} animate={{opacity:1}} exit={reduce?{}:{opacity:0}} transition={{duration:.28,ease:[.23,1,.32,1]}}><div><span className="demo-logo">NW</span><p>{copy[0]}</p><h3>{copy[1]}</h3><button>{copy[2]}</button></div><div className="demo-photo"><ImageFill /></div></motion.div></AnimatePresence></div></div>;
}
function ImageFill(){return <Image src={assetPath("/images/bilingual-veterinary.webp")} alt="Modern veterinary clinic website preview with a veterinarian and a golden retriever" width={1448} height={1086} sizes="(max-width: 767px) 100vw, 56vw"/>}
