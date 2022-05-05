import styled from "styled-components";
import SuppliersTable from "./suppliersTable";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

function SuppliersMain(props) {
  let data = [
    {
      id: 1,
      name: "Test Supplies",
      productsGenre: "mechanical",
      location: "China",
      noOfPreviousInteractions: 23,
      accountSize: 440000,
      products: [
        {
          id: 1,
          itemType: "Ball Valve",
          productGroup: "Mechanical",
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
      ],
    },
    {
      id: 2,
      name: "Test2 Supplies",
      productsGenre: "Thermal",
      location: "Italy",
      noOfPreviousInteractions: 23,
      accountSize: 440000,
      products: [
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
      ],
    },
  ];
  return (
    <Section>
      <Header>Suppliers</Header>
      <SuppliersTable suppliers={data} />
    </Section>
  );
}

export default SuppliersMain;
