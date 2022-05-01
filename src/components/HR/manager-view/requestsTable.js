import styled from "styled-components";
import logo from "../../../assets/logo.png";
import Button from "../../../UI/button";

const Td = styled.td`
  border: 1px solid black;
  background-color: #fefefa;
  text-align: center;
  padding: 0.4rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #fefefa;
  width: 80%;
  border-radius: 10px;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 2rem;
  background-color: #fefefa;
`;

const StyledButton = styled(Button)`
  height: 1.5rem;
  font-size: 1rem;
  width: 7.5vw;
  margin-top: 0rem;
`;

function RequestsTable(props) {
  const acceptHandler = (req) => {
    console.log("ACC", req.id);
  };
  const declineHandler = (req) => {
    console.log("DEC", req.id);
  };
  let rows = props.requests.map((ele) => {
    return (
      <>
        <tr key={ele.id}>
          <Td colSpan="2">{ele.employee}</Td>
          <Td colSpan="2">
            <StyledButton>Details</StyledButton>
          </Td>
          <Td colSpan="2">
            <StyledButton
              onClick={() => {
                acceptHandler(ele);
              }}
            >
              Accept
            </StyledButton>
          </Td>
          <Td colSpan="2">
            <StyledButton
              onClick={() => {
                console.log(ele);
                declineHandler(ele);
              }}
            >
              Decline
            </StyledButton>
          </Td>
        </tr>
      </>
    );
  });
  //   let forms = props.requests.map((ele) => (

  //   ));
  return (
    <Table>
      <tbody>
        <tr>
          <Td colSpan="2" rowSpan="5">
            <Image src={logo} />
          </Td>
          <Td colSpan="6" rowSpan="5">
            Demo Company
          </Td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <Td colSpan="8">Requests</Td>
        </tr>
        {rows}
      </tbody>
    </Table>
  );
}

export default RequestsTable;
