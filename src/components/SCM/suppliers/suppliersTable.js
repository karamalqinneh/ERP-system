import styled from "styled-components";
import Button from "../../../UI/button";
import { Form } from "react-bootstrap";
import SupplierModal from "./supplierModal";
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

function SuppliersTable(props) {
  const [modalShow, setModalShow] = useState(false);
  const [filterdItems, setFilteredItems] = useState(props.suppliers);
  let locationFilter = useRef();
  const locationChangeHandler = (e) => {
    setFilteredItems(
      props.suppliers.filter((ele) => {
        if (locationFilter.current.value === "Filter By Location") {
          return true;
        } else {
          return ele.location === locationFilter.current.value;
        }
      })
    );
  };
  let locationGroup = [
    ...new Set(props.suppliers.map((ele) => ele.location)),
  ].map((ele, index) => <option key={index} value={ele}>{`${ele}`}</option>);
  let rows = filterdItems.map((ele) => {
    return (
      <>
        <tr key={ele.id}>
          <Td colSpan="2">{ele.id}</Td>
          <Td colSpan="2">{ele.name}</Td>
          <Td colSpan="2">{ele.productsGenre}</Td>
          <Td colSpan="2">{ele.location}</Td>
          <Td colSpan="2">{ele.accountSize}</Td>
          <Td colSpan="2" onClick={() => setModalShow(true)}>
            <StyledButton>Details</StyledButton>
          </Td>
        </tr>
        <SupplierModal
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
          ref={locationFilter}
          onChange={locationChangeHandler}
        >
          <option>Filter By Location</option>
          {locationGroup}
        </Form.Select>
      </StyledForm>
      <Table>
        <tbody>
          <tr>
            <Td colSpan="2">ID</Td>
            <Td colSpan="2">Supplier Name</Td>
            <Td colSpan="2">Products Group</Td>
            <Td colSpan="2">Location</Td>
            <Td colSpan="2">Account Size</Td>
            <Td colSpan="2">Details</Td>
          </tr>
          {rows}
        </tbody>
      </Table>
    </>
  );
}

export default SuppliersTable;
