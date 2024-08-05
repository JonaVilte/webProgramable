import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => onNavigate("home")}>Inicio</button>
          </li>
          <li>
            <button onClick={() => onNavigate("projects")}>Proyectos</button>
          </li>
          <li>
            <button onClick={() => onNavigate("contact")}>Contacto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
