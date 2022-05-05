import styled from "styled-components";
import Button from "../../../../UI/button";
import { Form } from "react-bootstrap";
import ItemModal from "./itemModal";
import { useState, useEffect, useRef } from "react";

const StyledForm = styled(Form)`
  width: 80%;
  display: flex;
  justify-content: space-around;
  background-color: #fefefa;
  margin-bottom: 1.5rem;
`;

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

function StockTable(props) {
  const [modalShow, setModalShow] = useState(false);
  const [filterdItems, setFilteredItems] = useState(props.items);
  let groupFilter = useRef();
  const groupChangeHandler = (e) => {
    setFilteredItems(
      props.items.filter((ele) => {
        if (groupFilter.current.value === "Filter By Product Group") {
          return true;
        } else {
          return ele.productGroup === groupFilter.current.value;
        }
      })
    );
  };
  let productGroup = [
    ...new Set(props.items.map((ele) => ele.productGroup)),
  ].map((ele, index) => <option key={index} value={ele}>{`${ele}`}</option>);
  let rows = filterdItems.map((ele) => {
    return (
      <>
        <tr key={ele.id}>
          <Td colSpan="2">{ele.id}</Td>
          <Td colSpan="2">{ele.itemType}</Td>
          <Td colSpan="2">{ele.productGroup}</Td>
          <Td colSpan="2">{ele.supplierName}</Td>
          <Td colSpan="2">{ele.quantity}</Td>
          <Td colSpan="2" onClick={() => setModalShow(true)}>
            <StyledButton>Details</StyledButton>
          </Td>
        </tr>
        <ItemModal
          info={ele}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  });
  return (
    <>
      <StyledForm>
        <Form.Select
          style={{ width: "45%" }}
          ref={groupFilter}
          onChange={groupChangeHandler}
        >
          <option>Filter By Product Group</option>
          {productGroup}
        </Form.Select>
      </StyledForm>
      <Table>
        <tbody>
          <tr>
            <Td colSpan="2">ID</Td>
            <Td colSpan="2">Item Type</Td>
            <Td colSpan="2">Product Group</Td>
            <Td colSpan="2">Supplier Name</Td>
            <Td colSpan="2">Quantity</Td>
            <Td colSpan="2">Details</Td>
          </tr>
          {rows}
        </tbody>
      </Table>
    </>
  );
}

export default StockTable;
