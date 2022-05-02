import styled from "styled-components";
import Card from "../../../UI/card";
import CRMSearchModal from "./crmSearchModal";
import CustomerInfo from "./customerInfo";
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
  padding: 1rem;
  background-color: #fefefe;
`;

const Nav = styled.div`
  justify-content: center;
  color: rgba(9, 200, 195, 0.55);
  text-decoration: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: #fefefe;
`;

function MainSearch(props) {
  const [searchResult, setSearchResult] = useState("No Data");
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    setModalShow(true);
  }, []);
  const initialState = <CustomerInfo customer={searchResult} />;

  const reducer = (state, action) => {
    switch (action.type) {
      case "INFO":
        return <CustomerInfo customer={searchResult} />;
      case "TICKETS":
        return <div>Tickets</div>;
      case "SALES":
        return <div>Sales</div>;
      case "ACTIONS":
        return <div>Actions</div>;
      default:
        return initialState;
    }
  };
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
          <Nav onClick={() => dispatch("INFO")}>Info</Nav>
          <Nav onClick={() => dispatch("TICKETS")}>Tickets</Nav>
          <Nav onClick={() => dispatch("SALES")}>Sales</Nav>
          <Nav onClick={() => dispatch("ACTIONS")}>Actions</Nav>
        </Navbar>
        {state}
      </Section>
    </>
  );
}

export default MainSearch;
