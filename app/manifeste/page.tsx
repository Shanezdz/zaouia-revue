import Header from "@/components/Header";

export default function ManifestePage() {
  return (
    <main>
      <Header />
      <section className="manifesto-page">
        <div className="section-kicker">Manifeste</div>
        <h1>Regarder depuis l’angle.</h1>
        <p className="manifesto-lead">Zaouia est une revue d’idées et de prospective qui observe ce qui se transforme, mais aussi ce qui demeure hors champ.</p>
        <div className="manifesto-copy">
          <p>Une zaouia est un angle, un lieu depuis lequel le regard change. La revue part de cette intuition simple : les transformations importantes ne se donnent pas toujours à voir au centre du cadre. Elles apparaissent parfois dans une marge, un mot nouveau, une pratique discrète, une tension locale, une zone d’ombre ou un signal encore trop faible pour entrer dans les catégories établies.</p>
          <p>Zaouia explore les politiques publiques, les territoires, le vivant, l’impact et les futurs possibles en cherchant les relations entre des phénomènes que les organisations et les disciplines ont souvent appris à séparer.</p>
          <blockquote>Observer le visible, sans perdre de vue ce que le cadre laisse dehors.</blockquote>
          <p>Sa méthode repose sur quatre gestes : observer les transformations discrètes, relier des phénomènes apparemment éloignés, qualifier ce qui relève d’une tendance, d’un signal faible ou d’une rupture, puis mettre ces mouvements en perspective.</p>
          <p>Zaouia ne prétend pas prédire l’avenir. Elle cherche plutôt à éclairer ce qui commence à bouger avant de devenir évident, et à faire du hors champ un espace de questionnement.</p>
          <p className="manifesto-author"><strong>Shanez Kechroud Beghdadi</strong><br />Autrice & directrice éditoriale de Zaouia</p>
        </div>
      </section>
    </main>
  );
}
