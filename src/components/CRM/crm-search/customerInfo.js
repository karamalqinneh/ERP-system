import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

const Data = styled.h1`
  background-color: #fefefe;
  font-size: 1.1rem;
  &:first-child {
    text-align: right;
  }
`;

const DataVisual = styled.div`
  display: grid;
  grid-template-columns: 15vw 35vw;
  grid-template-rows: repeat(7, auto);
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  padding: 0.75rem 0;
`;

function CustomerInfo(props) {
  let [customerData, setCustomerData] = useState("");
  useEffect(() => {
    console.log(props.customer);
    const fetchData = async () => {
      let response = await axios.get(
        `https://erp-system-2022.herokuapp.com/customer/${props.customer}`
      );

      setCustomerData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginLeft: "10%" }}>
      <DataVisual>
        <Data style={{ textAlign: "right" }}>Customer Name:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{customerData["customerName"]}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Customer Class:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{customerData["customerClass"]}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Account Manager:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{customerData["accountManager"]}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Phone:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{customerData["phone"]}</Data>
      </DataVisual>
      <DataVisual>
        <Data>EMAIL:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{customerData["email"]}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Created By:</Data>
        <Data>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {customerData["createdBy"]
            ? customerData["createdBy"].split("+")[0].slice(0, -3)
            : ""}
        </Data>
      </DataVisual>
      <DataVisual>
        <Data>Modified By:</Data>
        <Data>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {customerData["modifiedBy"]
            ? customerData["modifiedBy"].split("+")[0].slice(0, -3)
            : ""}
        </Data>
      </DataVisual>
    </div>
  );
}

export default CustomerInfo;
