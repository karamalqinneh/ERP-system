import styled from "styled-components";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useRef } from "react";

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

function ItemModal(props) {
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
          Item Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#fefefe",
          height: "60vh",
          overflowY: "auto",
          marginLeft: "7.5%",
        }}
      >
        <DataVisual>
          <Data style={{ textAlign: "right" }}>Item ID:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.id}`}</Data>
        </DataVisual>
        <DataVisual>
          <Data>Item Type:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.itemType}`}</Data>
        </DataVisual>
        <DataVisual>
          <Data>Model Name:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.modelName}`}</Data>
        </DataVisual>
        <DataVisual>
          <Data>Product Group:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.productGroup}`}</Data>
        </DataVisual>
        <DataVisual>
          <Data>Supplier Name:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.supplierName}`}</Data>
        </DataVisual>
        <DataVisual>
          <Data>Quantity In Stock:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.quantity}`}</Data>
        </DataVisual>
        {props.info.dimensions && (
          <DataVisual>
            <Data>Dimensions:</Data>
            <Data>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {`Length: ${props.info.dimensions.length} Height: ${props.info.dimensions.height}`}
            </Data>
          </DataVisual>
        )}

        <DataVisual>
          <Data>Unit Price:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.unitPrice}`}</Data>
        </DataVisual>
        <DataVisual>
          <Data>Sales:</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.info.sales}`}</Data>
        </DataVisual>
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
      </Modal.Footer>
    </Modal>
  );
}

export default ItemModal;
