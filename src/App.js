import React from "react";
import "./App.css";
import NavLinks from "./components/NavLinks";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="App">
      <NavLinks />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
