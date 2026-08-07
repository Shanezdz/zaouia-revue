import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Numero1Article from "@/components/Numero1Article";
import Numero2Article from "@/components/Numero2Article";
import Numero3Article from "@/components/Numero3Article";
import Numero4Article from "@/components/Numero4Article";
import { numeros } from "@/data/numeros";

const siteUrl = "https://zaouia-revue-pyvl.vercel.app";
const readingTimes: Record<number, number> = { 1: 7, 2: 11, 3: 12, 4: 12 };

export function generateStaticParams() {
  return numeros.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = numeros.find((numero) => numero.slug === slug);
  if (!item) return {};
  const url = `${siteUrl}/numeros/${item.slug}`;
  return {
    title: `${item.title} | Zaouia N°${item.numero}`,
    description: item.subtitle,
    alternates: { canonical: url },
    openGraph: {
      title: `${item.title} — Zaouia N°${item.numero}`,
      description: item.subtitle,
      url,
      siteName: "Zaouia",
      type: "article",
      images: [{ url: `${siteUrl}${item.image}`, alt: `Couverture Zaouia numéro ${item.numero}` }],
    },
  };
}

export default async function NumeroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = numeros.find((numero) => numero.slug === slug);
  if (!item) notFound();

  const ordered = [...numeros].sort((a, b) => a.numero - b.numero);
  const index = ordered.findIndex((numero) => numero.numero === item.numero);
  const previous = index > 0 ? ordered[index - 1] : null;
  const next = index < ordered.length - 1 ? ordered[index + 1] : null;
  const issueUrl = `${siteUrl}/numeros/${item.slug}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(issueUrl)}`;

  return (
    <main>
      <Header />
      <section className="article-hero">
        <div className="article-cover">
          <Image src={item.image} alt={`Couverture Zaouia numéro ${item.numero}`} width={1000} height={1300} className="latest-image" priority />
        </div>
        <div className="article-intro">
          <div className="section-kicker">Zaouia — N°{item.numero}</div>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
          <div className="article-theme">{item.theme}</div>
          <div className="reading-time">Temps de lecture · {readingTimes[item.numero] ?? 10} min</div>
          <Link href="/#numeros" className="text-link">← Retour aux numéros</Link>
        </div>
      </section>

      <section className="article-body">
        {item.numero === 1 ? <Numero1Article /> : item.numero === 2 ? <Numero2Article /> : item.numero === 3 ? <Numero3Article /> : item.numero === 4 ? <Numero4Article /> : null}

        <div className="author-signature">
          <div className="section-kicker">Autrice</div>
          <strong>Shanez Kechroud Beghdadi</strong>
          <span>Autrice & directrice éditoriale de Zaouia</span>
        </div>

        <div className="article-share">
          <span>Ce Cahier mérite d’être prolongé ?</span>
          <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer" className="linkedin-share-button" aria-label={`Partager le numéro ${item.numero} de Zaouia sur LinkedIn`}>
            Partager ce Cahier sur LinkedIn ↗
          </a>
        </div>

        <nav className="issue-navigation" aria-label="Navigation entre les numéros">
          <div>{previous && <Link href={`/numeros/${previous.slug}`}>← N°{previous.numero} · {previous.title}</Link>}</div>
          <Link href="/#numeros" className="all-issues-link">Tous les Cahiers</Link>
          <div className="next-issue">{next && <Link href={`/numeros/${next.slug}`}>N°{next.numero} · {next.title} →</Link>}</div>
        </nav>
      </section>
    </main>
  );
}
