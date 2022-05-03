import styled from "styled-components";
import { useState, useEffect } from "react";

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
  let [customerData, setCustomerData] = useState(props.customer);
  useEffect(() => {
    console.log(customerData, "FROM CUSINFO2");
  }, []);
  return (
    <div style={{ marginLeft: "10%" }}>
      <DataVisual>
        <Data style={{ textAlign: "right" }}>Customer Name:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;John Doe</Data>
      </DataVisual>
      <DataVisual>
        <Data>Customer Class:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;VIP</Data>
      </DataVisual>
      <DataVisual>
        <Data>Account Manager:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;Karam Al-Qinneh</Data>
      </DataVisual>
      <DataVisual>
        <Data>Phone:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;962790479707</Data>
      </DataVisual>
      <DataVisual>
        <Data>EMAIL:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;karamalqinneh@live.com</Data>
      </DataVisual>
      <DataVisual>
        <Data>Created By:</Data>
        <Data>
          &nbsp;&nbsp;&nbsp;&nbsp;Karam Al-Qinneh @ 05-12-2016 12:34:30 PM
        </Data>
      </DataVisual>
      <DataVisual>
        <Data>Modified By:</Data>
        <Data>
          &nbsp;&nbsp;&nbsp;&nbsp;Karam Al-Qinneh @ 05-12-2018 12:34:30 PM
        </Data>
      </DataVisual>
    </div>
  );
}

export default CustomerInfo;
