import styled from "styled-components";
import HeaderBar from "./header/headerBar";
import Intro from "./sections/intro";
import Integerations from "./sections/integerations";
import FitSection from "./sections/fitSection";
import Footer from "./footer/footer";

const Body = styled.section`
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
        <FitSection />
        <Footer />
      </Body>
    </>
  );
}

export default LandingPage;
