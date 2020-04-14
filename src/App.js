import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavLinks from "./components/NavLinks";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";
import Container from "./components/pages/Container";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavLinks />
        <Container>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
