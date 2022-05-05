import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const Data = styled.h1`
  background-color: #fefefe;
  font-size: 1.1rem;
  &:first-child {
    text-align: right;
  }
`;

const DataVisual = styled.div`
  display: grid;
  grid-template-columns: 17.5vw 10vw;
  grid-template-rows: repeat(7, auto);
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`;

function SalesHistoyDetailsModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      style={{
        background: "transparent",
        height: "auto",
        marginTop: "9%",
        marginLeft: "5%",
      }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "#fefefe" }}>
        <Modal.Title
          style={{ backgroundColor: "#fefefe" }}
          id="contained-modal-title-vcenter"
        >
          {`Order ${props.orderData.id}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fefefe" }}>
        <DataVisual>
          <Data style={{ textAlign: "right" }}>Quantity:</Data>
          <Data>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.quantity}
          </Data>
        </DataVisual>
        <DataVisual>
          <Data>UNIT Price:</Data>
          <Data>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.unitPrice}
          </Data>
        </DataVisual>
        <DataVisual>
          <Data>Net Price:</Data>
          <Data>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.netPrice}
          </Data>
        </DataVisual>
        <DataVisual>
          <Data>{`Tax & Tax Exemption:`}</Data>
          <Data>&nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.tax.VAT}</Data>
        </DataVisual>
        <DataVisual>
          <Data>ToTal Payment Amount:</Data>
          <Data>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.totalPaymentAmount}
          </Data>
        </DataVisual>
        <DataVisual>
          <Data>Payment Method:</Data>
          <Data>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.paymentMethod}
          </Data>
        </DataVisual>
        <DataVisual>
          <Data>Fullfillment Date:</Data>
          <Data>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.orderData.details.fullfillmentDate}
          </Data>
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

export default SalesHistoyDetailsModal;
