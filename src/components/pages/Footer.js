import React from "react";
import "./Footer.css";
import devResume from "../../img/Alyssa-Cucunato-Resume-Dev.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="row foot-row">
        <div className="col-2 foot-item">
          <i className="fab fa-github mt-2 text-white"></i>
          <a className="footnav btn mx-2" href="https://github.com/acucunato">
            Github
          </a>
        </div>
        <div className="col-2 foot-item">
          <i className="fab fa-linkedin mt-2 text-white"></i>
          <a
            className="footnav btn mx-2"
            href="https://www.linkedin.com/in/alyssacucunato"
          >
            LinkedIn
          </a>
        </div>
        <div className="col-2 foot-item">
          <i className="far fa-file-pdf mt-2 text-white"></i>
          <a
            className="footnav btn mx-2"
            href={devResume}
            download="Alyssa Cucunato Resume"
          >
            Resume
          </a>
        </div>
        <div className="col-2 foot-item">
          <i className="fa fa-envelope mt-2 text-white"></i>
          <a className="footnav btn mx-2" href="mailto:acucunato18@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
