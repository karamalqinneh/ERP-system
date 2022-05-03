import styled from "styled-components";
import Card from "../../../UI/card";
import CRMSearchModal from "./crmSearchModal";
import CustomerInfo from "./customerInfo";
import CustomerTicketsMain from "./customer-tickets/customerTicketsMain";
import CustomerSalesMain from "./customer-sales/customerSalesMain";
import { useState, useEffect, useReducer } from "react";

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

function MainSearch(props) {
  const [searchResult, setSearchResult] = useState("No Data");
  useEffect(() => {
    setModalShow(true);
  }, []);
  const initialState = <CustomerInfo customer={searchResult} />;

  const reducer = (state, action) => {
    switch (action.type) {
      case "INFO":
        return <CustomerInfo customer={searchResult} />;
      case "TICKETS":
        return <CustomerTicketsMain />;
      case "SALES":
        return <CustomerSalesMain />;
      default:
        return initialState;
    }
  };
  const [modalShow, setModalShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchResultHandler = (data) => {
    setSearchResult(data);
    console.log(searchResult, "FROM MAIN");
  };
  return (
    <>
      <CRMSearchModal
        passData={searchResultHandler}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Section>
        <Navbar className={props.className}>
          <Nav onClick={() => dispatch({ type: "INFO" })}>Info</Nav>
          <Nav onClick={() => dispatch({ type: "TICKETS" })}>Tickets</Nav>
          <Nav onClick={() => dispatch({ type: "SALES" })}>Sales</Nav>
        </Navbar>
        {state}
      </Section>
    </>
  );
}

export default MainSearch;
