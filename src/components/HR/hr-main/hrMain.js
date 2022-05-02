import styled from "styled-components";
import Card from "../../../UI/card";
import VacationBalance from "../vaction-request/vacationBalance";
import RequestsHistory from "./requestsHistory";
import PendingRequest from "./pendingRequests";

const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  background-color: #fefefe;
`;

const PrimaryData = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: #fefefe;
`;
const SecondaryData = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: #fefefe;
  margin-left: 5rem;
`;
const HistoryTable = styled(RequestsHistory)`
  grid-area: 2/ 1 / 3 / 2;
  background-color: #fefefe;
`;
const PendingTable = styled(PendingRequest)`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #fefefe;
  margin-left: 5rem;
`;

const Data = styled.h1`
  background-color: #fefefe;
  font-size: 1.1rem;
`;

function HRMain() {
  let requestsHistory = [
    {
      id: 1,
      date: "05-07-2021",
      type: "Leave",
      reason: "There is no reasons",
      state: "Declined",
    },
    {
      id: 2,
      date: "05-11-2021",
      type: "Leave",
      reason: "There is no reasons",
      state: "Declined",
    },
    {
      id: 3,
      date: "05-02-2022",
      type: "Vacation",
      reason: "There is no reasons",
      state: "Declined",
    },
  ];
  return (
    <Card>
      <Section>
        <PrimaryData>
          <Data>Employee Name: Karam Al-Qinneh</Data>
          <Data>Department: IT</Data>
          <Data>Title: Software Engineer</Data>
        </PrimaryData>
        <SecondaryData>
          <Data>Basic Salary: 600</Data>
          <Data>Tenure: 1 year, 5 months</Data>
          <Data>Vacation Balance: 12.4</Data>
        </SecondaryData>
        <HistoryTable requestsHistory={requestsHistory} />
        <PendingTable pendingRequests={requestsHistory} />
      </Section>
    </Card>
  );
}

export default HRMain;
