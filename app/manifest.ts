import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/assets";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tueny",
    short_name: "Tueny",
    description: "Diseño y rediseño de sitios web modernos, rápidos y bilingües para negocios.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0F7156",
    icons: [
      { src: assetPath("/icons/tueny-192x192.png"), sizes: "192x192", type: "image/png" },
      { src: assetPath("/icons/tueny-512x512.png"), sizes: "512x512", type: "image/png" },
    ],
  };
}
