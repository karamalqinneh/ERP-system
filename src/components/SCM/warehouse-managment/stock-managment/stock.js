import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import StockTable from "./stockTable";

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

function Stock() {
  let [stock, setStock] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://erp-system-2022.herokuapp.com/get-items"
      );
      setStock(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header>Stock</Header>
      <StockTable items={stock} />
    </>
  );
}

export default Stock;
