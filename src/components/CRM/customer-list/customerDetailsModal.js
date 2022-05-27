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

function CustomerDetailsModal(props) {
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
          {`Customer: ${props.customer.customerName} Data`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fefefe" }}>
        <div style={{ marginLeft: "10%" }}>
          <DataVisual>
            <Data style={{ textAlign: "right" }}>Customer Name:</Data>
            <Data>
              &nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.customerName}`}
            </Data>
          </DataVisual>
          <DataVisual>
            <Data>Customer Class:</Data>
            <Data>
              &nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.customerClass}`}
            </Data>
          </DataVisual>
          <DataVisual>
            <Data>Account Manager:</Data>
            <Data>
              &nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.accountManager}`}
            </Data>
          </DataVisual>
          <DataVisual>
            <Data>Phone:</Data>
            <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.phone}`}</Data>
          </DataVisual>
          <DataVisual>
            <Data>EMAIL:</Data>
            <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.email}`}</Data>
          </DataVisual>
          <DataVisual>
            <Data>Created By:</Data>
            <Data>&nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.createdBy}`}</Data>
          </DataVisual>
          <DataVisual>
            <Data>Modified By:</Data>
            <Data>
              &nbsp;&nbsp;&nbsp;&nbsp;{`${props.customer.modifiedBy}`}
            </Data>
          </DataVisual>
        </div>
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

export default CustomerDetailsModal;
