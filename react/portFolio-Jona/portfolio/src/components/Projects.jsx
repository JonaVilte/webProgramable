import React from "react";

const Projects = () => {
  return (
    <main>
      <h1 className="orientation">Mis Proyectos</h1>
      <ul>
        <div className="separación">
          <li>
            <h2>Proyecto 1</h2>
            <p>Descripción del Proyecto 1.</p>
          </li>
        </div>
        <div className="separación">
          <li>
            <h2>Proyecto 2</h2>
            <p>Descripción del Proyecto 2.</p>
          </li>
        </div>
        {/* Agrega más proyectos aquí */}
      </ul>
    </main>
  );
};

export default Projects;
