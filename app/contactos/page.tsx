import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import { siteConfig } from "../data";

export default function ContactosPage() {
  return (
    <main className="site-shell">
      <Header />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="line"></span>
            <h1>Contato</h1>
            <img
              src={siteConfig.images.logoSmall}
              alt="Logótipo ÁsDeCáVir"
              className="small-logo"
            />
          </div>

          <div className="contact-layout">
            <p className="quote">
              Queres levar os ÁsDeCáVir ao teu bar, festa ou evento?
            </p>

            <p className="text">
              Entra em contacto connosco para informações, datas disponíveis,
              condições técnicas e reservas.
            </p>

            <div className="contact-card" style={{ marginTop: 36 }}>
              <p className="kicker">Email</p>

              <a href={`mailto:${siteConfig.email}`} className="contact-email">
                {siteConfig.email}
              </a>
            </div>

            <div style={{ marginTop: 34 }}>
              <p className="kicker">Redes Sociais</p>

              <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}