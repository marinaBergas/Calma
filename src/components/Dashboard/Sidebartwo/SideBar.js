import React from "react";
import styled from "styled-components";
import Logo from "../../../Assets/Images/cl1.jpg";
import {Sidedata} from "./Sidedata";
import { Link } from "react-router-dom";
import "./Sidebar.css";



const SidebarStyled = styled.div`
  position: fixed;
  z-index: 555;
  top: 0;
  left: 0;
  width: 80%;
  background-color: #333;
  padding: 1rem;
  color: #fff;
  max-width: 300px;
  height: 100%;
  transform: translateX(${props => (props.show ? "0" : "-100%")});
  transition: all 0.3s ease-in-out;
`;

const SidebarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;



const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: white;
    position: absolute;
    display: block;
    content: "";
  }

  & span {
    background-color: transparent;
  }

  & span:before {
    top: 0;
    transform: rotate(45deg);
  }

  & span:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

const SideBar = ({ show, setIsOpened }) => {
  return (
    <SidebarStyled show={show ? 1 : 0}>
      <SidebarWrapper>
        <CloseIcon
          onClick={() => {
            setIsOpened(false);
            console.log("Close icon clicked, close sidebar");
          }}
        >
          <span />
        </CloseIcon>
        <div className=" d-flex flex-column align-items-center mt-5 justify-content-center">
        <div className="docInfo">
                <img className="docImg" src={Logo}></img>
                <h2 className="mt-3 ">Dr.Stranger</h2>
                <hr className="hr mt-5" />
              </div>
              <div className="links d-flex mt-5 flex-column align-items-start justify-content-center">
                {Sidedata.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.link} >
                        {item.icon}
                        <span className="pl-3">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </div>
              </div>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default SideBar;
