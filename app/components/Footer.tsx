import { siteConfig } from "../data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src={siteConfig.images.logoSmall}
          alt="Logótipo ÁsDeCáVir"
          className="footer-logo"
        />

        <p>Siga-nos</p>

        <div style={{ display: "flex", justifyContent: "center", margin: "14px 0 24px" }}>
          <SocialLinks />
        </div>

        <p>
          © {new Date().getFullYear()} ÁsDeCáVir. Orgulhosamente criado para Rock Português.
        </p>
      </div>
    </footer>
  );
}