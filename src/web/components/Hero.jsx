import React from "react";
import { Link } from "react-router-dom";
import "./styles/Hero.scss";

export default function HeroSection(props) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center hero-section px-0">
      <img
        src="https://lairesit.sirv.com/Tortoise/tortoise-logo.png"
        alt="Tortoise Programming Community Large Logo"
        className="hero-logo"
      />

      <h1 className="front-header mb-2 text-uppercase">
        Tortoise Programming Community
      </h1>

      <p className="front-quote mb-4">
        We called him tortoise because he taught us!
      </p>

      <a
        className="btn btn-primary m-2 hero-join-btn"
        href="https://discord.gg/WeUtJ7hqum"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join now
      </a>

      <div className="sub-hero-socials d-flex mt-4 gap-3">
        <a
          href="https://discord.gg/WeUtJ7hqum"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-link"
        >
          <i class="fa-brands fa-discord fs-4"></i>
        </a>
        <Link to="/github"
          className="hero-social-link"
        ><i class="fa-brands fa-github fs-4"></i></Link>
        <a
          href="https://execute.tortoisecommunity.org"
          target="_blank"
          className="hero-social-link"
        >
          <i class="fa-solid fa-terminal fs-4"></i>
        </a>
      </div>
      <div className="spacer m-3" />
      {props.children}
    </div>
  );
}
