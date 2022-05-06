import SalesHistoryTable from "./salesHistoryTable";

function SalesHistory(props) {
  let data = [
    {
      salesID: 1,
      customerID: 22,
      productGroup: "Thermal",
      status: "pending",
      product: "Chiller",
      modelName: "CHZ22",
      supplierName: "Test Supplies",
      quantity: 22,
      taxExemption: true,
      vat: 6.4,
      unitPrice: 2400,
      netPrice: 48248,
      paymentMethod: "L/C",
      totalPaymentAmount: 51248,
      orderDate: "2022-05-04",
      fullfillmentDate: "2022-05-22",
    },
    {
      salesID: 2,
      customerID: 25,
      productGroup: "Mechanical",
      product: "Ball Bearings",
      status: "pending",
      modelName: "BB 212",
      supplierName: "Test Supplies",
      quantity: 22,
      taxExemption: true,
      vat: 6.4,
      unitPrice: 2400,
      netPrice: 48248,
      paymentMethod: "L/C",
      totalPaymentAmount: 51248,
      orderDate: "2022-05-04",
      fullfillmentDate: "2022-05-22",
    },
  ];
  return <SalesHistoryTable sales={data} />;
}

export default SalesHistory;
