import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stars from "../components/Stars";

function Blog() {
  const blogPosts = [
    {
      title: "Luna Piena in Scorpione: Tempo di Trasformazione",
      date: "15 Ottobre 2025",
      category: "Astrologia",
      excerpt:
        "La Luna Piena in Scorpione ci invita a scavare in profondità, ad affrontare le nostre ombre e ad abbracciare il potere della trasformazione interiore...",
      image: "🌕",
    },
    {
      title: "Come Interpretare gli Arcani Maggiori",
      date: "10 Ottobre 2025",
      category: "Tarocchi",
      excerpt:
        "Gli Arcani Maggiori rappresentano i grandi archetipi del viaggio umano. Scopriamo insieme il significato profondo di queste carte potenti...",
      image: "🔮",
    },
    {
      title: "Mercurio Retrogrado: Guida Pratica",
      date: "5 Ottobre 2025",
      category: "Astrologia",
      excerpt:
        "Non tutti i retrogradi sono uguali. Ecco come navigare il periodo di Mercurio retrogrado senza panico e con consapevolezza...",
      image: "☿",
    },
    {
      title: "Il Potere della Luna Nuova nei Rituali",
      date: "28 Settembre 2025",
      category: "Spiritualità",
      excerpt:
        "La Luna Nuova è il momento perfetto per piantare semi di intenzione. Scopri come creare rituali significativi per manifestare i tuoi desideri...",
      image: "🌑",
    },
    {
      title: "Venere in Capricorno: Amore Maturo",
      date: "20 Settembre 2025",
      category: "Astrologia",
      excerpt:
        "Con Venere in Capricorno, l'amore diventa più serio e impegnato. Esploriamo cosa significa questo transito per le relazioni...",
      image: "♀",
    },
    {
      title: "I Quattro Elementi nei Tarocchi",
      date: "12 Settembre 2025",
      category: "Tarocchi",
      excerpt:
        "Fuoco, Terra, Aria e Acqua: comprendere gli elementi è fondamentale per una lettura profonda dei tarocchi. Una guida completa...",
      image: "🜂",
    },
  ];

  return (
    <>
      <Stars />
      <Navbar />
      <div className="page-container">
        <div className="page-hero">
          <h1>Blog Astrologico</h1>
          <p>
            Approfondimenti, consigli e riflessioni sul mondo dell'astrologia e
            dei tarocchi
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-icon">{post.image}</div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">
                  Leggi di più →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
