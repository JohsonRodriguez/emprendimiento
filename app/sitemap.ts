import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["es", "en"].map((locale) => ({ url: `https://johsonrodriguez.github.io/emprendimiento/${locale}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 })); }
