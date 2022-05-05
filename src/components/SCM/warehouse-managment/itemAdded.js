import { Modal, Button } from "react-bootstrap";

function ItemAdded(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      style={{ background: "transparent", height: "auto", marginTop: "15%" }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "#fefefe" }}>
        <Modal.Title
          style={{ backgroundColor: "#fefefe" }}
          id="contained-modal-title-vcenter"
        >
          Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fefefe" }}>
        <p style={{ backgroundColor: "#fefefe" }}>Item added successfully</p>
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

export default ItemAdded;
