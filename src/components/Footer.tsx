import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/css/footer.css';

interface FooterProps {
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  quickLinks: { label: string; url: string }[];
  services: { label: string; url: string }[];
  technologies: { label: string; url: string }[];
  logoSrc: string;
  companyName: string;
  themeColors?: {
    background: string;
    text: string;
    accent: string;
    linkHover: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  address,
  socialLinks,
  quickLinks,
  services,
  technologies,
  logoSrc,
  companyName,
  themeColors = {
    background: '#1f1f1f',
    text: '#ffffff',
    accent: '#ffdd57',
    linkHover: '#ffa726',
  },
}) => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: themeColors.background, color: themeColors.text }}
    >
      <div className="footer-grid">
        {/* Left Section */}
        <div className="footer-section">
          <img src={logoSrc} alt="Company Logo" className="footer-logo" />
          <p>{address}</p>
          <div className="footer-social">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 style={{ color: themeColors.accent }}>Quick Links</h4>
          {quickLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="footer-link"
              style={{ color: themeColors.text }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 style={{ color: themeColors.accent }}>Services</h4>
          {services.map((service) => (
            <a
              key={service.url}
              href={service.url}
              className="footer-link"
              style={{ color: themeColors.text }}
            >
              {service.label}
            </a>
          ))}
        </div>

        {/* Technologies */}
        <div className="footer-section">
          <h4 style={{ color: themeColors.accent }}>Technologies</h4>
          {technologies.map((tech) => (
            <a
              key={tech.url}
              href={tech.url}
              className="footer-link"
              style={{ color: themeColors.text }}
            >
              {tech.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
