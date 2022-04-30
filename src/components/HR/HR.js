import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import { useState, useReducer } from "react";
import LeaveRequestMain from "./leave-request/leaveRequestMain";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 10vh 1fr 10vh;
  grid-template-columns: auto 5vw 1fr 1fr 5vw;
  justify-content: center;
  align-items: center;
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
`;

const initialState = <Div>Main</Div>;

const reducer = (state, action) => {
  switch (action.type) {
    case "LEAVE":
      return (
        <Div>
          <LeaveRequestMain />
        </Div>
      );
    case "VACATION":
      return <Div>Vacation</Div>;
    case "SALARY":
      return <Div>Salary</Div>;
    case "MANAGER":
      return <Div>Manager</Div>;
    default:
      return initialState;
  }
};

function HR() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = [
    {
      tabName: "Main",
      actionName: () => {
        dispatch({ type: "MAIN" });
      },
    },
    {
      tabName: "Leave Request",
      actionName: () => {
        dispatch({ type: "LEAVE" });
      },
    },
    {
      tabName: "Vacation Request",
      actionName: () => {
        dispatch({ type: "VACATION" });
      },
    },
    {
      tabName: "Salary Slip",
      actionName: () => {
        dispatch({ type: "SALARY" });
      },
    },
    {
      tabName: "Manager View",
      actionName: () => {
        dispatch({ type: "MANAGER" });
      },
    },
  ];
  return (
    <Section>
      <StyledInnerHeader></StyledInnerHeader>
      <StyledSideBar tabsData={data} tabName="HR"></StyledSideBar>
      {state}
    </Section>
  );
}

export default HR;
