import styled from "styled-components";
import Button from "../../../UI/button";
import { useState } from "react";
import SalesHistoyDetailsModal from "./salesHistoryDetailsModal";
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

const StyledButton = styled(Button)`
  height: 1.5rem;
  font-size: 1rem;
  width: 7.5vw;
  margin-top: 0rem;
`;

function SalesHistoyTable(props) {
  const [modalShow, setModalShow] = useState(false);
  // send a request to get his name and contact info
  let user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "962790499988",
  };
  let rows = props.sales.map((ele) => {
    return (
      <>
        <tr key={ele.id}>
          <Td colSpan="2">{ele.id}</Td>
          <Td colSpan="2">{ele.status}</Td>
          <Td colSpan="2">{ele.orderDate}</Td>
          <Td colSpan="2">{ele.product}</Td>
          <Td colSpan="2" onClick={() => setModalShow(true)}>
            <StyledButton>Details</StyledButton>
          </Td>
        </tr>
        <SalesHistoyDetailsModal
          orderData={ele}
          userData={user}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  });
  return (
    <Table>
      <tbody>
        <tr>
          <Td colSpan="10">{props.customerName}Orders History</Td>
        </tr>
        <tr>
          <Td colSpan="2">ID</Td>
          <Td colSpan="2">State</Td>
          <Td colSpan="2">Order Date</Td>
          <Td colSpan="2">Product</Td>
          <Td colSpan="2">Details</Td>
        </tr>
        {rows}
      </tbody>
    </Table>
  );
}

export default SalesHistoyTable;
