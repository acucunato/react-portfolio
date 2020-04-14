import React from "react";
import "./AboutMe.css";
import pic from "../../img/aboutmeimg2.png";

function AboutMe() {
  return (
    <div className="container p-5 shadow bg-white text-center">
      <div className="row">
        <div className="col-6 col-lg-4 align-center">
          <img src={pic} height="350px" width="200px" alt="alyssacucunato" />
        </div>
        <div className="col-6 col-lg-8">
          <h3>hi there!</h3>
          <p>
            My name is Alyssa. I started my journey in web development at the
            University of Pennsylvania's intensive Coding Bootcamp in
            Philadelphia, PA. I have experience in HTML5, Javascript, Node.js,
            Express.js, and MySQL database. I am always eager to find new ways
            to master my coding skills while keeping up with the latest
            technologies.
            <br />
            <br />
            Prior to web development, I graduated from Philadelphia University
            with a Bachelor of Science in Fashion Merchandising as well as ten
            years of experience in the fields of operations, management, and
            sales. I am hoping to continue to utilize skills learned in my
            previous industry to embark on this new journey in coding and web
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
