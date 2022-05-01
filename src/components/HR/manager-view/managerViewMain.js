import styled from "styled-components";
import Card from "../../../UI/card";
import RequestsTable from "./requestsTable";
import Button from "../../../UI/button";
import { useRef, useState } from "react";

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const H1 = styled.h1`
  color: rgb(9, 200, 195);
  width: 100%;
  height: 3vh;
  font-size: 1.6rem;
  text-align: center;
  font-weight: 600;
  background-color: #fefefa;
`;

const KeysContainer = styled.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Keys = styled(Button)`
  width: 30%;

  &.active {
    background: #b5b3b3;
  }
  &:hover {
    background: #b5b3b3;
  }
`;

function ManagerViewMain(props) {
  let leaveRequests = [
    {
      id: "1",
      employee: "Test 1",
      date: "04-05-2022",
      startTime: "09:00AM",
      endTime: "10:00AM",
      comments: "TEST.....................",
      employeeBalance: 12.4,
    },
    {
      id: "2",
      employee: "Test 2",
      date: "04-05-2022",
      startTime: "09:00AM",
      endTime: "10:00AM",
      comments: "TEST.....................",
      employeeBalance: 12.4,
    },
    {
      id: "2",
      employee: "Test 2",
      date: "04-05-2022",
      startTime: "09:00AM",
      endTime: "10:00AM",
      comments: "TEST.....................",
      employeeBalance: 12.4,
    },
  ];

  let vacationRequests = [
    {
      id: "3",
      employee: "Test 3",
      startDate: "04-05-2022",
      endDate: "07-05-2022",
      comments: "TEST.....................",
      employeeBalance: 12.4,
    },
    {
      id: "4",
      employee: "Test 4",
      startDate: "04-05-2022",
      endDate: "07-05-2022",
      comments: "TEST.....................",
      employeeBalance: 12.4,
    },
  ];
  let [renderedData, setRenderedData] = useState(leaveRequests);

  const requestDivRef = useRef();
  let requestHandler;
  const classesHandler = (e) => {
    const children = [].slice.call(requestDivRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
    requestHandler = e.target.innerHTML;
    requestHandler === "Vacations"
      ? setRenderedData(vacationRequests)
      : setRenderedData(leaveRequests);
  };

  return (
    <Container>
      <H1>Requests</H1>
      <KeysContainer ref={requestDivRef} onClick={classesHandler}>
        <Keys value={"Leaves"}>Leaves</Keys>
        <Keys value={"Vacations"}>Vacations</Keys>
      </KeysContainer>
      <RequestsTable requests={renderedData} />
    </Container>
  );
}

export default ManagerViewMain;
