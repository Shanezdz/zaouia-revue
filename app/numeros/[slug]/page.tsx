import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Numero1Article from "@/components/Numero1Article";
import { numeros } from "@/data/numeros";

export function generateStaticParams() {
  return numeros.map((item) => ({ slug: item.slug }));
}

export default async function NumeroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = numeros.find((numero) => numero.slug === slug);

  if (!item) notFound();

  return (
    <main>
      <Header />
      <section className="article-hero">
        <div className="article-cover">
          <Image src={item.image} alt={`Couverture Zaouia numéro ${item.numero}`} width={1000} height={1300} className="latest-image" />
        </div>
        <div className="article-intro">
          <div className="section-kicker">Zaouia — N°{item.numero}</div>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
          <div className="article-theme">{item.theme}</div>
          <Link href="/#numeros" className="text-link">← Retour aux numéros</Link>
        </div>
      </section>
      <section className="article-body">
        {item.numero === 1 ? (
          <Numero1Article />
        ) : (
          <p className="article-note">Le contenu intégral de ce numéro peut être ajouté ici progressivement. Cette page est déjà structurée pour accueillir le texte, les idées clés, les références, les ressources complémentaires et le lien vers la publication LinkedIn.</p>
        )}
      </section>
    </main>
  );
}
