import Image from "next/image";
import Header from "@/components/Header";
import IssueCard from "@/components/IssueCard";
import { numeros } from "@/data/numeros";

export default function Home() {
  const latest = numeros.reduce((current, item) =>
    item.numero > current.numero ? item : current
  );
  const archiveNumeros = [...numeros].sort((a, b) => a.numero - b.numero);

  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Architectures de l’impact</div>
          <h1>Zaouia</h1>
          <p className="hero-lead">Éclairer les transformations qui s’esquissent.</p>
          <div className="hero-themes">Idées · Territoires · Vivant · Générations futures</div>
        </div>
        <div className="hero-art" aria-hidden="true"><span /></div>
      </section>

      <section className="latest">
        <div className="section-kicker">Dernière édition — N°{latest.numero}</div>
        <div className="latest-grid">
          <Image src={latest.image} alt={`Couverture Zaouia numéro ${latest.numero}`} width={1000} height={1300} className="latest-image" />
          <div className="latest-copy">
            <h2>{latest.title}</h2>
            <p>{latest.subtitle}</p>
            <a className="text-link" href={`/numeros/${latest.slug}`}>Lire le numéro →</a>
          </div>
        </div>
      </section>

      <section id="numeros" className="issues-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Archives éditoriales</div>
            <h2>Les Cahiers de Zaouia</h2>
          </div>
          <p>Une collection de textes pour regarder autrement les politiques publiques, les territoires, le vivant et les futurs possibles, tout en interrogeant le legs que nous choisissons de transmettre aux générations futures.</p>
        </div>
        <div className="issues-grid">
          {archiveNumeros.map((item) => <IssueCard key={item.numero} item={item} />)}
        </div>
      </section>

      <section id="a-propos" className="about-section">
        <div className="section-kicker">À propos</div>
        <h2>Une revue pour penser les transformations avant qu’elles ne deviennent évidentes.</h2>
        <p>Zaouia explore les idées, les territoires, les politiques publiques, les signaux faibles et les formes nouvelles de l’impact. Elle s’intéresse aussi à ce qui demeure hors champ, aux zones d’ombre, aux dynamiques invisibles et aux transformations discrètes qui précèdent souvent les basculements visibles. Le site prolonge la newsletter LinkedIn en constituant progressivement une archive éditoriale indépendante.</p>
        <p><strong>Zaouia est conçue et écrite par Shanez Kechroud Beghdadi, autrice et directrice éditoriale de la revue.</strong></p>
      </section>

      <footer>
        <div>ZAOUIA</div>
        <div>Architectures de l’impact</div>
      </footer>
    </main>
  );
}
