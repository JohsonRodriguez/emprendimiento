import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p>404</p><h1>Esta página no existe.</h1><Link href="/es" className="button primary">Volver al inicio</Link></main>; }
