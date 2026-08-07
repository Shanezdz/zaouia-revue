import Image from "next/image";
import Link from "next/link";
import type { Numero } from "@/data/numeros";

export default function IssueCard({ item }: { item: Numero }) {
  return (
    <article className="issue-card">
      <div className="issue-meta issue-meta-above">N°{item.numero} · {item.theme}</div>
      <Link href={`/numeros/${item.slug}`} className="issue-image-wrap">
        <Image src={item.image} alt={`Zaouia numéro ${item.numero}`} width={900} height={1200} className="issue-image" />
      </Link>
      <h3><Link href={`/numeros/${item.slug}`}>{item.title}</Link></h3>
      <p>{item.subtitle}</p>
    </article>
  );
}
