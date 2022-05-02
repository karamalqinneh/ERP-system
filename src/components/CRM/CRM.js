import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import { useReducer } from "react";
import data from "../../data";

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

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return <Div>Search</Div>;
    case "ADD":
      return <Div>Add Customers</Div>;
    case "LEAD":
      return <Div>Generate Leads</Div>;
    case "TICKET":
      return <Div>Tickets System</Div>;
    default:
      return initialState;
  }
};

function CRM() {
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
