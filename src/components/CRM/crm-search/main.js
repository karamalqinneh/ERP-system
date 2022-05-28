import { useState, useEffect, useReducer, useRef } from "react";

import styled from "styled-components";

import CRMSearchModal from "./crmSearchModal";
import CustomerInfo from "./customerInfo";
import CustomerTicketsMain from "./customer-tickets/customerTicketsMain";
import CustomerSalesMain from "./customer-sales/customerSalesMain";

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
  &:hover {
    color: rgba(9, 200, 195, 1);
`;

function MainSearch(props) {
  const navBarRef = useRef();

  const [customerId, setCustomerId] = useState(1);
  useEffect(() => {
    setModalShow(true);
  }, []);
  const initialState = <p>Options</p>;

  const reducer = (state, action) => {
    switch (action.type) {
      case "INFO":
        return <CustomerInfo customer={customerId} />;
      case "TICKETS":
        return <CustomerTicketsMain customer={customerId} />;
      case "SALES":
        return <CustomerSalesMain customer={customerId} />;
      default:
        return initialState;
    }
  };
  const [modalShow, setModalShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchResultHandler = (data) => {
    console.log(data, "FROM MAIN");

    setCustomerId(data);
  };
  const classesHandler = (e) => {
    const children = [].slice.call(navBarRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <>
      <CRMSearchModal
        passData={searchResultHandler}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Section>
        <Navbar
          className={props.className}
          ref={navBarRef}
          onClick={classesHandler}
        >
          <Nav onClick={() => dispatch({ type: "INFO" })} className={"active"}>
            Info
          </Nav>
          <Nav onClick={() => dispatch({ type: "TICKETS" })}>Tickets</Nav>
          <Nav onClick={() => dispatch({ type: "SALES" })}>Sales</Nav>
        </Navbar>
        {state}
      </Section>
    </>
  );
}

export default MainSearch;
