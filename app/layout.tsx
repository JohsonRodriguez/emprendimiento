import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import { assetPath } from "@/lib/assets";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono" });
const urbanist = Urbanist({ subsets: ["latin"], display: "swap", variable: "--font-urbanist" });
const siteUrl = "https://johsonrodriguez.github.io/emprendimiento";

export const metadata: Metadata = {
  metadataBase: new URL("https://johsonrodriguez.github.io/emprendimiento/"),
  title: { default: "Tueny | Diseño web bilingüe", template: "%s | Tueny" },
  description: "Diseño y rediseño de sitios web modernos, rápidos y bilingües para negocios.",
  icons: {
    icon: [{ url: assetPath("/icons/favicon.svg"), type: "image/svg+xml" }, { url: assetPath("/icons/tueny-32x32.png"), sizes: "32x32", type: "image/png" }],
    shortcut: assetPath("/icons/favicon.ico"),
    apple: [{ url: assetPath("/icons/tueny-180x180.png"), sizes: "180x180", type: "image/png" }],
  },
  manifest: assetPath("/manifest.webmanifest"),
  openGraph: { type: "website", siteName: "Tueny", images: [{ url: `${siteUrl}/social/tueny-og-1200x630.png`, width: 1200, height: 630, alt: "Tueny" }] },
  twitter: { card: "summary_large_image", images: [`${siteUrl}/social/tueny-og-1200x630.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${geist.variable} ${geistMono.variable} ${urbanist.variable}`}><body>{children}</body></html>;
}
