import styled from "styled-components";
import HeaderBar from "./header/headerBar";
import Intro from "./sections/intro";
import Integerations from "./sections/integerations";

const Body = styled.section`
  height: 300vh;
  width: 100vw;
  background-color: #fefefe;
`;

function LandingPage() {
  return (
    <>
      <HeaderBar />
      <Body>
        <Intro />
        <Integerations />
      </Body>
    </>
  );
}

export default LandingPage;
