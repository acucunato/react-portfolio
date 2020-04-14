import React, { Component } from "react";
import "./Portfolio.css";
import poochquestpic from "../../img/poochquest.jpg";
import burgerpic from "../../img/burgerlogger.jpg";
import portfolio from "../../portfolio.json";

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
          <div className="col-auto mt-5">
            <div className="relative">
              <a
                class="relative"
                href="https://github.com/acucunato/pooch-quest"
                target="blank"
              >
                <img class="relative" src={poochquestpic} alt="poochquest" />
              </a>
              <a
                class="port-link absolute mr-5 mb-5"
                href="https://acucunato.github.io/pooch-quest/"
                target="blank"
              >
                pooch quest
              </a>
              <a
                class="repo-link"
                href="https://github.com/acucunato/pooch-quest"
                target="blank"
              >
                github repo
              </a>
            </div>
          </div>
          <div className="col-auto mt-5">
            <div className="relative">
              <a
                class="relative"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                <img class="relative" src={burgerpic} alt="burger" />
              </a>
              <a
                class="port-link absolute mr-5 mb-5"
                href="https://eatdaburger-acucunato.herokuapp.com/"
                target="blank"
              >
                eat-da-burger
              </a>
              <a
                class="repo-link"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                github repo
              </a>
            </div>
          </div>
          <div className="col-auto mt-5">
            <div className="relative">
              <a
                class="relative"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                <img class="relative" src={burgerpic} alt="burger" />
              </a>
              <a
                class="port-link absolute mr-5 mb-5"
                href="https://eatdaburger-acucunato.herokuapp.com/"
                target="blank"
              >
                eat-da-burger
              </a>
              <a
                class="repo-link"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                github repo
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto mt-5">
            <div className="relative">
              <a
                class="relative"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                <img class="relative" src={burgerpic} alt="burger" />
              </a>
              <a
                class="port-link absolute mr-5 mb-5"
                href="https://eatdaburger-acucunato.herokuapp.com/"
                target="blank"
              >
                eat-da-burger
              </a>
              <a
                class="repo-link"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                github repo
              </a>
            </div>
          </div>
          <div className="col-auto mt-5">
            <div className="relative">
              <a
                class="relative"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                <img class="relative" src={burgerpic} alt="burger" />
              </a>
              <a
                class="port-link absolute mr-5 mb-5"
                href="https://eatdaburger-acucunato.herokuapp.com/"
                target="blank"
              >
                eat-da-burger
              </a>
              <a
                class="repo-link"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                github repo
              </a>
            </div>
          </div>

          <div className="col-auto mt-5">
            <div className="relative">
              <a
                class="relative"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                <img class="relative" src={burgerpic} alt="burger" />
              </a>
              <a
                class="port-link absolute mr-5 mb-5"
                href="https://eatdaburger-acucunato.herokuapp.com/"
                target="blank"
              >
                eat-da-burger
              </a>
              <a
                class="repo-link"
                href="https://github.com/acucunato/eat-da-burger"
                target="blank"
              >
                github repo
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
