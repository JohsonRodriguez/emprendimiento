"use client";
import Image from "next/image";
import { ArrowsOutLineHorizontal } from "@phosphor-icons/react";
import { useState } from "react";
export function BeforeAfterSlider({ before, after, drag }: { before:string; after:string; drag:string }) {
  const [position,setPosition]=useState(50);
  return <div className="compare-wrap"><div className="compare" style={{"--pos":`${position}%`} as React.CSSProperties}>
    <Image src="/images/hero-transformation.png" alt={`${before}: outdated website shown on a laptop`} fill sizes="(max-width: 768px) 100vw, 1100px" className="compare-image old"/>
    <div className="new-clip"><Image src="/images/hero-transformation.png" alt={`${after}: redesigned modern website shown on a laptop`} fill sizes="(max-width: 768px) 100vw, 1100px" className="compare-image modern"/></div>
    <div className="compare-line"><span><ArrowsOutLineHorizontal size={20}/></span></div><span className="compare-label before-label">{before}</span><span className="compare-label after-label">{after}</span>
    <input aria-label={drag} type="range" min="20" max="80" value={position} onChange={(e)=>setPosition(Number(e.target.value))}/>
  </div><p className="drag-note"><ArrowsOutLineHorizontal size={18}/>{drag}</p></div>;
}
