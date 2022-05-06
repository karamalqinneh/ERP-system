import styled from "styled-components";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { Form } from "react-bootstrap";

const Header = styled.header`
  display: flex;
  background-color: rgb(9, 175, 175);
  height: 10vh;
  width: 100vw;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
`;

const Data = styled.div`
  background-color: rgb(9, 175, 175);
  display: felx;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 10vh;
`;

const Image = styled.img`
  width: 5rem;
  height: 3.33rem;
  background: transparent;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  background: transparent;
`;

const Name = styled.h3`
  background-color: rgb(9, 175, 175);
  color: #fefefe;
  font-size: 1.5rem;
`;

const StyledForm = styled(Form)`
  background-color: rgb(9, 175, 175);
  display: felx;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 10vh;
  margin-left: 1vw;
`;

const Search = styled(Form.Control)`
  font-size: 1.1rem;
  height: 6vh;
  margin-left: 3vw;
`;

const LoginInfo = styled.div`
  display: felx;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  height: 10vh;
  background-color: rgb(9, 175, 175);
  margin-left: auto;
`;
const UserInfo = styled.div`
  background-color: rgb(9, 175, 175);
  height: 10vh;
  margin-left: 1vw;
`;

const UserName = styled.h5`
  background-color: rgb(9, 175, 175);
  color: #fefefe;
  font-size: 1rem;
  margin-top: 2vh;
  text-align: center;
`;

const Postion = styled.p`
  background-color: rgb(9, 175, 175);
  color: #fefefe;
  font-size: 0.75rem;
  text-align: center;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7.5px 5px 0 5px;
  border-color: #fefefe transparent transparent transparent;
  background-color: rgb(9, 175, 175);
  margin-left: 20px;
`;

function LoggedinHeader() {
  return (
    <Header>
      <Data>
        <Image src={logo} alt="logo" />
        <Name>ERP System</Name>
      </Data>
      <StyledForm>
        <Search type="text" placeholder="Search..." />
      </StyledForm>
      <LoginInfo>
        <Avatar src={avatar} alt="logo" />
        <UserInfo>
          <UserName>Karam Al-Qinneh</UserName>
          <Postion>Software Enginner</Postion>
        </UserInfo>
        <Triangle />
      </LoginInfo>
    </Header>
  );
}

export default LoggedinHeader;
