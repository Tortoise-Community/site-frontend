import React from "react";
import Section from "../components/Section";
import "../pages/styles/PartnerSection.scss";

export default function Partners() {
  const partners = [
    {
      name: "ASCS",
      logo: "https://lairesit.sirv.com/Tortoise/sponsors/ascs-dark.webp",
      link: "https://cloud.ascsonoway.com/",
    },
    // {
    //   name: "ASCS",
    //   logo: "https://lairesit.sirv.com/Tortoise/sponsors/Cloudflare.png",
    //   link: "https://cloud.ascsonoway.com/",
    // },
  ];

  return (
    <Section title="Sponsors" bs_classes="partners-section" no_border={true}>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <img src={partner.logo} alt={`${partner.name} logo`} />
          </a>
        ))}
      </div>
    </Section>
  );
}
