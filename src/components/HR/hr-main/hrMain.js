import { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import axios from "axios";

import Card from "../../../UI/card";
import RequestsHistory from "./requestsHistory";
import PendingRequest from "./pendingRequests";
import { LoginContext } from "../../context/auth/login";

const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  background-color: #fefefe;
  gap: 3rem;
`;

const PrimaryData = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: #fefefe;
`;
const SecondaryData = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: #fefefe;
`;
const HistoryTable = styled(RequestsHistory)`
  grid-area: 2/ 1 / 3 / 2;
  background-color: #fefefe;
`;
const PendingTable = styled(PendingRequest)`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #fefefe;
`;

const Data = styled.h1`
  background-color: #fefefe;
  font-size: 1.1rem;
`;

function HRMain() {
  const login = useContext(LoginContext);
  const [requestsHistory, setRequestsHistory] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [employeeInfo, setEmployeeInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `http://localhost:3001/employee/${login.user.id}/requests`
      );
      let employeeInfoResponse = await axios.get(
        `http://localhost:3001/employee/${login.user.id}/info`
      );
      setEmployeeInfo(employeeInfoResponse.data);
      let pending = [];
      let history = [];
      response.data.forEach((ele) => {
        if (ele.state == "Pending") {
          pending.push(ele);
        } else {
          history.push(ele);
        }
      });
      setRequestsHistory(history);
      setPendingRequests(pending);
    };
    fetchData();
  }, [login.user.id]);
  return (
    <Card>
      <Section>
        <PrimaryData>
          <Data>Employee Name: {employeeInfo.employeeName}</Data>
          <Data>Department: {employeeInfo.department}</Data>
          <Data>Title: {employeeInfo.jobTitle}</Data>
        </PrimaryData>
        <SecondaryData>
          <Data>Basic Salary: {employeeInfo.basicSalary}</Data>
          <Data>Tenure: {employeeInfo.tenure.toFixed(2)} Months</Data>
          <Data>
            Vacation Balance: {employeeInfo.vacationBalance.toFixed(2)}
          </Data>
        </SecondaryData>
        <HistoryTable requestsHistory={requestsHistory} />
        <PendingTable pendingRequests={pendingRequests} />
      </Section>
    </Card>
  );
}

export default HRMain;
