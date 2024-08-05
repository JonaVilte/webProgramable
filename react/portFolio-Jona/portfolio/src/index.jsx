import React from "react";
import App from "./App";
import "./index.css";

// Crear un contenedor simple para montar la aplicación
const container = document.getElementById("root");
const render = () => {
  container.innerHTML = "";
  const app = document.createElement("div");
  container.appendChild(app);
  React.render(<App />, app); // Alternativa a ReactDOM
};

// Llama a la función de renderizado
render();
