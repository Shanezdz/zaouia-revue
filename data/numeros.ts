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
    title: "Ce qui change avant que nous le voyions",
    subtitle: "Lire les signaux faibles d’un monde qui ne se transforme pas à la même vitesse partout.",
    image: "/images/numero-3.png",
    theme: "Prospective · Signaux faibles",
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
