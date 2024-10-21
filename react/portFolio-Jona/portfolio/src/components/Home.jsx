import React from "react";

const Home = () => {
  return (
    <main className="orientation" >
      <div className="home" id="home">
      <div className="home-content">
      <h1>hola!, Bienvenido a Mi Portafolio.</h1>
      <h3>Mi nombre es Jonatan Vilte</h3>
      <p>
        Aquí encontrarás información sobre mis proyectos como mis habilidades, pryectos y contacto.
      </p>
      </div>
      <div className="home-img">
        <img src="./src/imagenes/gatoBanana.jpg" alt="gato" />
      </div>
      </div>
    </main>
  );
};

export default Home;
