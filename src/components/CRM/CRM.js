import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import LoggedinHeader from "../../UI/headers/loggedinHeader";
import { useReducer, useState } from "react";
import data from "../../data";
import MainSearch from "./crm-search/main";
import MainTicketsSystem from "./tickets-system/mainTicketsSystem";
import CustomersList from "./customer-list/customersListMain";
import AddCustomerForm from "./add-customers/addCustomersForm";
import Auth from "../context/auth/auth";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 5vw 1fr 10vh;
  grid-template-columns: 1fr 2vw;
  width: 80vw;
  height: 100vh;
  position: relative;
  left: 20vw;
  overflow-y: auto;
`;

const StyledInnerHeader = styled(InnerHeader)`
  grid-area: 1 / 1 / 2 / 3;
`;
const Div = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  margin-left: 4rem;
`;

const initialState = (
  <Div>
    <CustomersList />
  </Div>
);

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
    <>
      <LoggedinHeader />
      <div style={{ display: "flex" }}>
        <SideBar tabsData={dataArray} tabName="CRM"></SideBar>
        <Section>
          <StyledInnerHeader></StyledInnerHeader>
          <Auth>{state}</Auth>
        </Section>
      </div>
    </>
  );
}

export default CRM;
