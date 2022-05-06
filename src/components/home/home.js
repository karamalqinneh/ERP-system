import styled from "styled-components";
import MainHeader from "../../UI/headers/mainHeader";
import Signin from "../auth/login";
import Slogan from "./slogan";

const StyledDiv = styled.div`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='252' height='252' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(220)'%3E%3Crect width='100%25' height='100%25' fill='rgba(9, 200, 195,1)'/%3E%3Cpath d='M0 9.5a 10.5 10.5 0 0 1 10.5 10.5a 9.5 9.5 0 0 0 9.5 9.5v1a-10.5-10.5 0 0 1-10.5-10.5a-9.5-9.5 0 0 0-9.5-9.5z' fill='%23f8f9fc' filter='url(%23filter-doodad-1)'/%3E%3Cpath d='M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5zM20 69.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' fill='%23222d59' filter='url(%23filter-doodad-2)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeTurbulence baseFrequency='0.01 0.2' numOctaves='2' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='5' result='result2' xChannelSelector='R' yChannelSelector='G' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='compositeGraphic'/%3E%3CfeOffset in='compositeGraphic' result='fbSourceGraphic' dx='-0.5'/%3E%3C/filter%3E%3Cfilter id='filter-doodad-2'%3E%3CfeTurbulence baseFrequency='0.05 0.01' numOctaves='2' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='9' result='result2' xChannelSelector='R' yChannelSelector='G' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='compositeGraphic'/%3E%3CfeOffset in='compositeGraphic' result='fbSourceGraphic' dy='-0.9'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
`;

const Section = styled.section`
  display: grid;
  background: transparent;
  grid-template-rows: auto 10vh auto 10vh auto 15vh auto;
  grid-template-columns: 1fr 1fr 10vw 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledMainHeader = styled(MainHeader)`
  grid-area: 1 / 1 / 2 / 6;
  position: sticky;
`;

const StyledSignin = styled(Signin)`
  grid-area: 3 / 4 / 4 / 5;
`;

const StyledSlogan = styled(Slogan)`
  grid-area: 3 / 2 / 4 / 3;
`;

function Home(props) {
  return (
    <StyledDiv>
      <StyledMainHeader></StyledMainHeader>
      <Section>
        <StyledSignin></StyledSignin>
        <StyledSlogan></StyledSlogan>
      </Section>
    </StyledDiv>
  );
}

export default Home;
