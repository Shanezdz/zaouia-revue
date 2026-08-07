import Header from "@/components/Header";

const signaux = [
  { id: "001", theme: "Territoires", title: "Quand la chaleur commence à modifier les horaires de la ville.", text: "Un changement d’horaire peut sembler anecdotique. Répété dans plusieurs lieux, il peut signaler une adaptation plus profonde des rythmes urbains à la chaleur. Le temps devient alors lui aussi une infrastructure climatique." },
  { id: "002", theme: "État", title: "Quand un nouveau vocabulaire précède une nouvelle politique publique.", text: "Résilience, souveraineté, vivant, transformation : certains mots apparaissent avant que les organigrammes et les budgets ne changent. Leur circulation peut révéler le déplacement progressif des catégories à travers lesquelles l’action publique pense ses missions." },
  { id: "003", theme: "Impact", title: "Quand l’entretien devient plus stratégique que l’inauguration.", text: "Dans de nombreux systèmes, la visibilité politique demeure attachée au neuf. Pourtant, face aux contraintes climatiques, budgétaires et matérielles, maintenir, réparer et prolonger la durée de vie pourraient devenir des indicateurs plus décisifs de performance collective." },
  { id: "004", theme: "Responsabilité", title: "Quand décider signifie aussi répondre de ce qui restera.", text: "La responsabilité ne se limite plus à corriger les effets immédiats d’une décision. Elle consiste de plus en plus à anticiper ses conséquences différées, ses coûts déplacés et les vulnérabilités qu’elle peut transmettre. Gouverner, entreprendre ou aménager revient alors aussi à répondre de l’après." },
  { id: "005", theme: "Générations futures", title: "Quand le véritable bilan d’une décision se mesure à ce qu’elle laisse derrière elle.", text: "Une infrastructure, une dette, un sol dégradé, une institution robuste ou un patrimoine préservé ont un point commun : ils traversent le temps. Penser le legs oblige à déplacer l’évaluation du présent vers ce que les générations suivantes recevront, devront réparer ou pourront prolonger." },
  { id: "006", theme: "Hors champ", title: "Quand ce qui n’est pas mesuré finit par structurer la réalité.", text: "Temps d’attente, fatigue, qualité de l’ombre, confiance, entretien, usages informels : nombre de dimensions décisives demeurent souvent hors des indicateurs. Leur invisibilité statistique ne les rend pas secondaires. Elle peut au contraire révéler les angles morts à partir desquels une transformation devient perceptible." },
  { id: "007", theme: "Ombre", title: "Quand l’absence devient une infrastructure.", text: "L’ombre n’est pas seulement ce qui manque à la lumière. Dans les villes exposées à la chaleur, elle devient une condition de mobilité, de repos, d’usage de l’espace public et parfois d’égalité territoriale. Ce qui semblait résiduel peut ainsi devenir un indicateur central d’habitabilité." },
  { id: "008", theme: "Vivant", title: "Quand protéger le vivant cesse d’être un sujet sectoriel.", text: "L’eau, les sols, les arbres, les paysages, la biodiversité et la santé ne fonctionnent pas comme des politiques séparées. Leur interdépendance fait apparaître une autre lecture de l’action publique : le vivant n’est plus seulement un domaine à protéger, mais une condition transversale de résilience et de continuité territoriale." },
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
