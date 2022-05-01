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

function RequestsHistory(props) {
  let rows = props.requestsHistory.map((ele) => {
    return (
      <tr key={ele.id}>
        <Td colSpan="2">{ele.date}</Td>
        <Td colSpan="2">{ele.type}</Td>
        <Td colSpan="2">{ele.state}</Td>
        <Td colSpan="2">{ele.reason}</Td>
      </tr>
    );
  });

  return (
    <Table className={props.className}>
      <tbody>
        <tr style={{ fontWeight: "600" }}>
          <Td colSpan="8">Requests History</Td>
        </tr>
        <tr style={{ fontWeight: "600" }}>
          <Td colSpan="2">Date</Td>
          <Td colSpan="2">Type</Td>
          <Td colSpan="2">State</Td>
          <Td colSpan="2">Reason</Td>
        </tr>
        {rows}
      </tbody>
    </Table>
  );
}

export default RequestsHistory;
