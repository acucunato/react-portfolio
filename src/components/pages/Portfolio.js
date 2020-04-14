import React, { Component } from "react";
import "./Portfolio.css";
// import poochquestpic from "../../img/poochquest.jpg";
// import burgerpic from "../../img/burgerlogger.jpg";
import portfolio from "../../portfolio.json";
import PortfolioCard from "../pages/PortfolioCard";

class Portfolio extends Component {
  state = {
    portfolio,
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <br />
            <h3 className="port-header">portfolio</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* PORTFOLIO CARDS */}
          {this.state.portfolio.map((project) => (
            <PortfolioCard
              id={project.id}
              key={project.id}
              name={project.name}
              photo={project.photo}
              deploy={project.deploy}
              github={project.github}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Portfolio;
