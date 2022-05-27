import { useEffect, useState } from "react";

import axios from "axios";

import TicketsTable from "../../tickets-system/tickets-tables/ticketsTable";

function CustomerTicketsMain(props) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `http://localhost:3001/tickets/customer/${props.customer}`
      );

      setTickets(response.data);
    };
    fetchData();
  }, []);

  return <TicketsTable tickets={tickets} />;
}

export default CustomerTicketsMain;
