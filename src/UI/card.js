import styled from "styled-components";

const BaseCard = styled.div`
  padding: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
`;

function Card(props) {
  return <BaseCard className={props.className}>{props.children}</BaseCard>;
}

export default Card;
