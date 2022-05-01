import styled from "styled-components";
import Card from "../../../UI/card";
import SalaryTable from "./table";
import OptionsDropDown from "../../../UI/options";
import Button from "../../../UI/button";
import { useRef } from "react";

const MainContainer = styled.div`
  display: flex;
  width: 65vw;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: auto;
  background-color: #fefefa;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const StyledButton = styled(Button)`
  height: 2.5rem;
  width: 17.5vw;
  margin-top: 40%;
`;

function SalarySlipMain(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <MainContainer>
      <Container>
        <SalaryTable />
      </Container>
      <Container2>
        <form onChange={currentMonthHandler}>
          <OptionsDropDown optionsData={months} />
        </form>
        <StyledButton>Export PDF</StyledButton>
      </Container2>
    </MainContainer>
  );
}

export default SalarySlipMain;
