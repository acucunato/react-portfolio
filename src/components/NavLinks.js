import React from "react";
import "./NavLinks.css";
import { Link, useLocation } from "react-router-dom";

function NavLinks() {
  const location = useLocation();

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
                  <Link
                    to="/aboutme"
                    className={
                      location.pathname === "/aboutme"
                        ? "nav-link active"
                        : "nav-link a"
                    }
                  >
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={
                      location.pathname === "/portfolio"
                        ? "nav-link active"
                        : "nav-link a"
                    }
                  >
                    portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={
                      location.pathname === "/contact"
                        ? "nav-link active"
                        : "nav-link a"
                    }
                  >
                    contact
                  </Link>
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
