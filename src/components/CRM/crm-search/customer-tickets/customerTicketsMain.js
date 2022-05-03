import styled from "styled-components";
import Card from "../../../../UI/card";
import TicketsTable from "../../tickets-system/ticketsTable";
import Button from "../../../../UI/button";
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

function CustomerTicketsMain(props) {
  let customerTickets = [
    {
      id: "1",
      resolution: "Sales",
      date: "04-05-2022",
      details: "Pending Shipment",
      updates: {
        "05-05-2022-09:23": "Test Message",
        "05-05-2022-13:23": "Test Message",
      },
      status: "Open",
    },
    {
      id: "2",
      resolution: "Marketing",
      date: "04-05-2022",
      details: "Campaign didn't meet targets",
      updates: {
        "05-05-2022-09:23": "Test Message",
        "05-05-2022-13:23": "Test Message",
      },
      status: "Resolved",
    },
  ];

  return <TicketsTable tickets={customerTickets} customerName="John Doe " />;
}

export default CustomerTicketsMain;
