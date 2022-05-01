import styled from "styled-components";

const Div = styled.div`
  color: rgb(9, 200, 195);
  width: 100%;
  height: 3vh;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 600;
  background-color: #fefefa;
`;

function VacationBalance(props) {
  let amount = 12.34;
  return <Div className={props.className}>Vacation Balance: {amount}</Div>;
}

export default VacationBalance;
