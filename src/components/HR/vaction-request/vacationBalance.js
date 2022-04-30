import styled from "styled-components";

const Div = styled.div`
  color: rgb(9, 200, 195);
  width: 100%;
  height: 3vh;
  font-size: 1rem;
  text-align: center;
`;

function VacationBalance() {
  let amount = 12.34;
  return <Div>Vacation Balance: {amount}</Div>;
}

export default VacationBalance;
