import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/ExternalRedirect.scss";

export default function ExternalRedirect({ url }) {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    
    if (counter === 0) {
      window.location.replace(url);
    }
    
    return () => clearInterval(timer);
  }, [counter, url]);

  return (
    <div className="redirect-page">
      
      <main className="redirect-container">
        <div className="redirect-card">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          
          <h2 className="mb-3">Leaving Tortoise Community</h2>
          <p className="text-muted">
            You are being redirected to an external website:
          </p>
          <div className="url-box">
            <code>{url}</code>
          </div>
          
          <div className="status-area mt-4">
            <p>Redirecting in <strong>{counter}s</strong>...</p>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${(3 - counter) * 33.3}%` }}></div>
            </div>
          </div>

          <p className="manual-link mt-4">
            If you aren't redirected, <a href={url}>click here</a>.
          </p>
        </div>
      </main>

    </div>
  );
}