import React from "react";
import "./App.css";
import NavLinks from "./components/NavLinks";
// import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";
import Container from "./components/pages/Container";
import Portfolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <NavLinks />
      <Container>
        {/* <AboutMe /> */}
        <Portfolio />
        {/* <Contact /> */}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
