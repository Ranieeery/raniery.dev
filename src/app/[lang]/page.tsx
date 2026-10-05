import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { personJsonLd } from "@/lib/seo";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const jsonLd = JSON.stringify(personJsonLd(lang, dict)).replace(
    /</g,
    "\\u003c"
  );

  return (
    <>
      <Header locale={lang} dict={dict} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero locale={lang} dict={dict} />
        <About dict={dict} index={1} />
        <Experience locale={lang} dict={dict} index={2} />
        <Projects dict={dict} index={3} />
        <Skills dict={dict} index={4} />
        <Education locale={lang} dict={dict} index={5} />
        <Contact locale={lang} dict={dict} index={6} />
      </main>
      <Footer dict={dict} />
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  );
}
