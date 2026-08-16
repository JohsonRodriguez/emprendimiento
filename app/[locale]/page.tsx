import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { dictionaries, isLocale, type Locale } from "@/lib/content";

export function generateStaticParams() { return [{ locale: "es" }, { locale: "en" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isLocale(locale)) return {};
  const d = dictionaries[locale];
  return { title: d.metaTitle, description: d.metaDescription, alternates: { canonical: `/${locale}`, languages: { "es-US": "/es", "en-US": "/en" } }, openGraph: { title: d.metaTitle, description: d.metaDescription, locale: locale === "es" ? "es_US" : "en_US" } };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound();
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Nueva Web", url: `https://johsonrodriguez.github.io/emprendimiento/${locale}/`, areaServed: "US", knowsLanguage: ["en", "es"], serviceType: ["Web design", "Website redesign", "Bilingual websites"] };
  return <><LandingPage locale={locale as Locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
