import { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { Form } from "react-bootstrap";

import Button from "../../../../UI/button";
import ItemModal from "./itemModal";

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

function StockTable(props) {
  let groupFilter = useRef();
  const indexRef = useRef();
  const [filterdItems, setFilteredItems] = useState([]);
  let [dataLength, setDataLength] = useState(0);
  let [data, setData] = useState([]);
  useEffect(() => {
    setFilteredItems(props.items);
    setDataLength(props.items.length);
  }, [props.items]);
  const [modalShow, setModalShow] = useState(false);
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
    ...new Set(
      props.items.length > 0 ? props.items.map((ele) => ele.productGroup) : []
    ),
  ].map((ele, index) => <option key={index} value={ele}>{`${ele}`}</option>);
  useEffect(() => {
    if (filterdItems.length <= 5) {
      setData([...filterdItems]);
    } else {
      let raw = ["", ...filterdItems];
      let renderedData = [];
      for (let i = 1; i <= 5; i++) {
        renderedData.push(raw[i]);
      }
      setData([...renderedData]);
    }
  }, [filterdItems]);

  const classesHandler = (e) => {
    const children = [].slice.call(indexRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  const handlePagination = (e) => {
    let raw = ["", ...filterdItems];
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
      <IndexList ref={indexRef} onClick={classesHandler}>
        {indices}
      </IndexList>
    </>
  );
}

export default StockTable;
