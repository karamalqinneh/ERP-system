import styled from "styled-components";
import { useParams } from "react-router-dom";
const Navbar = styled.nav`
  color: #09c8c3;
  padding: 1rem;
  background-color: #fefefe;
  width: 50vw;
  height 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 3vh;
  `;

const Nav = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #212529;
  height: 7vh;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  background-color: #fefefe;
  &:hover {
    border-bottom: 5px solid rgba(9, 200, 195, 1);
    color: rgba(9, 200, 195, 1);
  }
`;

function InnerHeader(props) {
  return (
    <Navbar className={props.className}>
      <Nav href="/home">Home</Nav>
      <Nav href="/scm">SCM</Nav>
      <Nav href="/hr">HR</Nav>
      <Nav href="/crm">CRM</Nav>
      <Nav href="/sales">Sales</Nav>
      <Nav href="/accounting">Accounting</Nav>
    </Navbar>
  );
}

export default InnerHeader;
