import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaouia — Architectures de l’impact",
  description: "Une revue pour penser les transformations avant qu’elles ne deviennent évidentes.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
