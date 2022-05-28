import { useRef, useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import Card from "../../../UI/card";
import RequestsTable from "./requestsTable";
import Button from "../../../UI/button";

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
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [vacationRequests, setVacationRequets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let managerId = 1;
      let vacationsResponse = await axios.get(
        `http://localhost:3001/manager/${managerId}/vacation-requests`
      );
      let leavesResponse = await axios.get(
        `http://localhost:3001/manager/${managerId}/leave-requests`
      );
      setLeaveRequests(leavesResponse.data);
      setVacationRequets(vacationsResponse.data);
    };
    fetchData();
  }, []);

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
