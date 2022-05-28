import styled from "styled-components";

const ModifiedOption = styled.option`
  height: 2.5rem;
  width: 17.5vw;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fefefa;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: rgb(9, 200, 195);
  text-align: center;
`;

const ModifiedSelect = styled.select`
  height: 2.5rem;
  width: 17.5vw;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fefefa;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: rgb(9, 200, 195);
  text-align: center;
`;

function OptionsDropDown(props) {
  let customInput = props.optionsData.map((ele) => (
    <ModifiedOption key={ele.value} value={ele.value}>
      {ele.name}
    </ModifiedOption>
  ));
  return <ModifiedSelect>{customInput}</ModifiedSelect>;
}

export default OptionsDropDown;
