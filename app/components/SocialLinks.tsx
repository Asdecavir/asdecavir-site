import { siteConfig } from "../data";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4h-4V9c0-.7.3-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.2c-.4.1-1.3.1-2 .9-.6.6-.8 2.1-.8 2.1S2 9 2 10.8v1.7c0 1.8.4 3.6.4 3.6s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.2 6.6.2 6.6.2s4 0 6.8-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.4-1.8.4-3.6v-1.7c0-1.8-.4-3.6-.4-3.6zM10 15.2V8.8l5.8 3.2L10 15.2z" />
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociais">
      <a
        href={siteConfig.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Facebook"
      >
        <FacebookIcon />
      </a>

      <a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>

      <a
        href={siteConfig.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="YouTube"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
}