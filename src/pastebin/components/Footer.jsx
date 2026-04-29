import React, { useEffect, useState } from "react";
import "./styles/Footer.scss";

export default function Footer() {
  const STATUS = {
    UP: "System Operational",
    DOWN: "Service Down",
    CHECKING: "Checking...",
  };
  const currentYear = new Date().getFullYear();
  const EXEC_API = import.meta.env.VITE_EXECUTE_API.replace(/execute\/?$/, "");
  const [status, setStatus] = useState(STATUS.CHECKING);


  async function checkAPIStatus() {
    try {
      const res = await fetch(EXEC_API, { method: "GET" });

      if (!res.ok) {
        setStatus(STATUS.DOWN);
      } else {
        setStatus(STATUS.UP);
      }
    } catch (err) {
      setStatus(STATUS.DOWN);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      checkAPIStatus();
    }, 6000); 

    return () => clearTimeout(timer);
  }, []);

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
            <span className={`status-dot ${status === STATUS.UP ? "up" : status === STATUS.DOWN ? "down" : "processing"}`}></span>
            {status}
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