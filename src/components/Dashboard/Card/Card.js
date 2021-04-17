import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
    <div className="card-Container ml-5 mt-0">
      <div className={`card-counter d-flex justify-content-center align-items-center ml-5 ${props.cName}`}>
        
          <span className="logo"> {props.icon}</span>
        
        <div className="d-flex flex-column">
          <span >{props.title}</span>
          <span className="">12</span>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
