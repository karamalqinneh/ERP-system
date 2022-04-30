import styled from "styled-components";

const BaseCard = styled.div`
  padding: 2.5rem;
  border: 1px solid rgba(9, 200, 195, 0.55);
  border-radius: 5%;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
`;

function Card(props) {
  return <BaseCard className={props.className}>{props.children}</BaseCard>;
}

export default Card;
