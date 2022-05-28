import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import SuppliersTable from "./suppliersTable";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

function SuppliersMain(props) {
  let [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:3001/get-suppliers");
      setSuppliers(await response.data);
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Header>Suppliers</Header>
      <SuppliersTable suppliers={suppliers} />
    </Section>
  );
}

export default SuppliersMain;
