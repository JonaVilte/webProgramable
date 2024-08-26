import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header>
      <nav>
        <ul className="list-horizontal">
          <li className="slide-in">
            <div className="lisra_separación">
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
            <div className="lisra_separación">
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
