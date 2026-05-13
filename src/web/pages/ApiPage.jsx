import React from "react";
import "./styles/ApiPage.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ApiHero = () => (
  <div className="api-hero-wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-start mb-5 mb-lg-0">
          <div className="api-badge">
            <span className="dot-pulse"></span> SERVICE ONLINE
          </div>
          <h1 className="api-headline">
            The Infrastructure for <span>Developers.</span>
          </h1>
          <p className="api-description">
            Access industrial-grade sandboxed code execution engine via our
            high-performance REST gateway.
          </p>
          <div className="api-cta-group">
            <a className="btn btn-studio-gold">Get API Key</a>
            <a className="btn btn-studio-outline">View Docs</a>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="api-console">
            <div className="console-header">
              <div className="controls">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="file-name">main.js</div>
            </div>
            <div className="console-body">
              <pre>
                <code>
                  <span className="token-k">const</span> tortoise ={" "}
                  <span className="token-f">require</span>(
                  <span className="token-s">'@tortoise/sdk'</span>);
                  <br />
                  <br />
                  <span className="token-k">const</span> client = tortoise.
                  <span className="token-f">init</span>({"{"}
                  <br />
                  &nbsp;&nbsp;apiKey:{" "}
                  <span className="token-s">'TRT_API_KEY'</span>
                  <br />
                  {"}"});
                  <br />
                  <br />
                  <span className="token-c">// Execute code</span>
                  <br />
                  client.<span className="token-f">on</span>(
                  <span className="token-s">'code_execution'</span>, (data) =
                  {">"} {"{"}
                  <br />
                  &nbsp;&nbsp;console.<span className="token-f">log</span>
                  (data.result);
                  <br />
                  {"}"});
                </code>
              </pre>
              <div className="console-status">
                <i className="fa-solid fa-check-double"></i> GATEWAY_CONNECTED:
                ASCS-EAST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function ApiPage() {
  return (
    <div className="api-platform-root">
      <Header>
        <ApiHero />
      </Header>
      <Footer />
    </div>
  );
}

export default ApiPage;
