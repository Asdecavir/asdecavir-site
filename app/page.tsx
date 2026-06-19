import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "./data";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Header />

      <section className="hero">
        <div className="container">
          <img
            src={siteConfig.images.logoLettering}
            alt="ÁsDeCáVir"
            className="hero-logo"
          />

          <p className="hero-subtitle">{siteConfig.slogan}</p>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container">
          <div className="section-title">
            <span className="line"></span>
            <h1>Sobre</h1>
            <img
              src={siteConfig.images.logoSmall}
              alt="Logótipo ÁsDeCáVir"
              className="small-logo"
            />
          </div>

          <div className="home-grid">
            <div>
              <p className="kicker">ÁsDeCáVir</p>

              <p className="quote">
                “{siteConfig.quote}”
              </p>

              <p className="text">{siteConfig.biography}</p>
            </div>

            <div>
              <img
                src={siteConfig.images.bandPhoto}
                alt="Foto da banda ÁsDeCáVir"
                className="band-photo"
              />
            </div>
          </div>

          <div className="video-card">
            <div className="section-title">
              <span className="line"></span>
              <h2>Vídeo</h2>
            </div>

            <div className="video-wrapper">
              <iframe
                src={siteConfig.youtubePromoEmbed}
                title="Vídeo promocional ÁsDeCáVir"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}