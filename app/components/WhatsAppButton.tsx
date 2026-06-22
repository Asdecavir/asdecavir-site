import { siteConfig } from "../data";

export default function WhatsAppButton() {
  return (
    <a
     href={siteConfig.whatsapp}
     className="whatsapp-floating-button"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Contactar ÁsDeCáVir por WhatsApp"
     >
        <span className="whatsapp-icon">💬</span>
        <span className="whatsapp-text">WhatsApp</span>
    </a>
  );
}
