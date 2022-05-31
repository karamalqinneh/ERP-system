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
  width: 90%;
  border-radius: 10px;
  margin-top: 1rem;
`;

const StyledButton = styled(Button)`
  height: 1.5rem;
  font-size: 1rem;
  width: 7.5vw;
  margin-top: 0rem;
`;

const IndexList = styled.div`
  height: 5vh;
  width: 40vw;
  display: flex;
  justify-content: flex-start;
  background-color: #fefefe;
  margin-top: 2vh;
`;

const Index = styled.div`
  height: 5vh;
  width: 3vw;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  font-size: 1.2rem;
  color: rgba(9, 200, 195, 1);
  background-color: #fefefe;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &.active {
    background: #e9e9e9;
  }
`;

function CustomersList(props) {
  const indexRef = useRef();
  let classFilter = useRef();
  let managerFilter = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [customersList, setCustomersList] = useState([]);
  let [filteredCustomers, setFilteredCustomers] = useState([]);
  let [dataLength, setDataLength] = useState(0);
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://erp-system-2022.herokuapp.com/get-customers"
      );
      setFilteredCustomers(response.data);
      setCustomersList(response.data);
      setDataLength(response.data.length);
    };
    fetchData();
  }, []);

  const classChangeHandler = (e) => {
    setFilteredCustomers(
      customersList.filter((ele) => {
        if (classFilter.current.value === "Filter By Classes") {
          return true;
        } else {
          return ele.customerClass === classFilter.current.value;
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

  useEffect(() => {
    if (filteredCustomers.length <= 5) {
      setData([...filteredCustomers]);
    } else {
      let raw = ["", ...filteredCustomers];
      let renderedData = [];
      for (let i = 1; i <= 5; i++) {
        renderedData.push(raw[i]);
      }
      setData([...renderedData]);
    }
  }, [filteredCustomers]);

  const classesHandler = (e) => {
    const children = [].slice.call(indexRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  const handlePagination = (e) => {
    let raw = ["", ...filteredCustomers];
    let page = parseInt(e.target.innerHTML);
    let renderedData = [];
    for (let i = 1; i <= 5 * page; i++) {
      if (i >= 5 * page - 5 + 1 && i <= 5 * page) {
        renderedData.push(raw[i]);
      }
    }
    setData(renderedData);
  };
  let paginationIndex = Math.floor(dataLength / 5);

  let indices = Array.from({ length: paginationIndex }, (_, i) => i + 1).map(
    (ele, idx) => {
      if (idx === 0) {
        return (
          <Index className={"active"} onClick={handlePagination}>
            {ele}
          </Index>
        );
      }
      return <Index onClick={handlePagination}>{ele}</Index>;
    }
  );
  let rows = data.map((ele) => {
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
      <IndexList ref={indexRef} onClick={classesHandler}>
        {indices}
      </IndexList>
    </Section>
  );
}

export default CustomersList;
