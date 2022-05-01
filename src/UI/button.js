import styled from "styled-components";

const StyledButton = styled.button`
  height: 2.5rem;
  width: 40%;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(9, 200, 195);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%);
  color: #fefefa;
`;

function Button(props) {
  return (
    <StyledButton className={props.className}>{props.children}</StyledButton>
  );
}

export default Button;
