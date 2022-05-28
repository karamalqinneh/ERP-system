import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import Card from "../../../UI/card";
import SalaryTable from "./table";
import OptionsDropDown from "../../../UI/options";
import Button from "../../../UI/button";

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
  const [salaryData, setSalaryData] = useState({});
  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];
  const currentMonthHandler = async (e) => {
    const month = e.target.value;
    const user = 1;
    let salaryRequest = await axios.get(
      `http://localhost:3001/employee/${user}/salary-slip/${month}`
    );
    if (new Date() > new Date("2022", month, "01")) {
      setSalaryData({ ...salaryRequest.data, month: months[month - 1].name });
    } else {
      setSalaryData({
        basicSalary: 0,
        netPay: 0,
        otHours: 0,
        otPayment: 0,
        otherDeductions: 0,
        socialSecurity: 0,
        totalBonuses: 0,
        totalDeductions: 0,
        totalPayment: 0,
      });
    }
  };

  return (
    <MainContainer>
      <Container>
        <SalaryTable data={salaryData} />
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
