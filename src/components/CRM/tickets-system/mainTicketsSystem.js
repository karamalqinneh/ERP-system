import { useState, useEffect, useReducer } from "react";

import styled from "styled-components";

import SearchForm from "./tickets-search/searchForm";
import OpenTickets from "./open-tickets/openTickets";

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
`;

function MainTicketsSystem(props) {
  const initialState = <SearchForm />;

  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        return <SearchForm />;
      case "OPEN":
        return <OpenTickets />;
      case "REPORTS":
        return <div>Ticket REPORTS</div>;
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Section>
        <Navbar className={props.className}>
          <Nav onClick={() => dispatch({ type: "SEARCH" })}>Search</Nav>
          <Nav onClick={() => dispatch({ type: "OPEN" })}>Open Tickets</Nav>
          <Nav onClick={() => dispatch({ type: "REPORTS" })}>Reports</Nav>
        </Navbar>
        {state}
      </Section>
    </>
  );
}

export default MainTicketsSystem;
