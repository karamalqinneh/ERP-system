import SalesHistoyTable from "../../../sales/sales/sales-history/salesHistoryTable";
import { useEffect } from "react";

function CustomerSalesMain(props) {
  let customerSales = [
    {
      salesID: 1,
      customerID: 25,
      productGroup: "Mechanical",
      product: "Ball Bearings",
      status: "pending",
      modelName: "BB 212",
      supplierName: "Test Supplies",
      quantity: 22,
      taxExemption: true,
      vat: 6.4,
      unitPrice: 33,
      paymentMethod: "L/C",
      orderDate: "2022-05-04",
      fullfillmentDate: "2022-05-22",
    },
  ];

  return <SalesHistoyTable sales={customerSales} customerName="John Doe " />;
}

export default CustomerSalesMain;
