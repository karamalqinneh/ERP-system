import styled from "styled-components";
import StockTable from "./stockTable";

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

function Stock() {
  // send a request to get the data
  let data = [
    {
      id: 1,
      itemType: "Ball Valve",
      productGroup: "mechanical",
      modelName: "BV 212",
      supplierName: "Test Supplies",
      quantity: 44,
      dimensions: { length: "122mm", height: "88mm" },
      unitPrice: 8,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 2,
      itemType: "Ball Bearing",
      productGroup: "mechanical",
      modelName: "BB 212",
      supplierName: "Test Supplies",
      quantity: 20,
      dimensions: { length: "122mm", height: "88mm" },
      unitPrice: 2,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 3,
      itemType: "Ball Valve",
      modelName: "BV212X",
      productGroup: "mechanical",
      supplierName: "Test2 Supplies",
      quantity: 44,
      dimensions: { length: "122mm", height: "88mm" },
      unitPrice: 6,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
    {
      id: 4,
      itemType: "Chiller",
      modelName: "CHL222",
      productGroup: "Thermal",
      supplierName: "Test2 Supplies",
      quantity: 5,
      dimensions: { length: "12200mm", height: "8800mm" },
      unitPrice: 2450,
      sales: 12,
      additionalInfo: {},
    },
  ];
  return (
    <>
      <Header>Stock</Header>
      <StockTable items={data} />
    </>
  );
}

export default Stock;
