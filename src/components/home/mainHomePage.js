import styled from "styled-components";
import SideBar from "../../UI/side-bar/sideBar";
import InnerHeader from "../../UI/headers/inner-headers";
import LoggedinHeader from "../../UI/headers/loggedinHeader";
import { useReducer } from "react";
import data from "../../data";
import Login from "./login";
import Settings from "./settings/settings";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 5vw 1fr 10vh;
  grid-template-columns: 1fr 2vw;
  width: 80vw;
  position: relative;
  left: 20vw;
  overflow-y: scroll;
`;

const StyledInnerHeader = styled(InnerHeader)`
  grid-area: 1 / 1 / 2 / 3;
`;
const Div = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  margin-left: 4rem;
`;

const initialState = (
  <Div>
    <Login />
  </Div>
);

function Home() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "HOME":
        return (
          <Div>
            <div>Home</div>
          </Div>
        );
      case "LOGIN":
        return (
          <Div>
            <Login />
          </Div>
        );
      case "SETTINGS":
        return (
          <Div>
            <Settings />
          </Div>
        );
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const dataArray = data(dispatch).Home;

  return (
    <>
      <LoggedinHeader />
      <div style={{ display: "flex" }}>
        <SideBar tabsData={dataArray} tabName="Home"></SideBar>
        <Section>
          <StyledInnerHeader></StyledInnerHeader>
          {state}
        </Section>
      </div>
    </>
  );
}

export default Home;
