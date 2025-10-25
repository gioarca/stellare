import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stars from "../components/Stars";

function ServicesPage() {
  const services = [
    {
      icon: "🔮",
      title: "Lettura Tarocchi",
      price: "€50",
      duration: "45 minuti",
      description:
        "Una consulenza profonda attraverso l'antica saggezza dei tarocchi. Esploriamo insieme le tue domande più importanti.",
      includes: [
        "Lettura completa con 10 carte",
        "Interpretazione dettagliata",
        "Consigli pratici",
        "Registrazione audio della sessione",
      ],
    },
    {
      icon: "⭐",
      title: "Tema Natale Completo",
      price: "€120",
      duration: "90 minuti",
      description:
        "Analisi approfondita del tuo cielo di nascita. Scopri chi sei veramente attraverso pianeti, case e aspetti astrologici.",
      includes: [
        "Calcolo tema natale personalizzato",
        "Analisi di tutti i pianeti",
        "Studio delle case astrologiche",
        "Report scritto di 20+ pagine",
        "Sessione di spiegazione online",
      ],
    },
    {
      icon: "🌙",
      title: "Consulenza Personalizzata",
      price: "€70",
      duration: "60 minuti",
      description:
        "Una sessione individuale focalizzata sui tuoi bisogni specifici: amore, carriera, crescita personale.",
      includes: [
        "Consulenza one-to-one",
        "Focus su un'area specifica",
        "Strategie pratiche",
        "Follow-up via email",
      ],
    },
    {
      icon: "💫",
      title: "Sinastria di Coppia",
      price: "€150",
      duration: "2 ore",
      description:
        "Analisi della compatibilità astrologica tra due persone. Perfetto per coppie che vogliono comprendersi meglio.",
      includes: [
        "Tema natale di entrambi",
        "Analisi degli aspetti di coppia",
        "Punti di forza e sfide",
        "Consigli per l'armonia",
        "Report completo",
      ],
    },
    {
      icon: "🌟",
      title: "Transiti Annuali",
      price: "€90",
      duration: "75 minuti",
      description:
        "Previsioni astrologiche per l'anno a venire. Scopri i periodi più favorevoli per ogni area della tua vita.",
      includes: [
        "Analisi transiti planetari",
        "Calendario degli eventi chiave",
        "Consigli per ogni mese",
        "Report PDF personalizzato",
      ],
    },
    {
      icon: "🔯",
      title: "Percorso di Crescita",
      price: "€250",
      duration: "3 sessioni",
      description:
        "Un viaggio trasformativo di 3 mesi. Include tarocchi, tema natale e sessioni di coaching astrologico.",
      includes: [
        "3 sessioni da 90 minuti",
        "Tema natale completo",
        "Letture tarocchi mensili",
        "Supporto via email",
        "Materiali di approfondimento",
      ],
    },
  ];

  return (
    <>
      <Stars />
      <Navbar />
      <div className="page-container">
        <div className="page-hero">
          <h1>I Miei Servizi</h1>
          <p>
            Scegli il percorso più adatto a te e inizia il tuo viaggio di
            scoperta
          </p>
        </div>

        <div className="services-detail-grid">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <div className="service-meta">
                  <span className="price">{service.price}</span>
                  <span className="duration">{service.duration}</span>
                </div>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-includes">
                <h4>Cosa include:</h4>
                <ul>
                  {service.includes.map((item, i) => (
                    <li key={i}>✦ {item}</li>
                  ))}
                </ul>
              </div>
              <a href="#contatti" className="service-cta">
                Prenota Ora
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
