import React from "react";
import "./styles/Footer.scss";
import { Link } from "react-router-dom";

const sponsorsList = [
  {
    name: "ASCS",
    logo: "https://lairesit.sirv.com/Tortoise/sponsors/ascs-light.webp",
    link: "https://cloud.ascsonoway.com/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column sponsors-col">
            <h3 className="column-header">Sponsors</h3>
            <div className="sponsors-list">
              {sponsorsList.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-link"
                >
                  <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column menu-col">
            <h3 className="column-header">Menu</h3>
            <ul className="menu-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/rules">Rules</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="container">
          <a href="#" className="back-to-top" aria-label="Back to top">
            <i className="fas fa-angle-up" />
          </a>
          <div className="copyright-info">
            <div className="footer-left">
              <span className="copyright">
                © {currentYear} <a href="https://tortoisecommunity.org" className="brand-link">Tortoise Community</a>
              </span>
              <span className="separator" aria-hidden="true">|</span>
              <span className="entity">An open-source initiative.</span>
            </div>

            <small className="disclaimer-text">
              The ASCS trademark and logo are the exclusive property of
              ascsonoway.com
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
