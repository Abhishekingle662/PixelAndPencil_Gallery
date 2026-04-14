import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faArtstation } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const SOCIAL_LINKS = [
  { icon: faGithub,    href: 'https://github.com/Abhishekingle662', label: 'GitHub' },
  { icon: faLinkedin,  href: 'https://linkedin.com',                label: 'LinkedIn' },
  { icon: faArtstation, href: 'https://artstation.com',             label: 'ArtStation' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__brand">Pixel &amp; Pencil Gallery</p>
        <nav className="footer__social" aria-label="Social links">
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="footer__social-link"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </nav>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Pixel &amp; Pencil Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
