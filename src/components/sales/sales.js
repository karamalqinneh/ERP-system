import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import { useReducer } from "react";
import data from "../../data";
import SalesMain from "./sales/salesMain";
import PurchasesMain from "./purchases/purchasesMain";
import { Card } from "react-bootstrap";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 5vh 1fr 10vh;
  grid-template-columns: 1fr 2vw;
  width: 80vw;
  height: 100vh;
  position: fixed;
  left: 20vw;
  overflow-y: auto;
`;

const StyledInnerHeader = styled(InnerHeader)`
  grid-area: 1 / 1 / 2 / 3;
`;
const Div = styled(Card)`
  grid-area: 3 / 1 / 4 / 2;
  margin-left: 4rem;
  background-color: #fefefe;
  border-radius: 3px;
`;

const initialState = (
  <Div>
    <SalesMain />
  </Div>
);

function Sales() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SALES":
        return initialState;
      case "PURCHASES":
        return (
          <Div>
            <PurchasesMain />
          </Div>
        );
      case "REPORTS":
        return <Div>Analytics and Reports</Div>;
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const dataArray = data(dispatch).sales;
  return (
    <div style={{ display: "flex" }}>
      <SideBar tabsData={dataArray} tabName="Sales"></SideBar>
      <Section>
        <StyledInnerHeader></StyledInnerHeader>
        {state}
      </Section>
    </div>
  );
}

export default Sales;
