import Header from "@/components/Header";

export default function CarnetsPage() {
  return (
    <main>
      <Header />
      <section className="signals-page">
        <div className="section-kicker">Carnets Zaouia</div>
        <h1>Carnets Zaouia</h1>
        <p className="signals-intro">
          Des articles, chroniques et fragments pour prolonger la réflexion de Zaouia.
          Patrimoine, mémoire, spiritualité, cité, territoires et transformations du présent
          s’y rencontrent dans un format plus libre que les Numéros.
        </p>

        <div className="signals-grid" aria-label="Carnets Zaouia">
          <article
            className="signal-card"
            style={{ gridColumn: "1 / -1", minHeight: "auto" }}
          >
            <div className="signal-meta">Collection en construction</div>
            <h2>Les Carnets prennent place ici.</h2>
            <p>
              Cette rubrique rassemblera progressivement les textes déjà publiés par Zaouia,
              accompagnés de leurs visuels, de leur date de publication, de leurs thèmes
              et, lorsque pertinent, d’un lien vers leur publication d’origine sur LinkedIn.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
