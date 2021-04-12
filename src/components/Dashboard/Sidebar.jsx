import React from "react";
import "./Sidebar.css"
import { Sidedata } from "./Sidedata";
import Logo from '../../Assets/Images/cl1.jpg';

function Sidebar(props) {
  return (
    <>
    <div className="Sidebar">
    <div className="docInfo">
      <img className="docImg mt-5" src={Logo}></img>
      <h2 className="mt-3">Abanoub</h2>
      <hr className="hr mt-5" />
    </div>
      <ul className="sidebarList mt-5">
        {Sidedata.map((val, key) => {
          return (
            <li
              className="row d-flex flex-row justify-content-center align-items-center"
              onClick={() => {
                window.loction.pathname = val.link;
              }}
              key={key}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
}
export default Sidebar;
