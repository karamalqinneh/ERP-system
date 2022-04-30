import styled from "styled-components";
import MainHeader from "../../UI/headers/mainHeader";
import Signin from "../auth/login";
import Slogan from "./slogan";

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 10vh auto 10vh auto 15vh auto;
  grid-template-columns: auto auto 15vw auto auto;
  justify-content: center;
  align-items: center;
`;

const StyledMainHeader = styled(MainHeader)`
  grid-area: 1 / 1 / 2 / 5;
`;

const StyledSignin = styled(Signin)`
  grid-area: 3 / 4 / 4 / 5;
`;

const StyledSlogan = styled(Slogan)`
  grid-area: 3 / 2 / 4 / 3;
`;

function Home(props) {
  return (
    <Section>
      <StyledMainHeader></StyledMainHeader>
      <StyledSignin></StyledSignin>
      <StyledSlogan></StyledSlogan>
    </Section>
  );
}

export default Home;
