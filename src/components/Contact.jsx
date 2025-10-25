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
    <section id="contatti">
      <h2>Contattami</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="servizio">Servizio di Interesse</label>
          <input
            type="text"
            id="servizio"
            name="servizio"
            value={formData.servizio}
            onChange={handleChange}
            placeholder="Es: Tema Natale, Lettura Tarocchi..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="messaggio">Messaggio</label>
          <textarea
            id="messaggio"
            name="messaggio"
            value={formData.messaggio}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Invia Richiesta</button>
      </form>
    </section>
  );
}

export default Contact;
