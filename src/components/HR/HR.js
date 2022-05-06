import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import LoggedinHeader from "../../UI/headers/loggedinHeader";
import { useReducer } from "react";
import LeaveRequestMain from "./leave-request/leaveRequestMain";
import VacationRequestMain from "./vaction-request/vacationRequestMain";
import data from "../../data";
import SalarySlipMain from "./salary-slip/salarySlipMain";
import ManagerViewMain from "./manager-view/managerViewMain";
import HRMain from "./hr-main/hrMain";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 5vw 1fr 10vh;
  grid-template-columns: 1fr 2vw;
  width: 80vw;
  height: 100vh;
  position: fixed;
  left: 20vw;
  overflow-y: auto;
`;

const StyledInnerHeader = styled(InnerHeader)`
  grid-area: 1 / 1 / 2 / 3;
`;
const Div = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  margin-left: 4rem;
  height: 10vh;
  border-radius: 3px;
`;
// background-color: #fefefe;

const initialState = (
  <Div>
    <HRMain />
  </Div>
);

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
    <>
      <LoggedinHeader />
      <div style={{ display: "flex" }}>
        <SideBar tabsData={dataArray} tabName="HR"></SideBar>
        <Section>
          <StyledInnerHeader></StyledInnerHeader>
          {state}
        </Section>
      </div>
    </>
  );
}

export default HR;
