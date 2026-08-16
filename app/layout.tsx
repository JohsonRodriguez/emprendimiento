import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://johsonrodriguez.github.io/emprendimiento/"),
  title: { default: "Nueva Web | Diseño web bilingüe", template: "%s | Nueva Web" },
  description: "Diseño y rediseño de sitios web modernos, rápidos y bilingües para negocios.",
  openGraph: { type: "website", siteName: "Nueva Web", images: [{ url: "/images/hero-transformation.png", width: 1536, height: 1024 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${geist.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}
