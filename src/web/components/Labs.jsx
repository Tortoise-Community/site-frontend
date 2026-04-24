import React from "react";
import { Link } from "react-router-dom";
import "./styles/Labs.scss";

export default function LabsHero(props) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center labs-hero-section px-0">
      
      <div className="labs-badge mb-3">
        <i className="fas fa-flask me-2"></i>
        <span>Engineering Excellence</span>
      </div>

      <h1 className="labs-front-header mb-2 text-uppercase">
        Tortoise Labs
      </h1>

      <p className="labs-front-quote mb-4">
        Building the infrastructure for the next generation of developers.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-2">
        {/* <Link
          className="btn btn-primary m-2 labs-cta-btn"
          to="/services"
        >
          Our Products
        </Link> */}
        <Link
          className="btn btn-outline-secondary m-2 labs-outline-btn"
          to="/contact"
        >
          Consultation
        </Link>
      </div>

      <div className="labs-sub-hero-socials d-flex mt-4 gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="labs-social-link"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in fs-4"></i>
        </a>
      </div>
      
      <div className="spacer m-4" />
      {props.children}
    </div>
  );
}