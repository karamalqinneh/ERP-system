import styled from "styled-components";
import twitter from "../../../assets/social-media-icons/TW.jpg";
import facebook from "../../../assets/social-media-icons/FB.png";
import linkedIn from "../../../assets/social-media-icons/LI.png";
import instagram from "../../../assets/social-media-icons/IG.svg";

const Section = styled.section`
  width: 100vw;
  height: 80vh;
  background-color: rgb(9, 200, 195);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 85vw;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(9, 200, 195);
`;

const SubContainer = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(9, 200, 195);
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  background-color: rgb(9, 200, 195);
  margin-bottom: 5vh;
  color: #fefefe;
`;

const IconsDiv = styled.div`
  display: flex;
  background-color: rgb(9, 200, 195);
  width: 20vw;
  justify-content: space-around;
`;

const Image = styled.img`
  height: 2.5vh;
  width: 2.5vw;
  background-color: rgb(9, 200, 195);
`;

const DescMain = styled.p`
  font-size: 1rem;
  margin-bottom: 2vh;
  opacity: 90%;
  background-color: rgb(9, 200, 195);
  color: #fefefe;
`;
const Desc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1vh;
  background-color: rgb(9, 200, 195);
  color: #fefefe;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.1rem;
  background-color: #fefefe;
`;

function Footer() {
  return (
    <Section>
      <Container>
        <SubContainer>
          <SubTitle>ERP System</SubTitle>
          <IconsDiv>
            <Image src={facebook} />
            <Image src={twitter} />
            <Image src={instagram} />
            <Image src={linkedIn} />
          </IconsDiv>
        </SubContainer>
        <SubContainer style={{ width: "10vw" }}>
          <DescMain>Support</DescMain>
          <Desc>Contact Us</Desc>
          <Desc>FAQ</Desc>
          <Desc>Downloads</Desc>
        </SubContainer>
        <SubContainer style={{ width: "10vw" }}>
          <DescMain>ERP System</DescMain>
          <Desc>About Us</Desc>
          <Desc>Careers</Desc>
          <Desc>Newsroom</Desc>
        </SubContainer>
        <SubContainer style={{ width: "20vw" }}>
          <Desc>Stay up to date with the latest from us</Desc>
          <Input type="text" placeholder="   Your Email" />
        </SubContainer>
      </Container>
    </Section>
  );
}

export default Footer;
