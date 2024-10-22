import React from "react";
import 'animate.css';


const Projects = () => {
  return (
    <main className="animate__animated animate__fadeIn">
      <h1 className="orientation">Mis Proyectos</h1>
      <ul>
        <div className="separación proyecto-grupo">
          <img className="proyecto-img" src="./src/imagenes/pro1.jpg" alt="" />
          <li>
            <h2>Titulo del proyecto</h2>
            <p>
              Descripción del Proyecto 1.
              <br />
              Lorem ipsum dolor sit amet. A assumenda aliquam quo aliquam dolorem et omnis possimus. 
              Cum repellendus molestias eos odit ducimus eos eaque voluptates qui veniam illo. Nam reiciendis 
              optio a voluptatibus quia qui illo labore quo rerum voluptatem aut odio cupiditate.
              Vel labore repellat aut consequatur voluptate rem accusamus quibusdam. Et voluptas aliquam 
              et dolore galisum ad quis obcaecati. Sed delectus corrupti eum quia ipsum aut sint fugit et quae 
              excepturi et blanditiis omnis aut Quis temporibus. Qui tempora saepe At vitae autem hic deleniti 
              impedit et suscipit ratione rem consequuntur dolorum ut illum optio? Ut quia quaerat et omnis 
              consequatur rem atque voluptatum.
            </p>
          </li>
        </div>
        <div className="separación proyecto-grupo">
          <img className="proyecto-img"  src="./src/imagenes/pro2.jpg" alt="" />
          <li>
            <h2>Titulo del proyecto</h2>
            <p>
              Descripción del Proyecto 2.
              <br />
              Lorem ipsum dolor sit amet. A assumenda aliquam quo aliquam dolorem et omnis possimus. 
              Cum repellendus molestias eos odit ducimus eos eaque voluptates qui veniam illo. Nam reiciendis 
              optio a voluptatibus quia qui illo labore quo rerum voluptatem aut odio cupiditate.
              Vel labore repellat aut consequatur voluptate rem accusamus quibusdam. Et voluptas aliquam 
              et dolore galisum ad quis obcaecati. Sed delectus corrupti eum quia ipsum aut sint fugit et quae 
              excepturi et blanditiis omnis aut Quis temporibus. Qui tempora saepe At vitae autem hic deleniti 
              impedit et suscipit ratione rem consequuntur dolorum ut illum optio? Ut quia quaerat et omnis 
              consequatur rem atque voluptatum.
            </p>

          </li>
        </div>
        {/* Agrega más proyectos aquí */}
      </ul>
    </main>
  );
};

export default Projects;
