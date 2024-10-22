import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Habilidades from "./components/Habilidades";
import "./App.css";

const App = () => {
  return (
    <div className="fade-in-up">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Habilidades />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
