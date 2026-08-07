import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">ZAOUIA</Link>
      <nav>
        <Link href="/#numeros">Numéros</Link>
        <Link href="/#a-propos">À propos</Link>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </header>
  );
}
