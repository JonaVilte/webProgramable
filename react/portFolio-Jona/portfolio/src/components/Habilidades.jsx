import React from "react";

function Habilidades() {
  return (
    <section className="skills-section animate__animated animate__bounceInLeft">
      <h1 className="skills-title">Habilidades</h1>
      <div className="skills-grid">
        <div className="skill-item">
          <img src="./src/imagenes/html5.png" alt="HTML" className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src="/./src/imagenes/css.png" alt="CSS" className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src="/./src/imagenes/javascript_icon.png" alt="JavaScript" className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="/./src/imagenes/react_icon.png" alt="React" className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src="./src/imagenes/python_icon.png" alt="Python" className="skill-icon" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src="./src/imagenes/github.png" alt="Git" className="skill-icon" />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <img src="./src/imagenes/database.png" alt="SQL" className="skill-icon" />
          <p>SQL</p>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
