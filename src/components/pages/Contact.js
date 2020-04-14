import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="mt-5 mb-15">
      <h3 className="contact-header">let's get in touch</h3>
      <form>
        <div className="form-group">
          <label for="exampleInputFullName1">full name</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputFullName1"
            placeholder="first and last"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-contact">
          submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
