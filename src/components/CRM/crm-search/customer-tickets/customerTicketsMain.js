import TicketsTable from "../../tickets-system/ticketsTable";
import { useEffect } from "react";

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
