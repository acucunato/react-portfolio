import React from "react";
import "./NavLinks.css";

function NavLinks() {
  return (
    <>
      <header className="shadow">
        <div className="row width:100%">
          <div className="nav-name col-sm-12 col-md-6 text-center align-center">
            <h1>alyssa cucunato</h1>
          </div>
          <div className="col-sm-12 col-md-6 text-center align-center">
            <div className="right-nav-links">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">
                    portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavLinks;
