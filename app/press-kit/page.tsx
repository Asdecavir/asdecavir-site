import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "../data";

export default function PressKitPage() {
  return (
    <main className="site-shell">
      <Header />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="line"></span>
            <h1>Press Kit</h1>
            <img
              src={siteConfig.images.logoSmall}
              alt="Logótipo ÁsDeCáVir"
              className="small-logo"
            />
          </div>

          <div className="cards-grid">
            {siteConfig.concerts.map((concert) => (
              <article className="event-card" key={`${concert.date}-${concert.venue}`}>
                <div className="event-date">{concert.date}</div>
                <div className="event-venue">{concert.venue}</div>
                <div className="event-city">{concert.city}</div>

                <a className="button" href={concert.ticketLink}>
                  Ver Detalhes
                </a>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <div className="press-grid">
              <div>
                <h2>Biografia</h2>
                <p className="text">{siteConfig.biography}</p>

                <div className="download-list" style={{ marginTop: 28 }}>
                  {siteConfig.presskitFiles.map((item) => (
                    <a className="button" href={item.file} download key={item.title}>
                      Baixar {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2>Música</h2>

                <div className="video-wrapper" style={{ marginTop: 20 }}>
                  <iframe
                    src={siteConfig.youtubePromoEmbed}
                    title="Música ÁsDeCáVir"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}