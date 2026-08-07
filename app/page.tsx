import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { numeros } from "@/data/numeros";

export default function Home() {
  const founding = numeros.find((item) => item.numero === 1)!;
  const latest = numeros.reduce((current, item) => item.numero > current.numero ? item : current);
  const otherIssues = [...numeros]
    .filter((item) => item.numero !== 1 && item.numero !== latest.numero)
    .sort((a, b) => a.numero - b.numero);

  return (
    <main>
      <Header />

      <section className="editorial-hero">
        <div className="eyebrow">Architectures de l’impact</div>
        <h1>Regarder depuis l’angle.</h1>
        <p>Éclairer les transformations qui s’esquissent, interroger le hors champ et ce que nous choisissons de léguer aux générations futures.</p>
        <div className="hero-themes">Idées · Territoires · Vivant · Générations futures</div>
      </section>

      <section className="founding-issue">
        <div className="founding-copy">
          <div className="section-kicker">N°1 · Le texte fondateur</div>
          <h2>{founding.title}</h2>
          <p className="founding-subtitle">{founding.subtitle}</p>
          <p className="founding-note">Une invitation à déplacer le regard, à considérer le hors champ et à interroger ce que nos cadres habituels rendent invisible.</p>
          <Link className="text-link" href={`/numeros/${founding.slug}`}>Lire le N°1 →</Link>
        </div>
        <Link href={`/numeros/${founding.slug}`} className="founding-cover" aria-label="Lire Éloge de l’angle">
          <Image src={founding.image} alt="Couverture Zaouia N°1 — Éloge de l’angle" width={1000} height={1300} />
        </Link>
      </section>

      <section className="current-issue">
        <div className="current-cover">
          <Image src={latest.image} alt={`Couverture Zaouia numéro ${latest.numero}`} width={1000} height={1300} />
        </div>
        <div className="current-copy">
          <div className="section-kicker">À la une · N°{latest.numero}</div>
          <h2>{latest.title}</h2>
          <p>{latest.subtitle}</p>
          <Link className="text-link" href={`/numeros/${latest.slug}`}>Lire le dernier Cahier →</Link>
        </div>
      </section>

      <section id="numeros" className="quiet-archive">
        <div className="archive-heading">
          <div className="section-kicker">La collection</div>
          <h2>Les autres Cahiers</h2>
          <p>Des textes pour regarder autrement les politiques publiques, les territoires, le vivant et les futurs possibles.</p>
        </div>
        <div className="archive-list">
          {otherIssues.map((item) => (
            <Link href={`/numeros/${item.slug}`} className="archive-row" key={item.numero}>
              <span className="archive-number">N°{item.numero}</span>
              <span className="archive-title">{item.title}</span>
              <span className="archive-theme">{item.theme}</span>
              <span className="archive-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-signals">
        <div>
          <div className="section-kicker">Veille prospective</div>
          <h2>Les Signaux</h2>
        </div>
        <div className="home-signal-list">
          <Link href="/signaux"><span>Signal 001 · Territoires</span>Quand la chaleur commence à modifier les horaires de la ville.</Link>
          <Link href="/signaux"><span>Signal 002 · État</span>Quand un nouveau vocabulaire précède une nouvelle politique publique.</Link>
          <Link href="/signaux"><span>Signal 003 · Impact</span>Quand l’entretien devient plus stratégique que l’inauguration.</Link>
        </div>
        <Link className="text-link" href="/signaux">Lire les Signaux →</Link>
      </section>

      <section id="a-propos" className="home-manifesto">
        <div className="section-kicker">À propos</div>
        <p>Zaouia observe ce qui se transforme, mais aussi ce qui demeure hors champ : les zones d’ombre, les dynamiques invisibles et les signaux qui précèdent parfois les basculements visibles.</p>
        <Link className="text-link" href="/manifeste">Lire le manifeste →</Link>
      </section>

      <footer>
        <div>ZAOUIA</div>
        <div>Architectures de l’impact</div>
      </footer>
    </main>
  );
}
