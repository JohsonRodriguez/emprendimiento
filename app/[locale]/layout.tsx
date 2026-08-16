import { isLocale } from "@/lib/content";

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const documentLocale = isLocale(locale) ? locale : "en";
  return <>
    <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(documentLocale)}` }} />
    {children}
  </>;
}
