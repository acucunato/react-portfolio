import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="mt-5 mb-15">
        <h3 className="contact-header">let's get in touch</h3>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
            <i className="fab fa-github fa-4x"></i>
            <br />
            <a href="https://github.com/acucunato">github</a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-4x"></i>
            <br />
            <a className="email" href="mailto:acucunato18@gmail.com">
              acucunato18@gmail.com
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fab fa-linkedin fa-4x"></i>
            <br />
            <a href="https://www.linkedin.com/in/alyssacucunato">linkedin</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
