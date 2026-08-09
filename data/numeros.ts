export type Numero = {
  numero: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  theme: string;
  keywords: string[];
};

export const numeros: Numero[] = [
  {
    numero: 8,
    slug: "une-institution-ressemble-a-ce-qu-elle-decide-de-ne-pas-voir",
    title: "Une institution ressemble toujours un peu à ce qu’elle décide de ne pas voir",
    subtitle: "Gouverner, c’est aussi faire entrer les absents dans la décision.",
    image: "/images/numero-8.png",
    theme: "Gouvernance · Responsabilité · Institutions",
    keywords: ["Gouvernance", "Responsabilité", "Institutions", "Parties prenantes", "Décision", "Territoires", "Algérie", "RSO", "Générations futures", "Vivant"],
  },
  {
    numero: 7,
    slug: "ce-que-la-vitesse-nous-empeche-de-voir",
    title: "Ce que la vitesse nous empêche de voir",
    subtitle: "Ralentir n’est peut-être pas aller moins vite. C’est retrouver la capacité de regarder.",
    image: "/images/numero-7.png",
    theme: "Temps · Attention · Territoires",
    keywords: ["Temps", "Attention", "Lenteur", "Observation", "Territoires", "Gouvernance", "Vivant", "Transmission", "Générations futures", "Responsabilité"],
  },
  {
    numero: 6,
    slug: "monde-concu-pour-l-abondance",
    title: "Nous avons hérité d’un monde conçu pour l’abondance",
    subtitle: "Et si la question n’était plus de produire davantage, mais d’apprendre à habiter les limites ?",
    image: "/images/numero-6.png",
    theme: "Idées · Limites · Ressources",
    keywords: ["Idées", "Limites", "Ressources", "Gouvernance", "Sobriété", "Résilience", "Algérie", "Territoires", "Vivant", "Générations futures", "Responsabilité"],
  },
  {
    numero: 5,
    slug: "ce-que-nous-ne-comptons-pas",
    title: "Ce que nous ne comptons pas n’existe pas",
    subtitle: "De la mesure des choses à la mesure de ce qui compte",
    image: "/images/numero-5.png",
    theme: "Politiques publiques · Mesure",
    keywords: ["Idées", "Mesure", "Indicateurs", "Politiques publiques", "Gouvernance", "PIB", "Territoires", "Algérie", "Vivant", "Générations futures", "Responsabilité"],
  },
  {
    numero: 4,
    slug: "ombre-infrastructure",
    title: "L’ombre est une infrastructure",
    subtitle: "Ce que la ville protège lorsqu’elle choisit où le soleil s’arrête.",
    image: "/images/numero-4.png",
    theme: "Territoires · Vivant",
    keywords: ["Ville", "Ombre", "Chaleur", "Adaptation climatique", "Vivant", "Générations futures", "Responsabilité"],
  },
  {
    numero: 3,
    slug: "transformations-qui-s-esquissent-3",
    title: "Ce qui change avant que nous le voyions",
    subtitle: "Lire les signaux faibles d’un monde qui ne se transforme pas à la même vitesse partout.",
    image: "/images/numero-3.png",
    theme: "Prospective · Signaux faibles",
    keywords: ["Idées", "Prospective", "Signaux faibles", "Ruptures", "Transformations", "Futurs", "Générations futures", "Responsabilité"],
  },
  {
    numero: 2,
    slug: "transformations-qui-s-esquissent-2",
    title: "Les mots précèdent souvent les politiques.",
    subtitle: "Une onomastique de l’État pour penser autrement les missions publiques.",
    image: "/images/numero-2.png",
    theme: "Politiques publiques · État",
    keywords: ["Idées", "État", "Politiques publiques", "Onomastique", "Souveraineté", "Transformation publique", "Algérie", "Générations futures", "Responsabilité"],
  },
  {
    numero: 1,
    slug: "eloge-de-l-angle",
    title: "Éloge de l’angle",
    subtitle: "Et si la lucidité était, avant tout, une question d’angle ?",
    image: "/images/numero-1.png",
    theme: "Idées · Impact",
    keywords: ["Idées", "Angle", "Hors champ", "Regard", "Impact", "Complexité", "Générations futures", "Responsabilité"],
  },
];
