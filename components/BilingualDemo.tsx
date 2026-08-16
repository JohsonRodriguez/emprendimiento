"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
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

  return <div className="language-demo"><div className="demo-bar"><span><GlobeHemisphereWest size={20}/>{d.viewSite}</span><div><button className={lang==="es"?"active":""} onClick={()=>setLang("es")} aria-pressed={lang==="es"}>ES</button><button className={lang==="en"?"active":""} onClick={()=>setLang("en")} aria-pressed={lang==="en"}>EN</button></div></div><AnimatePresence mode="wait"><motion.div key={lang} className="demo-content" initial={reduce?false:{opacity:0,transform:"translateY(8px)"}} animate={{opacity:1,transform:"translateY(0)"}} exit={reduce?{}:{opacity:0,transform:"translateY(-8px)"}} transition={{duration:.2,ease:[.23,1,.32,1]}}><div><span className="demo-logo">NW</span><p>{copy[0]}</p><h3>{copy[1]}</h3><button>{copy[2]}</button></div><div className="demo-photo"><ImageFill /></div></motion.div></AnimatePresence></div>;
}
function ImageFill(){return <img src={assetPath("/images/bilingual-veterinary.png")} alt="Modern veterinary clinic website preview with a veterinarian and a golden retriever"/>}
