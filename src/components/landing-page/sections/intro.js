import picture from "../../../assets/picture.png";
import check from "../../../assets/check.png";
import styled from "styled-components";
import Button from "../../../UI/button";
import { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 120vh;
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`;

const Data = styled.div`
  height: 110vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const float = keyframes`
0%,
100% {
  transform: translateY(0rem);
}
50% {
  transform: translateY(1.5rem);
}
`;

const Image = styled.img`
  height: 70vh;
  width: 70vw;
  background-color: #fefefe;
  animation: ${float} 3s linear infinite;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  background-color: #fefefe;
  margin-bottom: 2vh;
`;
const Desc = styled.p`
  font-size: 1.3rem;
  background-color: #fefefe;
  margin-bottom: 2vh;
  opacity: 70%;
`;

const fill = keyframes`
0%{
  background-color: transparent;
}
100% {
  background-color: rgb(9, 200, 195);
}
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: initial;
  height: 7.5vh;
  width: 15vw;
  font-weight: 600;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid rgb(9, 200, 195);
  color: rgb(9, 200, 195);
  &:hover {
    animation: ${fill} 1s linear;
    background-color: rgb(9, 200, 195);
    color: #fefefe;
    font-weight: 700;
  }
`;

const Ul = styled.ul`
  width: 40vw;
  height: 15vh;
  display: flex;
  margin-left: calc(-3vw);
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
`;

const Li = styled.li`
  list-style-type: none;
  background-color: #fefefe;
`;

const Icon = styled.img`
  background-color: #fefefe;
  width: 1rem;
  height: 1rem;
`;

function Intro() {
  return (
    <Section>
      <Container>
        <Data>
          <Title>An ERP System to Run Your Entire Business</Title>
          <Desc>
            Manage your business, from sales and invoicing, your books, your
            clientele and workforce to your inventory and operations. With
            powerful, fully integrated business management modules implemented
            to meet your business needs anywhere, anytime, seamlessly track in
            real-time, control and grow your business while our software
            supplements your work.
          </Desc>
          <StyledButton href="/home">Start Now</StyledButton>
          <Ul>
            <Li>
              <Icon src={check} /> Free trial
            </Li>
            <Li>
              <Icon src={check} /> No credit card needed
            </Li>
            <Li>
              <Icon src={check} /> No Setup
            </Li>
          </Ul>
        </Data>
        <Image src={picture} alt="img" />
      </Container>
    </Section>
  );
}

export default Intro;
