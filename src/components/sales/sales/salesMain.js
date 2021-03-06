import styled from "styled-components";
import { useReducer, useRef } from "react";
import NewDeal from "./new-deal/newDeal";
import SalesHistory from "./sales-history/salesHistoryMain";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

const Navbar = styled.nav`
  color: #09c8c3;
  display: flex;
  justify-content: flex-end;
  background-color: #fefefe;
  margin-bottom: 2rem;
`;

const Nav = styled.div`
  justify-content: center;
  color: rgba(9, 200, 195, 0.55);
  text-decoration: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.3rem;
  background-color: #fefefe;
  &.active {
    color: rgba(9, 200, 195, 1);
  }
`;

function SalesMain(props) {
  const navRef = useRef();
  const activeHandler = (e) => {
    const children = [].slice.call(navRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };
  const initialState = <NewDeal />;

  const reducer = (state, action) => {
    switch (action.type) {
      case "NEW":
        return initialState;
      case "HISTORY":
        return <SalesHistory />;
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Section>
      <Navbar className={props.className} ref={navRef}>
        <Nav
          onClick={(e) => {
            activeHandler(e);
            dispatch({ type: "NEW" });
          }}
        >
          New Deal
        </Nav>
        <Nav
          onClick={(e) => {
            activeHandler(e);
            dispatch({ type: "HISTORY" });
          }}
        >
          Sales History
        </Nav>
      </Navbar>
      {state}
    </Section>
  );
}

export default SalesMain;
