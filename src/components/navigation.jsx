import React, { useState, useEffect } from "react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
        <a href="#header" className="navbar-logo">
          <img src="/img/Logo.png" alt="Evolutia Logo" style={{ height: "60px" }} />
        </a>


          {/* Menú Normal */}
          <ul className="navbar-menu">
            <li><a href="#features">¿Por qué?</a></li>
            <li><a href="#services">¿Qué Hace?</a></li>
            <li><a href="#about">¿Quiénes Somos?</a></li>
            <li><a href="#team">Nuestro Equipo</a></li>
            <li><a href="#contact" className="cta-button">Empieza</a></li>
          </ul>

          {/* Menú Hamburguesa solo en móviles */}
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)}>✖</button>
        <ul>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>¿Por qué?</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>¿Qué Hacen?</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>¿Quiénes Somos?</a></li>
          <li><a href="#team" onClick={() => setMenuOpen(false)}>Nuestro Equipo</a></li>
          <li><a href="#contact" className="cta-button" onClick={() => setMenuOpen(false)}>Empieza</a></li>
        </ul>
      </div>
    </>
  );
};
