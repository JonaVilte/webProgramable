import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="icono-img skill-item" src="./src/imagenes/twitter.png" alt="" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img className="icono-img skill-item" src="./src/imagenes/instagram.png" alt="" />
        </a>
        <p>Numero tel: 11 5964-4380</p>
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer;
