import Link from "next/link";
import type { Numero } from "@/data/numeros";

export default function IssueCard({ item }: { item: Numero }) {
  const imageSrc = item.numero === 13 ? "/images/numero-13-fallback.svg" : item.image;

  return (
    <article className="issue-card">
      <div className="issue-meta issue-meta-above">N°{item.numero} · {item.theme}</div>
      <Link href={`/numeros/${item.slug}`} className="issue-image-wrap">
        <img
          src={imageSrc}
          alt={`Zaouia numéro ${item.numero}`}
          width={item.imageWidth ?? 900}
          height={item.imageHeight ?? 1200}
          className="issue-image"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <h3><Link href={`/numeros/${item.slug}`}>{item.title}</Link></h3>
      <p>{item.subtitle}</p>
    </article>
  );
}
