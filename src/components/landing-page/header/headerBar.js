import styled from "styled-components";
import Button from "../../../UI/button";
import { keyframes } from "styled-components";
import { useState } from "react";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fefefe;
  height: 25vh;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fefefe;
  height: 10vh;
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 40vw;
  background-color: #fefefe;
`;

const Link = styled.a`
  font-size: 1.2rem;
  background-color: #fefefe;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #f3f2ef;
    border-radius: 3px;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const fill = keyframes`
0%{
  background-color: transparent;
}
100% {
  background-color: rgb(9, 200, 195);
}
`;

const StyledButton = styled(Button)`
  height: 7.5vh;
  width: 15vw;
  margin: 0;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid rgb(9, 200, 195);
  color: rgb(9, 200, 195);
  &:hover {
    animation: ${fill} 1s linear;
    background-color: rgb(9, 200, 195);
    color: #fefefe;
  }
`;

function HeaderBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNav = (e) => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  let head = showNavbar ? (
    <Header>
      <Title>ERP System</Title>
      <Nav>
        <Link>Home</Link>
        <Link>Features</Link>
        <Link>Contact Us</Link>
      </Nav>
      <StyledButton>Try Now</StyledButton>
    </Header>
  ) : (
    <MainHeader>
      <Title>ERP System</Title>
      <Nav>
        <Link>Home</Link>
        <Link>Features</Link>
        <Link>Contact Us</Link>
      </Nav>
      <StyledButton>Try Now</StyledButton>
    </MainHeader>
  );

  window.addEventListener("scroll", handleNav);
  return head;
}

export default HeaderBar;
