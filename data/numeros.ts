export type Numero = {
  numero: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  theme: string;
};

export const numeros: Numero[] = [
  {
    numero: 4,
    slug: "ombre-infrastructure",
    title: "L’ombre est une infrastructure",
    subtitle: "Ce que la ville protège lorsqu’elle choisit où le soleil s’arrête.",
    image: "/images/numero-4.png",
    theme: "Territoires · Vivant",
  },
  {
    numero: 3,
    slug: "transformations-qui-s-esquissent-3",
    title: "Éclairer les transformations qui s’esquissent",
    subtitle: "Une lecture des signaux émergents, des territoires et des futurs possibles.",
    image: "/images/numero-3.png",
    theme: "Idées · Prospective",
  },
  {
    numero: 2,
    slug: "transformations-qui-s-esquissent-2",
    title: "Éclairer les transformations qui s’esquissent",
    subtitle: "Les mots précèdent souvent les politiques.",
    image: "/images/numero-2.png",
    theme: "Politiques publiques · État",
  },
  {
    numero: 1,
    slug: "eloge-de-l-angle",
    title: "Éloge de l’angle",
    subtitle: "Et si la lucidité était, avant tout, une question d’angle ?",
    image: "/images/numero-1.png",
    theme: "Idées · Impact",
  },
];
