import React from "react";

function PortfolioCard(props) {
  return (
    <div className="col-auto mt-5" key={props.id}>
      <div className="relative">
        <a className="relative" href={props.github} target="blank">
          <img className="relative" src={props.photo} alt={props.id} />
        </a>
        <a
          className="port-link absolute mr-5 mb-5"
          href={props.deploy}
          target="blank"
        >
          {props.name}
        </a>
        <a className="repo-link" href={props.github} target="blank">
          github repo
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
