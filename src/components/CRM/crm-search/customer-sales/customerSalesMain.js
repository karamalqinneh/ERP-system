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
  // let customerSales = [
  //   {
  //     salesID: 1,
  //     customerID: 25,
  //     productGroup: "Mechanical",
  //     product: "Ball Bearings",
  //     status: "pending",
  //     modelName: "BB 212",
  //     supplierName: "Test Supplies",
  //     quantity: 22,
  //     taxExemption: true,
  //     vat: 6.4,
  //     unitPrice: 33,
  //     paymentMethod: "L/C",
  //     orderDate: "2022-05-04",
  //     fullfillmentDate: "2022-05-22",
  //   },
  // ];

  return <SalesHistoyTable sales={sales} customerName="John Doe " />;
}

export default CustomerSalesMain;
