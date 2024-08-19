import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header>
      <nav>
        <ul>
          <li className="slide-in">
            <div className="separación">
              <a href="#home">
                <button>Inicio</button>
              </a>
            </div>
          </li>

          <li className="slide-in">
            <a href="#projects">
              <button>Proyectos</button>
            </a>
          </li>

          <li className="slide-in">
            <div className="separación">
              <a href="#contact">
                <button>Contacto</button>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
