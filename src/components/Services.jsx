import React from "react";

function Services() {
  const services = [
    {
      icon: "🔮",
      title: "Lettura Tarocchi",
      description:
        "Scopri le risposte che cerchi attraverso l'antica saggezza dei tarocchi. Ogni carta racconta la tua storia e illumina il tuo percorso.",
    },
    {
      icon: "⭐",
      title: "Tema Natale",
      description:
        "Analisi completa del tuo cielo di nascita per comprendere la tua essenza, talenti nascosti e potenzialità attraverso pianeti e case astrologiche.",
    },
    {
      icon: "🌙",
      title: "Consulenze Personalizzate",
      description:
        "Sessioni individuali per esplorare amore, carriera, crescita personale. Un viaggio guidato verso la consapevolezza di te stesso.",
    },
  ];

  return (
    <section id="servizi">
      <h2>I Miei Servizi</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
