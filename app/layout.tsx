import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaouia — Architectures de l’impact",
  description: "Une revue pour penser les transformations avant qu’elles ne deviennent évidentes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
