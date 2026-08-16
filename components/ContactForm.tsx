"use client";
import { CheckCircle, PaperPlaneTilt, WarningCircle } from "@phosphor-icons/react";
import { useState } from "react";
import type { Dictionary } from "@/lib/content";
export function ContactForm({ d }: { d: Dictionary }) {
  const [state,setState]=useState<"idle"|"sending"|"success"|"error">("idle"); const [errors,setErrors]=useState<string[]>([]);
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault(); const form=e.currentTarget; const required=[...form.querySelectorAll<HTMLInputElement|HTMLTextAreaElement>("[required]")]; const invalid=required.filter(x=>!x.value.trim()).map(x=>x.name); setErrors(invalid); if(invalid.length)return; setState("sending"); await new Promise(r=>setTimeout(r,700)); setState("success"); form.reset();}
  const fields=[{name:"name",type:"text",req:true},{name:"company",type:"text",req:true},{name:"email",type:"email",req:true},{name:"phone",type:"tel"},{name:"website",type:"url"}];
  return <form className="contact-form" onSubmit={submit} noValidate>{fields.map((f,i)=><label key={f.name}><span>{d.labels[i]}</span><input name={f.name} type={f.type} required={f.req} aria-invalid={errors.includes(f.name)}/>{errors.includes(f.name)&&<small>{d.required}</small>}</label>)}
    <label><span>{d.labels[5]}</span><select name="type" defaultValue=""> <option value="" disabled>Select</option>{d.types.map(x=><option key={x}>{x}</option>)}</select></label><label className="full"><span>{d.labels[7]}</span><textarea name="message" rows={5} required aria-invalid={errors.includes("message")}/>{errors.includes("message")&&<small>{d.required}</small>}</label><label className="checkbox full"><input type="checkbox" name="audit"/><span>{d.analyze}</span></label>
    <div className="form-submit full"><button className="button primary" disabled={state==="sending"}>{state==="sending"?d.sending:d.send}<PaperPlaneTilt size={18}/></button>{state==="success"&&<p className="form-status success"><CheckCircle size={20}/>{d.success}</p>}{state==="error"&&<p className="form-status error"><WarningCircle size={20}/>{d.error}</p>}</div></form>;
}
