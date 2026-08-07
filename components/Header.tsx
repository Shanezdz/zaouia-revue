import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand brand-with-logo" href="/" aria-label="Zaouia – Accueil">
        <Image src="/images/logo.png" alt="Logo Zaouia" width={48} height={48} className="header-logo" priority />
        <span>ZAOUIA</span>
      </Link>
      <nav>
        <Link href="/#numeros">Cahiers</Link>
        <Link href="/signaux">Signaux</Link>
        <Link href="/manifeste">Manifeste</Link>
        <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7490452004490711040" target="_blank" rel="noopener noreferrer">S’abonner</a>
      </nav>
    </header>
  );
}
