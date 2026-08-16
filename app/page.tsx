import { assetPath } from "@/lib/assets";

export default function Home() {
  const destination = assetPath("/en/");
  return <main className="redirect-page">
    <meta httpEquiv="refresh" content={`0;url=${destination}`} />
    <p>Opening Tueny…</p>
    <a href={destination}>Continue to the website</a>
  </main>;
}
