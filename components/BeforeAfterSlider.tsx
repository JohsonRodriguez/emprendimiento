"use client";
import Image from "next/image";
import { ArrowsOutLineHorizontal } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";
export function BeforeAfterSlider({ before, after, drag }: { before:string; after:string; drag:string }) {
  const [position,setPosition]=useState(50);
  const wrapRef=useRef<HTMLDivElement>(null); const positionRef=useRef(50); const directionRef=useRef(1); const pausedUntilRef=useRef(0); const draggingRef=useRef(false);

  useEffect(()=>{
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)"); if(reduce.matches)return;
    let frame=0; let previous=performance.now(); let visible=true;
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting; previous=performance.now()},{threshold:.1});
    if(wrapRef.current)observer.observe(wrapRef.current);
    const tick=(now:number)=>{
      const elapsed=Math.min(now-previous,40); previous=now;
      if(visible&&!draggingRef.current&&now>=pausedUntilRef.current){
        let next=positionRef.current+directionRef.current*elapsed*.009;
        if(next>=84){next=84;directionRef.current=-1}else if(next<=16){next=16;directionRef.current=1}
        positionRef.current=next; setPosition(next);
      }
      frame=requestAnimationFrame(tick);
    };
    frame=requestAnimationFrame(tick); return()=>{cancelAnimationFrame(frame);observer.disconnect()};
  },[]);

  const updatePosition=(value:number)=>{positionRef.current=value;setPosition(value);pausedUntilRef.current=performance.now()+4000};
  const startDragging=()=>{draggingRef.current=true}; const stopDragging=()=>{draggingRef.current=false;pausedUntilRef.current=performance.now()+2500};

  return <div className="compare-wrap" ref={wrapRef}><div className="compare" style={{"--pos":`${position}%`} as React.CSSProperties}>
    <Image src={assetPath("/images/comparison-after.webp")} alt={`${after}: redesigned modern website shown on a laptop`} fill sizes="(max-width: 768px) 100vw, 1100px" className="compare-image modern"/>
    <Image src={assetPath("/images/comparison-before.webp")} alt={`${before}: outdated website shown on the same laptop`} fill sizes="(max-width: 768px) 100vw, 1100px" className="compare-image old-overlay"/>
    <div className="compare-line"><span><ArrowsOutLineHorizontal size={20}/></span></div><span className="compare-label before-label">{before}</span><span className="compare-label after-label">{after}</span>
    <input aria-label={drag} type="range" min="0" max="100" value={position} onChange={(e)=>updatePosition(Number(e.target.value))} onPointerDown={startDragging} onPointerUp={stopDragging} onPointerCancel={stopDragging} onBlur={stopDragging}/>
  </div><p className="drag-note"><ArrowsOutLineHorizontal size={18}/>{drag}</p></div>;
}
