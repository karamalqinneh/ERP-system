import styled from "styled-components";

const Navbar = styled.nav`
  color: #09c8c3;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const Nav = styled.a`
  justify-content: flex-end;
  color: rgba(9, 200, 195, 0.55);
  text-decoration: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
`;

function InnerHeader() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav href="/home">Home</Nav>
          <Nav href="/scm">SCM</Nav>
          <Nav href="/accounting">Accounting</Nav>
          <Nav href="/hr">HR</Nav>
          <Nav href="/crm">CRM</Nav>
          <Nav href="/payments">Payments</Nav>
          <Nav href="/tracking">Tracking</Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default InnerHeader;
