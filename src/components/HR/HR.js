import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import { useReducer } from "react";
import LeaveRequestMain from "./leave-request/leaveRequestMain";
import VacationRequestMain from "./vaction-request/vacationRequestMain";
import data from "../../data";
import SalarySlipMain from "./salary-slip/salarySlipMain";
import ManagerViewMain from "./manager-view/managerViewMain";

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
      return (
        <Div>
          <VacationRequestMain />
        </Div>
      );
    case "SALARY":
      return (
        <Div>
          <SalarySlipMain />
        </Div>
      );
    case "MANAGER":
      return (
        <Div>
          <ManagerViewMain />
        </Div>
      );
    default:
      return initialState;
  }
};

function HR() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dataArray = data(dispatch).HR;
  return (
    <Section>
      <StyledInnerHeader></StyledInnerHeader>
      <StyledSideBar tabsData={dataArray} tabName="HR"></StyledSideBar>
      {state}
    </Section>
  );
}

export default HR;
