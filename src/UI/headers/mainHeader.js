import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Navbar = styled.nav`
  color: #09c8c3;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  height: 12.5vh;
  background-color: transparent;
  position: sticky;
  top: 0;
  z-index: 999;
  &.active {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: #fefefe;
  }
`;

// const Container = styled.div``;

const Nav = styled.div`
  justify-content: flex-start;
  text-decoration: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 0.4rem;
  margin-left: 0.1rem;
  background-color: transparent;
  color: #fefefe;
  &.active {
    color: rgba(9, 200, 195, 1);
    background-color: #fefefe;
  }
`;
const Image = styled.img`
  width: 5rem;
  height: 3.33rem;
  background-color: transparent;
  &.active {
    background-color: #fefefe;
  }
`;

function MainHeader(props) {
  const navbarRef = useRef();
  const [navbarStyle, setNavbarStyle] = useState(false);
  const handleScroll = (e) => {
    if (window.scrollY > 30) {
      setNavbarStyle(true);
    } else {
      setNavbarStyle(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    console.log(navbarStyle);
    if (navbarStyle) {
      navbarRef.current.classList.add("active");
      const children = [].slice.call(navbarRef.current.children);
      children.forEach((ele) => ele.classList.add("active"));
    } else {
      navbarRef.current.classList.remove("active");
      const children = [].slice.call(navbarRef.current.children);
      children.forEach((ele) => ele.classList.remove("active"));
    }
  }, [navbarStyle]);

  return (
    <Navbar ref={navbarRef} className={props.className}>
      <Image src={logo} />
      <Nav>About us</Nav>
      <Nav>Features</Nav>
      <Nav>Support</Nav>
    </Navbar>
  );
}

export default MainHeader;
