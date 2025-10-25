import React from "react";

function About() {
  return (
    <section id="chi-sono">
      <h2>Chi Sono</h2>
      <div className="about">
        <div className="about-content">
          <div className="about-image">🌟</div>
          <div className="about-text">
            <p>
              Sono un'astrologa professionista con oltre 10 anni di esperienza
              nella lettura dei tarocchi e nell'interpretazione dei temi natali.
              La mia passione per le stelle è nata fin da bambina, quando
              osservavo affascinata il cielo notturno.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              Ho studiato astrologia classica e moderna, combinando antiche
              tradizioni con approcci contemporanei. Credo che ogni persona
              porti dentro di sé una mappa celeste unica, e il mio compito è
              aiutarti a leggerla per trovare chiarezza, direzione e armonia
              nella tua vita.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              Ogni consulenza è un viaggio intimo e personale, condotto con
              rispetto, empatia e professionalità. Ti accompagno nella scoperta
              di te stesso attraverso il linguaggio universale degli astri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
