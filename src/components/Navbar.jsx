import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌙</span>
          <span className="logo-text">Luna Stellare</span>
        </Link>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isHomePage ? (
            <>
              <li>
                <a href="#servizi" onClick={() => setIsOpen(false)}>
                  Servizi
                </a>
              </li>
              <li>
                <a href="#chi-sono" onClick={() => setIsOpen(false)}>
                  Chi Sono
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/servizi">Servizi</Link>
            </li>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {isHomePage ? (
            <li>
              <a href="#contatti" onClick={() => setIsOpen(false)}>
                Contatti
              </a>
            </li>
          ) : (
            <li>
              <Link to="/#contatti">Contatti</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
