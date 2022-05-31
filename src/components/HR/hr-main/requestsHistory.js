import { useState, useEffect, useRef } from "react";

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

const IndexList = styled.div`
  height: 5vh;
  width: 20vw;
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

function RequestsHistory(props) {
  const indexRef = useRef();
  let [dataLength, setDataLength] = useState(0);
  let [data, setData] = useState([]);
  useEffect(() => {
    setDataLength(props.requestsHistory.length);
    if (props.requestsHistory.length <= 5) {
      setData([...props.requestsHistory]);
    } else {
      let raw = ["", ...props.requestsHistory];
      let renderedData = [];
      for (let i = 1; i <= 5; i++) {
        renderedData.push(raw[i]);
      }
      setData([...renderedData]);
    }
  }, [props.requestsHistory]);

  const classesHandler = (e) => {
    const children = [].slice.call(indexRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  const handlePagination = (e) => {
    let raw = ["", ...props.requestsHistory];
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
      <tr key={ele.id}>
        <Td colSpan="2">{ele.date}</Td>
        <Td colSpan="2">{ele.type}</Td>
        <Td colSpan="2">{ele.state}</Td>
        <Td colSpan="2">{ele.reason}</Td>
      </tr>
    );
  });

  return (
    <>
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
      <IndexList ref={indexRef} onClick={classesHandler}>
        {indices}
      </IndexList>
    </>
  );
}

export default RequestsHistory;
