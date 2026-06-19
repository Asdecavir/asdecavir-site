import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "../data";

export default function GaleriaPage() {
  return (
    <main className="site-shell">
      <Header />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="line"></span>
            <h1>Galeria</h1>
            <img
              src={siteConfig.images.logoSmall}
              alt="Logótipo ÁsDeCáVir"
              className="small-logo"
            />
          </div>

          <div className="section-title" style={{ marginBottom: 28 }}>
            <h2>Vídeos</h2>
          </div>

          <div className="video-grid">
            {siteConfig.videos.map((video) => (
              <div key={video.title}>
                <div className="video-wrapper">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="kicker" style={{ marginTop: 12 }}>
                  {video.title}
                </p>
              </div>
            ))}
          </div>

          <div className="section-title" style={{ marginTop: 80, marginBottom: 28 }}>
            <h2>Fotos</h2>
          </div>

          <div className="gallery-grid">
            {siteConfig.galleryPhotos.map((photo) => (
              <div className="gallery-item" key={photo}>
                <img src={photo} alt="Foto da galeria ÁsDeCáVir" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}