import React, { useState, useEffect } from "react";
import "./App.scss";
import NavHeader from "./components/NavHeader/NavHeader";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const maxScroll = window.innerHeight * 0.5;

    // Solo actualiza la opacidad en la primer parte de la página (hasta maxScroll)
    if (position <= maxScroll) {
      const newOpacity = Math.min(position / maxScroll, 1);
      setOpacity(newOpacity);
      document.documentElement.style.setProperty("--bg-opacity", newOpacity);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavHeader />
      <MainContent />
      <MainContent />
      <MainContent />
      <MainContent />
      <MainContent />
      <MainContent />
      <MainContent />
      {/* Otras secciones pueden ir aquí */}
    </>
  );
}

export default App;
