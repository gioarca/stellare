import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Luna Stellare</h1>
      <p>Consulenze Astrologiche Personalizzate</p>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Scopri il tuo cammino attraverso le stelle
      </p>
      <a href="#contatti" className="cta-button">
        Prenota una Consulenza
      </a>
    </section>
  );
}

export default Hero;
