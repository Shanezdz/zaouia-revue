import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">ZAOUIA</Link>
      <nav>
        <Link href="/#numeros">Numéros</Link>
        <Link href="/#a-propos">À propos</Link>
        <a
          href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7490452004490711040"
          target="_blank"
          rel="noopener noreferrer"
        >
          S’abonner sur LinkedIn
        </a>
      </nav>
    </header>
  );
}
