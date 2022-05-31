import { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import { Form } from "react-bootstrap";
import { When } from "react-if";

import { LoginContext } from "../../components/context/auth/login";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

const Header = styled.header`
  display: flex;
  background-color: rgb(9, 175, 175);
  height: 10vh;
  width: 100vw;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
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
  border-width: 10px 7.5px 0 7.5px;
  border-color: #fefefe transparent transparent transparent;
  background-color: rgb(9, 175, 175);
  margin-left: 20px;
  cursor: pointer;
`;

const OptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fefefe;
  width: 17.5vw;
  position: fixed;
  z-index: 10;
  top: 10vh;
  right: 4vw;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  width: 17.4vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 10vh;
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

function LoggedinHeader() {
  const login = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(login.user);
    setUsername(login.user.name);
    setJobTitle(login.user.jobTitle);
  }, [login.user]);
  return (
    <>
      <Header>
        <Data>
          <Image src={logo} alt="logo" />
          <Name>ERP System</Name>
        </Data>
        <StyledForm>
          <Search type="text" placeholder="Search..." />
        </StyledForm>
        <When condition={login.loggedIn}>
          <LoginInfo>
            <Avatar src={avatar} alt="logo" />
            <UserInfo>
              <UserName>{username}</UserName>
              <Postion>{jobTitle}</Postion>
            </UserInfo>
            <Triangle onClick={() => setShow(!show)} />
          </LoginInfo>
        </When>
      </Header>
      {show && (
        <OptionsDiv>
          <Option>Profile Settings</Option>
          <Option
            onClick={() => {
              login.logout();
              setShow(!show);
            }}
          >
            Log out
          </Option>
        </OptionsDiv>
      )}
    </>
  );
}

export default LoggedinHeader;
