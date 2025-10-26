import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    servizio: "",
    messaggio: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Grazie per il tuo messaggio! Ti risponderò al più presto per fissare la tua consulenza. ✨"
    );
    setFormData({
      nome: "",
      email: "",
      servizio: "",
      messaggio: "",
    });
  };

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Contattami</h1>
        <p>Prenota la tua consulenza personalizzata</p>
      </div>

      <section id="contatti">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Il tuo nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="la.tua@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="servizio">Servizio di Interesse</label>

            <select
              type="text"
              id="servizio"
              name="servizio"
              value={formData.servizio}
              onChange={handleChange}
            >
              <option>Tema Natale</option>
              <option>Lettura Tarocchi</option>
              <option>Consulenze personalizzate</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="messaggio">Messaggio</label>
            <textarea
              id="messaggio"
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              placeholder="Raccontami di te e delle tue esigenze..."
              required
            />
          </div>

          <button type="submit">Invia Richiesta ✨</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
