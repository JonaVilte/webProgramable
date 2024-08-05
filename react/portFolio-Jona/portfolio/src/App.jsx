import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header onNavigate={setCurrentView} />
      {renderView()}
      <Footer />
    </div>
  );
};

export default App;
