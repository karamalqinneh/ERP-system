import { useEffect, useState } from "react";

import axios from "axios";

import TicketsTable from "../tickets-tables/ticketsTable";

function OpenTickets() {
  const [openTickets, setOpenTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://erp-system-2022.herokuapp.com/tickets/open-tickets"
      );
      let data = !response.data
        ? []
        : response.data.map((ele) => {
            let modifiedDate = new Date(ele.date).toISOString().split("T")[0];
            return {
              ...ele,
              date: modifiedDate,
            };
          });
      setOpenTickets(data);
    };
    fetchData();
  }, []);

  return <TicketsTable tickets={openTickets} />;
}

export default OpenTickets;
