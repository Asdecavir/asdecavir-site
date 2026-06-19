import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="mobile-logo">
          ÁsDeCáVir
        </Link>

        <nav className="nav" aria-label="Menu principal">
          <Link href="/">Página Inicial</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/press-kit">Press Kit</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/contactos">Contato</Link>
        </nav>

        <SocialLinks />
      </div>
    </header>
  );
}