import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stars from "../components/Stars";

function Home() {
  useEffect(() => {
    // Smooth scroll per i link di navigazione
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute("href"));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Stars />
      <Navbar />
      <div className="container">
        <Hero />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
