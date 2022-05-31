import { useContext } from "react";

import styled from "styled-components";
import { When } from "react-if";

import { LoginContext } from "../context/auth/login";
import Signin from "../auth/login";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

const Loggedin = styled.h2`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

function Login(props) {
  const login = useContext(LoginContext);
  return (
    <Section>
      <When condition={!login.loggedIn}>
        <Signin />
      </When>
      <When condition={login.loggedIn}>
        <Loggedin>Welcome {login.user.name}</Loggedin>
      </When>
    </Section>
  );
}

export default Login;
