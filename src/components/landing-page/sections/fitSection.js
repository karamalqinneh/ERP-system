import banner from "../../../assets/banner.png";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 120vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 85vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  background-color: #fefefe;
  margin-bottom: 2vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background-color: #fefefe;
  margin-bottom: 2vh;
`;
const SubTitle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  background-color: #fefefe;
  margin-bottom: 2vh;
  color: rgb(9, 200, 195);
`;

const Image = styled.img`
  width: 85vw;
  background-color: #fefefe;
`;

const Desc = styled.p`
  font-size: 1.1rem;
  background-color: #fefefe;
  margin-bottom: 2vh;
  opacity: 70%;
`;

function FitSection() {
  return (
    <Section>
      <Container>
        <Title>Whatever your business is,</Title>
        <MainTitle>
          <SubTitle>We</SubTitle> will fit it!
        </MainTitle>
        <Desc>
          The system is designed to fit a wide range of industries with
          countless customized apps
        </Desc>
        <Image src={banner} />
      </Container>
    </Section>
  );
}

export default FitSection;
