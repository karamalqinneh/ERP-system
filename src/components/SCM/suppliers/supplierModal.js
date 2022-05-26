import styled from "styled-components";
import StockTable from "../warehouse-managment/stock-managment/stockTable";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

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

function SupplierModal(props) {
  const [showProducts, setShowProducs] = useState(false);
  let buttonText = showProducts ? "Hide Products" : "Show Products";
  console.log(props.info, "FROM MODAL");
  let body = showProducts ? (
    <StockTable items={props.info.products} />
  ) : (
    <>
      <DataVisual>
        <Data style={{ textAlign: "right" }}>Supplier ID:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.id}`}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Supplier Name:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.name}`}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Products Group:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.productsGenre}`}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Location:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.location}`}</Data>
      </DataVisual>
      <DataVisual>
        <Data>Count Of Previous Interactions:</Data>
        <Data>
          &nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.noOfPreviousInteractions}`}
        </Data>
      </DataVisual>
      <DataVisual>
        <Data>Account Size:</Data>
        <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.accountSize}`}</Data>
      </DataVisual>
    </>
  );
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{ background: "transparent", height: "auto", marginTop: "5%" }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "#fefefe" }}>
        <Modal.Title
          style={{ backgroundColor: "#fefefe" }}
          id="contained-modal-title-vcenter"
        >
          Supplier Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#fefefe",
          height: "60vh",
          overflowY: "auto",
          marginLeft: "20%",
        }}
      >
        {body}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#fefefe" }}>
        <Button
          style={{
            backgroundColor: "rgb(9, 200, 195)",
            borderColor: "rgb(9, 200, 195)",
          }}
          onClick={props.onHide}
        >
          Close
        </Button>
        <Button
          style={{
            backgroundColor: "rgb(9, 200, 195)",
            borderColor: "rgb(9, 200, 195)",
          }}
          onClick={() => {
            setShowProducs(!showProducts);
          }}
        >
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SupplierModal;
