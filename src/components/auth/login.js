import { useContext, useState } from "react";

import { When } from "react-if";
import styled from "styled-components";

import Button from "../../UI/button";
import image from "../../assets/login.png";
import { LoginContext } from "../context/auth/login";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fefefe;
`;

const Image = styled.img`
  height: 4rem;
  width: 4rem;
  background-color: #fefefe;
`;

const Input = styled.input`
  width: 20vw;
  height: 3rem;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.1rem;
  text-align: center;
  background-color: #fefefe;
`;

const RemmemberMe = styled.div`
  margin-top: 1rem;
  overflow: none;
  width: auto;
  background-color: #fefefe;
`;

const StyledButton = styled(Button)`
  background-color: rgba(9, 200, 195, 0.8);
  border-color: rgb(9, 200, 195);
  width: 15vw;
  &:hover {
    background-color: rgb(9, 200, 195);
  }
`;

const Link = styled.a`
  margin-top: 1rem;
  text-decoration: underline;
  color: blue;
  background-color: #fefefe;
`;

function Signin(props) {
  const login = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login.login(username, password);
  }
  return (
    <Form className={props.className} onSubmit={handleSubmit}>
      <Image src={image} />
      <h1 style={{ backgroundColor: "#fefefe" }}>Sign in</h1>
      <Input
        type="email"
        placeholder="Email Address"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <RemmemberMe>
        <input
          type="checkbox"
          style={{
            backgroundColor: "#fefefe",
            width: "1.2rem",
            height: "1.2rem",
          }}
        />
        <label style={{ marginLeft: "0.5rem", backgroundColor: "#fefefe" }}>
          Remmember me
        </label>
      </RemmemberMe>
      <StyledButton>Sign in</StyledButton>
      <Link>Forgot Password?</Link>
      <p style={{ backgroundColor: "#fefefe" }}>
        If you don't have an account please contact your system adminstrator
      </p>
    </Form>
  );
}

export default Signin;
