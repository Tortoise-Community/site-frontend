import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./styles/FileViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function FileViewer() {
  const location = useLocation();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  let rawPath = window.location.pathname;

  if (rawPath.startsWith("/")) {
    rawPath = rawPath.substring(1);
  }

  if (window.location.search) {
    rawPath += window.location.search;
  }

  const decodedUrl = rawPath ? decodeURIComponent(rawPath) : null;

  const PROXY_URL = import.meta.env.VITE_CORS_ANYWHERE_ENDPOINT;
  ("https://tortoise-cors.onrender.com/");
  const fileUrl = decodedUrl ? `${PROXY_URL}${decodedUrl}` : null;

  console.log("Constructed Target PDF Destination via Proxy:", fileUrl);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => {
    setPageNumber((prev) => Math.min(Math.max(prev + offset, 1), numPages));
  };

  return (
    <div className="labs-pdf-page">
      <div className="viewer-inner">
        <div className="pb-card">
          <div className="pb-toolbar">
            <div className="toolbar-left">
              <div className="doc-badge">
                <i className="fa-solid fa-file-pdf fa-xl"></i>
                <span>Safe Document Viewer</span>
              </div>
            </div>

            {fileUrl && (
              <>
                <div className="toolbar-center">
                  <button
                    disabled={pageNumber <= 1}
                    onClick={() => changePage(-1)}
                  >
                    <i className="fas fa-chevron-left" /> Prev
                  </button>
                  <span>
                    Page {pageNumber} / {numPages || "--"}
                  </span>
                  <button
                    disabled={pageNumber >= numPages}
                    onClick={() => changePage(1)}
                  >
                    Next <i className="fas fa-chevron-right" />
                  </button>
                </div>

                <div className="toolbar-right">
                  <button
                    onClick={() => setScale((s) => Math.max(s - 0.15, 0.5))}
                    title="Zoom Out"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <span style={{ width: "45px", textAlign: "center" }}>
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => setScale((s) => Math.min(s + 0.15, 2.0))}
                    title="Zoom In"
                  >
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="pdf-viewport">
            {fileUrl ? (
              <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="loader-wrapper pulse-indicator">
                    <i className="fa-solid fa-circle-notch fa-spin fa-2xl mb-2" />
                    <span>Mounting Encrypted Stream...</span>
                  </div>
                }
                error={
                  <div className="loader-wrapper has-error">
                    <i className="fa-solid fa-triangle-exclamation fa-2xl mb-2" />
                    <span>
                      Stream break: Failed to compile binary buffer assets.
                      Verify proxy health or target link.
                    </span>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                />
              </Document>
            ) : (
              <div className="loader-wrapper">
                <i className="fa-solid fa-link fa-2xl mb-2" />
                <span>No document address specified.</span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  Usage: viewer.tyxc.org/https://example.com/sample.pdf
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
