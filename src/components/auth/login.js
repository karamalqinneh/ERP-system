import styled from "styled-components";
import login from "../../assets/login.png";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  padding: 2.5rem;
  border: 1px solid rgba(9, 200, 195, 0.55);
  border-radius: 7.5%;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
`;

const Image = styled.img`
  height: 4rem;
  width: 4rem;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
`;

const RemmemberMe = styled.div`
  margin-top: 1rem;
  overflow: none;
  width: auto;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: #fefefa;
`;

const Link = styled.a`
  margin-top: 1rem;
  text-decoration: underline;
  color: blue;
`;

function Signin(props) {
  return (
    <Form className={props.className}>
      <Image src={login} />
      <h1>Sign in</h1>
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
      <RemmemberMe>
        <input type="checkbox" />
        <label style={{ marginLeft: "0.5rem" }}>Remmember me</label>
      </RemmemberMe>
      <Button>Sign in</Button>
      <Link>Forgot Password?</Link>
    </Form>
  );
}

export default Signin;
