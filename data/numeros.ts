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
