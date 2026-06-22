import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "../data";

export default function PressKitPage() {
  return (
    <main className="site-shell">
      <Header />

      <section className="section cobra-page-section">
        <div className="container">
          <div className="section-title">
            <span className="line"></span>
            <h1>Cobra Tour 2026</h1>
          </div>

          <div className="cobra-poster-area">
            <div className="cobra-board">
              <img
                src="/images/logo-cobra.png"
                alt=""
                className="cobra-board-watermark"
              />

              <div className="cobra-board-content">
                <p className="cobra-board-kicker">Agenda ao vivo</p>
                <h2>Cobra Tour 2026</h2>

                <div className="cobra-dates-list">
  {siteConfig.concerts.map((concert) => (
    <div
      key={`${concert.date}-${concert.venue}-${concert.city}`}
      className={`cobra-date-row ${
        concert.completed ? "completed" : ""
      }`}
    >
      <div className="cobra-date">
        {concert.date}
      </div>

      <div className="cobra-venue">
        {concert.venue}
      </div>

      <div className="cobra-city">
        {concert.city}
      </div>
    </div>
  ))}
</div>
              </div>
            </div>

            <div className="cobra-band-image-wrap">
              <img
                src="/images/banda-datas.png"
                alt="Banda ÁsDeCáVir"
                className="cobra-band-image"
              />
            </div>
          </div>

          <div className="presskit-section">
            <div className="section-title">
              <span className="line"></span>
              <h2>Press Kit</h2>
            </div>

            <div className="press-grid">
              <div>
                <h3>Sobre a Banda</h3>
                <p className="text">{siteConfig.biography}</p>
              </div>

              <div>
                <h3>Downloads</h3>

                <div className="download-list">
                  {siteConfig.presskitFiles.map((item) => (
                    <a className="button" href={item.file} key={item.title}>
                      Download {item.title}
                    </a>
                  ))}
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