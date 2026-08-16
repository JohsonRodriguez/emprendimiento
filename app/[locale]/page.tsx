import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { dictionaries, isLocale, type Locale } from "@/lib/content";

export function generateStaticParams() { return [{ locale: "es" }, { locale: "en" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isLocale(locale)) return {};
  const d = dictionaries[locale];
  const siteUrl = "https://www.gettueny.com";
  return { title: d.metaTitle, description: d.metaDescription, alternates: { canonical: `${siteUrl}/${locale}/`, languages: { "es-US": `${siteUrl}/es/`, "en-US": `${siteUrl}/en/` } }, openGraph: { title: d.metaTitle, description: d.metaDescription, locale: locale === "es" ? "es_US" : "en_US" } };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound();
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Tueny", url: `https://www.gettueny.com/${locale}/`, logo: "https://www.gettueny.com/brand/tueny-symbol-master.svg", areaServed: "US", knowsLanguage: ["en", "es"], serviceType: ["Web design", "Website redesign", "Bilingual websites"] };
  return <><LandingPage locale={locale as Locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
