import { Modal, Button } from "react-bootstrap";

function RequestDetailsModal(props) {
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
          {`${props.modalData.employee} Request`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fefefe" }}>
        <p style={{ backgroundColor: "#fefefe" }}>
          {`${props.modalData.employee} is requesting off time from ${
            props.modalData.endTime ? props.modalData.startTime : "00:00"
          } until ${
            props.modalData.endTime ? props.modalData.endTime : "00:00"
          } on the date ${
            props.modalData.startDate
              ? props.modalData.startDate
              : props.modalData.date
          } - ${
            props.modalData.startDate
              ? props.modalData.endDate
              : props.modalData.date
          }`}
        </p>
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

export default RequestDetailsModal;
