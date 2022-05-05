import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import ItemAdded from "./itemAdded";

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

function AddItems() {
  let [showModal, setShowModal] = useState(false);
  let itemTypeeRef = useRef();
  let modelNameRef = useRef();
  let supplierNameRef = useRef();
  let quantityRef = useRef();
  let dimensionsRef = useRef();
  let unitPriceRef = useRef();
  let body;

  const newItemSubmitHandler = (e) => {
    e.preventDefault();
    body = {
      itemTypee: itemTypeeRef.current.value,
      modelName: modelNameRef.current.value,
      supplierName: supplierNameRef.current.value,
      quantity: quantityRef.current.value,
      dimensions: dimensionsRef.current.value,
      unitPrice: unitPriceRef.current.value,
    };
    console.log(body);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };
  return (
    <>
      <Header>Item Info</Header>
      <StyledForm
        onSubmit={newItemSubmitHandler}
        style={{ backgroundColor: "#fefefe" }}
      >
        <div style={{ backgroundColor: "#fefefe" }}>
          <InputGroup>
            <Label>Item Type:</Label>
            <Input
              ref={itemTypeeRef}
              type="text"
              placeholder="Enter Item Type"
            />
          </InputGroup>
          <InputGroup>
            <Label>Model Name:</Label>
            <Input
              ref={modelNameRef}
              type="text"
              placeholder="Enter Model Name"
            />
          </InputGroup>
          <InputGroup>
            <Label>Supplier Name:</Label>
            <Input
              ref={supplierNameRef}
              type="text"
              placeholder="Enter Supplier Name"
            />
          </InputGroup>
        </div>
        <div style={{ marginLeft: "2rem", backgroundColor: "#fefefe" }}>
          <InputGroup>
            <Label>Quantity:</Label>
            <Input
              ref={quantityRef}
              type="number"
              placeholder="Enter The Quantity"
            />
          </InputGroup>
          <InputGroup>
            <Label>Dimensions:</Label>
            <Input
              ref={dimensionsRef}
              type="text"
              placeholder="Enter Model Name"
            />
          </InputGroup>
          <InputGroup>
            <Label>Unit Price:</Label>
            <Input
              ref={unitPriceRef}
              type="number"
              placeholder="Enter Supplier Name"
            />
          </InputGroup>
        </div>

        <StyledButton variant="primary" type="submit">
          Add
        </StyledButton>
      </StyledForm>
      <ItemAdded show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default AddItems;
