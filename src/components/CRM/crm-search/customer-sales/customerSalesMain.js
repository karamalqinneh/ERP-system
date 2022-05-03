import SalesHistoyTable from "../../../sales/sales-history/salesHistoryTable";
import { useEffect } from "react";

function CustomerSalesMain(props) {
  let customerSales = [
    {
      id: "1",
      status: "Closed",
      product: "Ball Valve",
      orderDate: "04-05-2022",
      details: {
        quantity: 300,
        unitPrice: 2.25,
        netPrice: 750,
        tax: { taxExemption: true, VAT: 2.5 },
        totalPaymentAmount: 779,
        paymentMethod: "L/C",
        fullfillmentDate: "04-06-2022",
      },
    },
  ];

  return <SalesHistoyTable sales={customerSales} customerName="John Doe " />;
}

export default CustomerSalesMain;
