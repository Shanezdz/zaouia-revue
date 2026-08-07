import Header from "@/components/Header";

const signaux = [
  { id: "001", theme: "Territoires", title: "Quand la chaleur commence à modifier les horaires de la ville.", text: "Un changement d’horaire peut sembler anecdotique. Répété dans plusieurs lieux, il peut signaler une adaptation plus profonde des rythmes urbains à la chaleur. Le temps devient alors lui aussi une infrastructure climatique." },
  { id: "002", theme: "État", title: "Quand un nouveau vocabulaire précède une nouvelle politique publique.", text: "Résilience, souveraineté, vivant, transformation : certains mots apparaissent avant que les organigrammes et les budgets ne changent. Leur circulation peut révéler le déplacement progressif des catégories à travers lesquelles l’action publique pense ses missions." },
  { id: "003", theme: "Impact", title: "Quand l’entretien devient plus stratégique que l’inauguration.", text: "Dans de nombreux systèmes, la visibilité politique demeure attachée au neuf. Pourtant, face aux contraintes climatiques, budgétaires et matérielles, maintenir, réparer et prolonger la durée de vie pourraient devenir des indicateurs plus décisifs de performance collective." },
];

export default function SignauxPage() {
  return (
    <main>
      <Header />
      <section className="signals-page">
        <div className="section-kicker">Veille prospective</div>
        <h1>Les Signaux</h1>
        <p className="signals-intro">Des observations courtes sur les transformations discrètes, les anomalies fécondes et les mouvements encore situés à la périphérie du regard.</p>
        <div className="signals-grid">
          {signaux.map((signal) => (
            <article className="signal-card" key={signal.id}>
              <div className="signal-meta">Signal {signal.id} · {signal.theme}</div>
              <h2>{signal.title}</h2>
              <p>{signal.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
