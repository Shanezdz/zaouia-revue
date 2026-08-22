import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Numero1Article from "@/components/Numero1Article";
import Numero2Article from "@/components/Numero2Article";
import Numero4Article from "@/components/Numero3Article";
import Numero5Article from "@/components/Numero4Article";
import Numero6Article from "@/components/Numero5Article";
import Numero7Article from "@/components/Numero6Article";
import Numero8Article from "@/components/Numero7Article";
import Numero9Article from "@/components/Numero8Article";
import Numero10Article from "@/components/Numero9Article";
import Numero11Article from "@/components/Numero11Article";
import Numero12Article from "@/components/Numero12Article";
import Numero13Article from "@/components/Numero13Article";
import Numero14Article from "@/components/Numero14Article";
import Numero15Article from "@/components/Numero15Article";
import Numero16Article from "@/components/Numero16Article";
import Numero17Article from "@/components/Numero17Article";
import Numero18Article from "@/components/Numero18Article";
import Numero19Article from "@/components/Numero19Article";
import { numeros } from "@/data/numeros";

const siteUrl = "https://zaouia-revue-pyvl.vercel.app";
const readingTimes: Record<number, number> = { 1: 7, 2: 11, 4: 12, 5: 12, 6: 10, 7: 13, 8: 12, 9: 12, 10: 7, 11: 16, 12: 15, 13: 17, 14: 17, 15: 14, 16: 17, 17: 16, 18: 14, 19: 15 };

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
    keywords: item.keywords,
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
          <img
            src={item.image}
            alt={`Couverture Zaouia numéro ${item.numero}`}
            width={item.imageWidth ?? 1000}
            height={item.imageHeight ?? 1300}
            className="latest-image"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="article-intro">
          <div className="section-kicker">Zaouia — N°{item.numero}</div>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
          <div className="article-theme">{item.theme}</div>
          <div className="reading-time">Temps de lecture · {readingTimes[item.numero] ?? 10} min</div>
          <div style={{ marginTop: 18 }}>
            <div className="section-kicker" style={{ marginBottom: 9 }}>Mots clés</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px 12px", color: "#6c746f", fontSize: ".88rem", lineHeight: 1.5 }}>
              {item.keywords.map((keyword, i) => <span key={keyword}>{keyword}{i < item.keywords.length - 1 ? " ·" : ""}</span>)}
            </div>
          </div>
          <Link href="/#numeros" className="text-link">← Retour aux numéros</Link>
        </div>
      </section>

      <section className="article-body">
        {item.numero === 1 ? <Numero1Article /> : item.numero === 2 ? <Numero2Article /> : item.numero === 4 ? <Numero4Article /> : item.numero === 5 ? <Numero5Article /> : item.numero === 6 ? <Numero6Article /> : item.numero === 7 ? <Numero7Article /> : item.numero === 8 ? <Numero8Article /> : item.numero === 9 ? <Numero9Article /> : item.numero === 10 ? <Numero10Article /> : item.numero === 11 ? <Numero11Article /> : item.numero === 12 ? <Numero12Article /> : item.numero === 13 ? <Numero13Article /> : item.numero === 14 ? <Numero14Article /> : item.numero === 15 ? <Numero15Article /> : item.numero === 16 ? <Numero16Article /> : item.numero === 17 ? <Numero17Article /> : item.numero === 18 ? <Numero18Article /> : item.numero === 19 ? <Numero19Article /> : null}

        <div className="author-signature">
          <div className="section-kicker">Autrice</div>
          <strong>Shanez Kechroud Beghdadi</strong>
          <span>Autrice & directrice éditoriale de Zaouia</span>
        </div>

        <div style={{ maxWidth: 820, margin: "34px auto 0", padding: "28px 0 34px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", borderBottom: "1px solid rgba(23,63,50,.16)" }}>
          <div><div className="section-kicker" style={{ marginBottom: 8 }}>Partager</div><div style={{ color: "#6c746f", fontSize: ".95rem" }}>Prolonger la réflexion auprès de votre réseau.</div></div>
          <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer" aria-label={`Partager le numéro ${item.numero} de Zaouia sur LinkedIn`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 46, padding: "12px 20px", border: "1px solid #173f32", borderRadius: 999, color: "#173f32", fontSize: ".88rem", fontWeight: 600, letterSpacing: ".02em", whiteSpace: "nowrap" }}>Partager sur LinkedIn ↗</a>
        </div>

        <nav className="issue-navigation" aria-label="Navigation entre les numéros">
          <div>{previous && <Link href={`/numeros/${previous.slug}`}>← N°{previous.numero} · {previous.title}</Link>}</div>
          <Link href="/#numeros" className="all-issues-link">Tous les Numéros</Link>
          <div className="next-issue">{next && <Link href={`/numeros/${next.slug}`}>N°{next.numero} · {next.title} →</Link>}</div>
        </nav>
      </section>
    </main>
  );
}
