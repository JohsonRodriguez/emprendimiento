"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { useState } from "react";
import type { Dictionary } from "@/lib/content";
import { assetPath } from "@/lib/assets";
export function BilingualDemo({ d }: { d: Dictionary }) {
  const [lang,setLang]=useState<"es"|"en">("es"); const reduce=useReducedMotion(); const copy=d.languageCopy[lang];
  return <div className="language-demo"><div className="demo-bar"><span><GlobeHemisphereWest size={20}/>{d.viewSite}</span><div><button className={lang==="es"?"active":""} onClick={()=>setLang("es")}>ES</button><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button></div></div><AnimatePresence mode="wait"><motion.div key={lang} className="demo-content" initial={reduce?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduce?{}:{opacity:0,y:-8}} transition={{duration:.25}}><div><span className="demo-logo">NW</span><p>{copy[0]}</p><h3>{copy[1]}</h3><button>{copy[2]}</button></div><div className="demo-photo"><ImageFill /></div></motion.div></AnimatePresence></div>;
}
function ImageFill(){return <img src={assetPath("/images/project-dental.png")} alt="Modern dental clinic website preview"/>}
