import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header" style={{ flexWrap: "wrap", rowGap: "10px" }}>
      <Link className="brand brand-with-logo" href="/" aria-label="Zaouia – Accueil">
        <Image src="/images/logo.png" alt="Logo Zaouia" width={48} height={48} className="header-logo" priority />
        <span>ZAOUIA</span>
      </Link>
      <nav style={{ flexWrap: "wrap" }}>
        <Link href="/#numeros">Numéros</Link>
        <Link href="/carnets">Carnets Zaouia</Link>
        <Link href="/signaux">Regards</Link>
        <Link href="/manifeste">Manifeste</Link>
        <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7490452004490711040" target="_blank" rel="noopener noreferrer">S’abonner</a>
      </nav>
    </header>
  );
}
