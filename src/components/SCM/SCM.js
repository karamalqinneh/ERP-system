import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import { useReducer } from "react";
import data from "../../data";
import MainWarehouse from "./warehouse-managment/warehouseMain";
import SuppliersMain from "./suppliers/suppliersMain";
import LoggedinHeader from "../../UI/headers/loggedinHeader";
import Auth from "../context/auth/auth";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 5vh 1fr 10vh;
  grid-template-columns: 1fr 2vw;
  width: 80vw;
  height: 100vh;
  position: relative;
  left: 20vw;
  overflow-y: auto;
`;

const StyledInnerHeader = styled(InnerHeader)`
  grid-area: 1 / 1 / 2 / 3;
`;
const Div = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  margin-left: 4rem;
  height: 10vh;
  background-color: #fefefe;
  border-radius: 3px;
`;

const initialState = (
  <Div>
    <MainWarehouse />
  </Div>
);

function SCM() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "WAREHOUSE":
        return initialState;
      case "SUPPLIERS":
        return (
          <Div>
            <SuppliersMain></SuppliersMain>
          </Div>
        );
      case "LEAN":
        return <Div>ITEM</Div>;
      case "REPORTS":
        return <Div>Analytics and Reports</Div>;
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const dataArray = data(dispatch).SCM;
  return (
    <>
      <LoggedinHeader />
      <div style={{ display: "flex" }}>
        <SideBar tabsData={dataArray} tabName="SCM"></SideBar>
        <Section>
          <StyledInnerHeader></StyledInnerHeader>
          <Auth> {state}</Auth>
        </Section>
      </div>
    </>
  );
}

export default SCM;
