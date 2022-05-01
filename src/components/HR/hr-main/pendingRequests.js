import styled from "styled-components";

const Td = styled.td`
  border: 1px solid black;
  background-color: #fefefa;
  text-align: center;
  padding: 0.4rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #fefefa;
  width: 20vw;
  border-radius: 10px;
  margin-top: 1rem;
`;

function PendingRequest(props) {
  let rows = props.pendingRequests.map((ele) => {
    return (
      <tr key={ele.id}>
        <Td colSpan="2">{ele.date}</Td>
        <Td colSpan="2">{ele.type}</Td>
        <Td colSpan="2">{ele.state}</Td>
      </tr>
    );
  });

  return (
    <Table className={props.className}>
      <tbody>
        <tr style={{ fontWeight: "600" }}>
          <Td colSpan="6">Requests History</Td>
        </tr>
        <tr style={{ fontWeight: "600" }}>
          <Td colSpan="2">Date</Td>
          <Td colSpan="2">Type</Td>
          <Td colSpan="2">State</Td>
        </tr>
        {rows}
      </tbody>
    </Table>
  );
}

export default PendingRequest;
