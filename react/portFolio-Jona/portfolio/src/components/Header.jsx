import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <button>Inicio</button>
            </a>
          </li>
          
          <li>
            <a href="#projects">
              <button>Proyectos</button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button>Contacto</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
