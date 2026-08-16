import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Browser, Check, DeviceMobile, Gauge, GlobeHemisphereWest, MagnifyingGlass, PaintBrush, ShieldCheck, Wrench } from "@phosphor-icons/react/dist/ssr";
import { dictionaries, type Locale } from "@/lib/content";
import { assetPath } from "@/lib/assets";
import { Navbar } from "./Navbar"; import { Reveal } from "./Reveal"; import { BeforeAfterSlider } from "./BeforeAfterSlider"; import { BilingualDemo } from "./BilingualDemo"; import { ContactForm } from "./ContactForm";

const serviceIcons=[PaintBrush,Wrench,GlobeHemisphereWest,DeviceMobile,MagnifyingGlass,Gauge,ShieldCheck];
const showProjectsCta=false;
export function LandingPage({locale}:{locale:Locale}){const d=dictionaries[locale]; return <>
  <Navbar locale={locale} d={d}/><main id="top">
    <section className="hero"><div className="hero-copy"><Reveal><p className="eyebrow">{d.heroKicker}</p><h1>{d.heroTitle}</h1><p className="hero-body">{d.heroBody}</p><div className="hero-actions"><a className="button primary" href="#contact">{d.heroPrimary}<ArrowRight size={18}/></a></div></Reveal></div><Reveal className="hero-visual" delay={.12}><div className="hero-image"><Image src={assetPath("/images/hero-transformation.png")} alt="Laptop comparing an outdated website with its modern redesign" fill priority sizes="(max-width: 900px) 100vw, 56vw"/></div><div className="transform-caption"><span>{d.before}</span><i/><strong>{d.after}</strong></div></Reveal></section>
    <section className="trust-strip" aria-label="Website standards">{d.trust.map((x)=><span key={x}><Check size={17}/>{x}</span>)}</section>

    <section className="section problem-section"><Reveal className="problem-header"><h2>{d.problemTitle}</h2><p>{d.problemBody}</p></Reveal><div className="problem-grid">{d.problems.map((x,i)=><Reveal className="problem-item" delay={i*.04} key={x}><i aria-hidden="true"/><p>{x}</p></Reveal>)}</div></section>

    <section className="section compare-section" id="before-after"><Reveal className="section-heading compact"><p className="eyebrow">Before / After</p><h2>{d.beforeTitle}</h2><p>{d.beforeBody}</p></Reveal><Reveal><BeforeAfterSlider before={d.before} after={d.after} drag={d.drag}/></Reveal></section>

    <section className="section services-section" id="services"><Reveal className="services-header"><h2>{d.servicesTitle}</h2><p>{d.servicesBody}</p></Reveal><div className="services-grid">{d.services.map(([title,body],i)=>{const Icon=serviceIcons[i];return <Reveal className="service" delay={i*.035} key={title}><span className="service-icon"><Icon size={25}/></span><h3>{title}</h3><p>{body}</p></Reveal>})}</div></section>

    <section className="section bilingual-section"><Reveal className="bilingual-copy"><p className="eyebrow">English + Español</p><h2>{d.bilingualTitle}</h2><p>{d.bilingualBody}</p></Reveal><Reveal className="bilingual-visual" delay={.1}><BilingualDemo d={d}/></Reveal></section>

    <section className="section process-section" id="process"><Reveal className="section-heading"><h2>{d.processTitle}</h2></Reveal><div className="process-track">{d.process.map(([title,body],i)=><Reveal className="process-step" delay={i*.05} key={title}><span>{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></Reveal>)}</div></section>

    <section className="section work-section" id="work"><Reveal className="section-heading compact"><p className="eyebrow">{locale==="es"?"Proyectos seleccionados":"Selected work"}</p><h2>{d.portfolioTitle}</h2></Reveal><div className="projects">{d.projects.map((project,i)=><Reveal className={`project project-${i}`} key={project[0]}><div className="project-image"><Image src={assetPath(i?"/images/project-restaurant.png":"/images/project-dental.png")} alt={`${project[0]} website redesign`} fill sizes="(max-width:768px) 100vw, 70vw"/></div><div className="project-info"><h3>{project[0]}</h3><dl><div><dt>{d.problem}</dt><dd>{project[1]}</dd></div><div><dt>{d.solution}</dt><dd>{project[2]}</dd></div><div><dt>{d.result}</dt><dd>{project[3]}</dd></div></dl></div></Reveal>)}</div></section>

    <section className="section results-section"><Reveal><h2>{d.resultsTitle}</h2></Reveal><div className="results-orbit"><div className="result-core"><Browser size={36}/><span>Tueny</span></div>{d.results.map((x,i)=><Reveal className={`result-chip chip-${i}`} delay={i*.04} key={x}><Check size={17}/>{x}</Reveal>)}</div></section>

    <section className="section cta-section"><Reveal><h2>{d.ctaTitle}</h2><p>{d.ctaBody}</p><div><a className="button light" href="#contact">{d.ctaPrimary}<ArrowRight size={18}/></a>{showProjectsCta&&<a className="text-link light-link" href="#work">{d.ctaSecondary}<ArrowDownRight size={18}/></a>}</div></Reveal></section>

    <section className="section contact-section" id="contact"><Reveal className="contact-copy"><h2>{d.contactTitle}</h2><p>{d.contactBody}</p><a href="mailto:hello@nuevaweb.studio">hello@nuevaweb.studio</a></Reveal><Reveal className="contact-form-wrap" delay={.08}><ContactForm d={d}/></Reveal></section>
  </main><footer><div><Link href={`/${locale}`} className="logo footer-logo"><Image className="brand-mark" src={assetPath("/brand/tueny-symbol-master.svg")} alt="" width={34} height={34}/>Tueny</Link><p>{d.footer}</p></div><nav>{d.nav.slice(1).map((x,i)=><a key={x} href={`#${["services","process","before-after","work","contact"][i]}`}>{x}</a>)}</nav><div className="footer-meta"><span>© {new Date().getFullYear()} Tueny. {d.rights}</span><span><a href="#">{d.privacy}</a><a href="#">{d.terms}</a><Link href={locale==="es"?"/en":"/es"}>{locale==="es"?"English":"Español"}</Link></span></div></footer>
  </>}
