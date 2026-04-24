import React from "react";
import "./styles/Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="labs-footer">
      <div className="labs-footer-inner">
        <div className="footer-left">
          <span className="copyright">
            © {currentYear} <a href="https://tortoisecommunity.org" className="brand-link">Tortoise Community</a>
          </span>
          <span className="separator">|</span>
          <span className="entity">All rights reserved.</span>
        </div>

        <div className="footer-right">
          <div className="status-indicator">
            <span className="status-dot"></span>
            System Operational
          </div>
          <span className="separator">|</span>
          <a href="https://github.com/Ryuga/Hermes" target="_blank" rel="noreferrer" className="engine-link">
            Powered by <span className="engine-name">Hermes Engine</span>
          </a>
        </div>
      </div>
    </footer>
  );
}