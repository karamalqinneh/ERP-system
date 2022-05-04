import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import { useReducer, useState } from "react";
import data from "../../data";
import MainSearch from "./crm-search/main";
import MainTicketsSystem from "./tickets-system/mainTicketsSystem";
import CustomersList from "./customer-list/customersListMain";
import AddCustomerForm from "./add-customers/addCustomersForm";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 10vh 1fr 10vh;
  grid-template-columns: auto 5vw 1fr 1fr 5vw;
  width: 100%;
  height: 100%;
`;

const StyledSideBar = styled(SideBar)`
  grid-area: 1 / 1 / 5 / 2;
`;

const StyledInnerHeader = styled(InnerHeader)`
  grid-area: 1 / 4 / 2 / 6;
`;
const Div = styled.div`
  grid-area: 3 / 3 / 5 / 5;
  margin-left: 4rem;
  height: 10vh;
  background-color: #fefefe;
  border-radius: 3px;
`;

const initialState = <Div>Main</Div>;

function CRM() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        return (
          <Div>
            <MainSearch />
          </Div>
        );
      case "ADD":
        return (
          <Div>
            <AddCustomerForm />
          </Div>
        );
      case "LIST":
        return (
          <Div>
            <CustomersList />
          </Div>
        );
      case "TICKET":
        return (
          <Div>
            <MainTicketsSystem />
          </Div>
        );
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const dataArray = data(dispatch).CRM;
  return (
    <Section>
      <StyledInnerHeader></StyledInnerHeader>
      <StyledSideBar tabsData={dataArray} tabName="CRM"></StyledSideBar>
      {state}
    </Section>
  );
}

export default CRM;
