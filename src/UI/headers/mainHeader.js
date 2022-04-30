import styled from "styled-components";
import logo from "../../assets/logo.png";
// import { useState } from "react";

const Navbar = styled.nav`
  color: #09c8c3;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  height: 12.5vh;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

// const Container = styled.div``;

const Nav = styled.div`
  justify-content: flex-start;
  color: rgba(9, 200, 195, 0.55);
  text-decoration: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 0.4rem;
  margin-left: 0.1rem;
`;
const Image = styled.img`
  width: 4rem;
  height: 2.667rem;
`;

function MainHeader(props) {
  return (
    <Navbar className={props.className}>
      <Image src={logo} />
      <Nav>About us</Nav>
      <Nav>Features</Nav>
      <Nav>Support</Nav>
    </Navbar>
  );
}

export default MainHeader;
