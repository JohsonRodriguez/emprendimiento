import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nuevaweb.studio"),
  title: { default: "Nueva Web | Diseño web bilingüe", template: "%s | Nueva Web" },
  description: "Diseño y rediseño de sitios web modernos, rápidos y bilingües para negocios.",
  openGraph: { type: "website", siteName: "Nueva Web", images: [{ url: "/images/hero-transformation.png", width: 1536, height: 1024 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={manrope.variable}><body>{children}</body></html>;
}
