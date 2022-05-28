import { useState } from "react";

import styled from "styled-components";
import axios from "axios";

import logo from "../../../assets/logo.png";
import Button from "../../../UI/button";
import RequestDetailsModal from "./requestDetailModal";
const Td = styled.td`
  border: 1px solid black;
  background-color: #fefefa;
  text-align: center;
  padding: 0.4rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #fefefa;
  width: 80%;
  border-radius: 10px;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 2rem;
  background-color: #fefefa;
`;

const StyledButton = styled(Button)`
  height: 1.5rem;
  font-size: 1rem;
  width: 7.5vw;
  margin-top: 0rem;
`;

function RequestsTable(props) {
  const [modalShow, setModalShow] = useState(false);
  let managerId = 1;
  const acceptHandler = async (req) => {
    if (req.type == "Vacation") {
      let request = await axios.put(
        `http://localhost:3001/manager/${managerId}/update-vacations`,
        { action: "ACC", id: req.id }
      );
      console.log(request);
    } else {
      let request = await axios.put(
        `http://localhost:3001/manager/${managerId}/update-leaves`,
        { action: "ACC", id: req.id }
      );
      console.log(request);
    }
  };
  const declineHandler = async (req) => {
    if (req.type == "Vacation") {
      let request = await axios.put(
        `http://localhost:3001/manager/${managerId}/update-vacations`,
        { action: "DEC", id: req.id }
      );
      console.log(request);
    } else {
      let request = await axios.put(
        `http://localhost:3001/manager/${managerId}/update-leaves`,
        { action: "DEC", id: req.id }
      );
      console.log(request);
    }
  };
  let rows = props.requests.map((ele) => {
    return (
      <>
        <tr key={ele.id}>
          <Td colSpan="2">{ele.employee}</Td>
          <Td colSpan="2" onClick={() => setModalShow(true)}>
            <StyledButton>Details</StyledButton>
          </Td>
          <Td
            colSpan="2"
            onClick={() => {
              acceptHandler(ele);
            }}
          >
            <StyledButton>Accept</StyledButton>
          </Td>
          <Td
            colSpan="2"
            onClick={() => {
              declineHandler(ele);
            }}
          >
            <StyledButton>Decline</StyledButton>
          </Td>
        </tr>
        <RequestDetailsModal
          modalData={ele}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  });
  return (
    <Table>
      <tbody>
        <tr>
          <Td colSpan="8">Requests</Td>
        </tr>
        {rows}
      </tbody>
    </Table>
  );
}

export default RequestsTable;
