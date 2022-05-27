import { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { Form } from "react-bootstrap";
import axios from "axios";

import Button from "../../../UI/button";
import Card from "../../../UI/card";
import CustomerDetailsModal from "./customerDetailsModal";

const Section = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

const Data = styled.h1`
  background-color: #fefefe;
  font-size: 1.3rem;
  color: rgb(9, 200, 195);
  margin-bottom: 1.5rem;
`;

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

function CustomersList(props) {
  let classFilter = useRef();
  let managerFilter = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [customersList, setCustomersList] = useState([]);
  let [filteredCustomers, setFilteredCustomers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:3001/get-customers");
      setFilteredCustomers(response.data);
    };
    fetchData();
  }, []);

  const classChangeHandler = (e) => {
    setFilteredCustomers(
      customersList.filter((ele) => {
        if (classFilter.current.value == "Filter By Classes") {
          return true;
        } else {
          return ele.customerClass == classFilter.current.value;
        }
      })
    );
  };
  const managerChangeHandler = (e) => {
    setFilteredCustomers(
      customersList.filter((ele) => {
        if (managerFilter.current.value == "Filter By Account Managers") {
          return true;
        } else {
          return ele.accountManager == managerFilter.current.value;
        }
      })
    );
  };

  let accountManagers = [
    ...new Set(customersList.map((ele) => ele.accountManager)),
  ].map((ele, index) => <option key={index} value={ele}>{`${ele}`}</option>);

  let rows = filteredCustomers.map((ele) => {
    return (
      <>
        <tr key={ele.id}>
          <Td colSpan="2">{ele.id}</Td>
          <Td colSpan="2">{ele.customerName}</Td>
          <Td colSpan="2">{ele.customerClass}</Td>
          <Td colSpan="2">{ele.accountManager}</Td>
          <Td colSpan="2" onClick={() => setModalShow(true)}>
            <StyledButton>Details</StyledButton>
          </Td>
        </tr>
        <CustomerDetailsModal
          customer={ele}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  });
  return (
    <Section>
      <Data>Customers List</Data>
      <StyledForm>
        <Form.Select
          style={{ width: "30%" }}
          ref={classFilter}
          onChange={classChangeHandler}
        >
          <option>Filter By Classes</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </Form.Select>
        <Form.Select
          style={{ width: "45%" }}
          ref={managerFilter}
          onChange={managerChangeHandler}
        >
          <option>Filter By Account Managers</option>
          {accountManagers}
        </Form.Select>
      </StyledForm>
      <Table>
        <tbody>
          <tr>
            <Td colSpan="2">ID</Td>
            <Td colSpan="2">Customer Name</Td>
            <Td colSpan="2">Customer Class</Td>
            <Td colSpan="2">Account Manager</Td>
            <Td colSpan="2">Details</Td>
          </tr>
          {rows}
        </tbody>
      </Table>
    </Section>
  );
}

export default CustomersList;
