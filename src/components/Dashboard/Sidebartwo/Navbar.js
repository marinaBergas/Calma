import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0 1rem;
  background-color: #333;
  z-index:999;
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: "";
  }

  & span:before {
    top: -10px;
  }

  & span:after {
    bottom: -10px;
  }
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <NavWrapper>
      <div className="d-flex justify-content-center align-items-center">
        <BurgerMenu
          onClick={() => {
            toggleMenu(true);
            console.log("Hamburger menu clicked, toggle open");
          }}
        >
          <span />
        </BurgerMenu>
        <p className="ml-5 pt-2 d-none d-lg-inline" style={{ fontSize: "2rem" }}>
          Hello Dr.Stranger
        </p>
      </div>
      <div className="pr-3">
      <Link to={"/"}>
        <span className="mr-5" style={{ fontSize: "25px", color: "white" }}>Home</span>
      </Link>
      <Link to={"/"}>
        <span style={{ fontSize: "25px", color: "white" }}>Logout</span>
      </Link>{" "}
      </div>
    </NavWrapper>
  );
};

export default Navbar;
