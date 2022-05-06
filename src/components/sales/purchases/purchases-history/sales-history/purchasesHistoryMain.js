import PurchasesHistoyTable from "./purchasesHistoryTable";

function PurchasesHistoryMain(props) {
  let data = [
    {
      purchaseID: 1,
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
      purchaseID: 2,
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
  return <PurchasesHistoyTable purchases={data} />;
}

export default PurchasesHistoryMain;
