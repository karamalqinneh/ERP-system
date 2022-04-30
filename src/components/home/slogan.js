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
  border-top: 2vh solid rgb(9, 200, 195);
  border-bottom: 2vh solid rgb(9, 200, 195);
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  animation: ${float} 3s linear infinite;
  border-radius: 7%;
`;

function Slogan(props) {
  return (
    <Container className={props.className}>
      <h1>All-purpose software for you</h1>
    </Container>
  );
}

export default Slogan;
