import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div className="container p-5 shadow text-center">{props.children}</div>
  );
}

export default Container;
