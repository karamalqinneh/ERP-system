import styled from "styled-components";
import login from "../../assets/login.png";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  padding: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  background: #fefefe;
`;
// box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);

const Image = styled.img`
  height: 4rem;
  width: 4rem;
  background-color: #fefefe;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
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

const Button = styled.button`
  height: 2.5rem;
  width: 10vw;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #09c8c3;
  color: #fefefa;
  box-shadow: 1px 3px 1px rgb(0 0 0, 0.2);
`;

const Link = styled.a`
  margin-top: 1rem;
  text-decoration: underline;
  color: blue;
  background-color: #fefefe;
`;

function Signin(props) {
  return (
    <Form className={props.className}>
      <Image src={login} />
      <h1 style={{ backgroundColor: "#fefefe" }}>Sign in</h1>
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
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
      <Button>Sign in</Button>
      <Link>Forgot Password?</Link>
    </Form>
  );
}

export default Signin;
