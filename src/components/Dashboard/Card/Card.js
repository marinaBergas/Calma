import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
    <div className="card-Container">
      <div className={`card-counter d-flex justify-content-center align-items-center ${props.cName}`}>        
          <span className="logo"> {props.icon}</span>
        <div className="d-flex flex-column">
          <span >{props.title}</span>
          <span>12</span>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
