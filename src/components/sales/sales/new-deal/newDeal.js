import { useRef, useState } from "react";

import styled from "styled-components";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import DealAdded from "./dealAdded";

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
`;

const Label = styled(Form.Label)`
  background-color: #fefefe;
`;

const Input = styled(Form.Control)`
  width: 20vw;
  height: 3rem;
  background-color: #fefefe;
`;

const InputGroup = styled(Form.Group)`
  background-color: #fefefe;
  display: flex;
  width: 30vw;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 20vw;
  grid-area: 3 / 1 / 4 / 3;
  background-color: rgba(9, 200, 195, 0.8);
  border-color: rgb(9, 200, 195);
  margin-left: 35%;
  margin-top: 2rem;
  &:hover {
    background-color: rgb(9, 200, 195);
  }
`;

function NewDeal() {
  let [showModal, setShowModal] = useState(false);
  let [showVatValue, setShowVatValue] = useState(false);
  let productGroupRef = useRef();
  let customerIDRef = useRef();
  let productRef = useRef();
  let modelNameRef = useRef();
  let supplierNameRef = useRef();
  let quantityRef = useRef();
  let taxExemptionRef = useRef();
  let vatRef = useRef();
  let unitPriceRef = useRef();
  let paymentMethodRef = useRef();
  let fullfillmentDateRef = useRef();
  let orderDateRef = useRef();
  let body;

  const showVATValueHandler = (e) => {
    console.log(taxExemptionRef.current.value);
    taxExemptionRef.current.value == "true"
      ? setShowVatValue(true)
      : setShowVatValue(false);
  };
  const newDealSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(productGroupRef.current.value);
    body = {
      customerID: customerIDRef.current.value,
      productGroup: productGroupRef.current.value,
      product: productRef.current.value,
      modelName: modelNameRef.current.value,
      supplierName: supplierNameRef.current.value,
      quantity: quantityRef.current.value,
      taxExemption: taxExemptionRef.current.value,
      vat: taxExemptionRef.current.value == "true" ? vatRef.current.value : 0,
      unitPrice: unitPriceRef.current.value,
      paymentMethod: paymentMethodRef.current.value,
      orderDate: orderDateRef.current.value,
      fullfillmentDate: fullfillmentDateRef.current.value,
    };

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };
  return (
    <>
      <Header>New Deal</Header>
      <StyledForm
        onSubmit={newDealSubmitHandler}
        style={{ backgroundColor: "#fefefe" }}
      >
        <div style={{ backgroundColor: "#fefefe" }}>
          <InputGroup>
            <Label>Product Group:</Label>
            <Input
              ref={productGroupRef}
              type="text"
              placeholder="Enter Item Type"
            />
          </InputGroup>
          <InputGroup>
            <Label>Product:</Label>
            <Input ref={productRef} type="text" placeholder="Enter Item Type" />
          </InputGroup>
          <InputGroup>
            <Label>Model Name:</Label>
            <Input ref={modelNameRef} type="text" />
          </InputGroup>
          <InputGroup>
            <Label>Supplier Name:</Label>
            <Input
              ref={supplierNameRef}
              type="text"
              placeholder="Enter Supplier Name"
            />
          </InputGroup>
          <InputGroup>
            <Label>Order Date:</Label>
            <Input ref={orderDateRef} type="date" />
          </InputGroup>
          <InputGroup>
            <Label>Fullfillment Date:</Label>
            <Input ref={fullfillmentDateRef} type="date" />
          </InputGroup>
        </div>
        <div style={{ marginLeft: "2rem", backgroundColor: "#fefefe" }}>
          <InputGroup>
            <Label>Customer ID:</Label>
            <Input
              ref={customerIDRef}
              type="number"
              placeholder="Enter Customer ID"
            />
          </InputGroup>
          <InputGroup>
            <Label>Quantity:</Label>
            <Input
              ref={quantityRef}
              type="number"
              placeholder="Enter The Quantity"
            />
          </InputGroup>

          <InputGroup>
            <Label>Unit Price:</Label>
            <Input
              ref={unitPriceRef}
              type="number"
              placeholder="Enter Quantity"
            />
          </InputGroup>
          <InputGroup>
            <Label>Tax Exemption:</Label>
            <Form.Select
              style={{ width: "65%" }}
              ref={taxExemptionRef}
              onChange={showVATValueHandler}
            >
              <option>Tax Exemption</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </InputGroup>
          {showVatValue && (
            <InputGroup>
              <Label>VAT Value:</Label>
              <Input ref={vatRef} type="number" placeholder="Enter VAT Value" />
            </InputGroup>
          )}
          <InputGroup>
            <Label>Payment Method:</Label>
            <Form.Select style={{ width: "60%" }} ref={paymentMethodRef}>
              <option>Payment Method</option>
              <option value="Credit">Credit</option>
              <option value="Cash">Cash</option>
              <option value="L/C">L/C</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div style={{ backgroundColor: "#fefefe" }}></div>
        <StyledButton variant="primary" type="submit">
          Submit Deal
        </StyledButton>
      </StyledForm>
      <DealAdded show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default NewDeal;
