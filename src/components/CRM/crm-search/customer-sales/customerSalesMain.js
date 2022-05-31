import { useEffect, useState } from "react";

import axios from "axios";

import SalesHistoyTable from "../../../sales/sales/sales-history/salesHistoryTable";

function CustomerSalesMain(props) {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    console.log(props.customer);
    const fetchData = async () => {
      let response = await axios.get(
        `http://localhost:3001/sales/customer/${props.customer}`
      );
      console.log(response.data);
      setSales(response.data);
    };
    fetchData();
  }, []);

  return <SalesHistoyTable sales={sales} customerName="John Doe " />;
}

export default CustomerSalesMain;
