import React from "react";
import "./App.css";
import NavLinks from "./components/NavLinks";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <div className="App">
      <NavLinks />
      <AboutMe />
    </div>
  );
}

export default App;
