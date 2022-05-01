import styled from "styled-components";
import { keyframes } from "styled-components";

const float = keyframes`
0%,
100% {
  transform: translateY(0rem);
}
50% {
  transform: translateY(1.5rem);
}
`;

const Container = styled.div`
  width: 50vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2vh solid rgba(9, 200, 195, 0.5);
  border-bottom: 2vh solid rgba(9, 200, 195, 0.5);
  animation: ${float} 3s linear infinite;
  border-radius: 25px;
  text-transform: capitalize;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: #fefefe;
`;

function Slogan(props) {
  return (
    <Container className={props.className}>
      <h1 style={{ backgroundColor: "#fefefe" }}>
        All-purpose software for you
      </h1>
    </Container>
  );
}

export default Slogan;
