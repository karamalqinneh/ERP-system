import { Modal, Button } from "react-bootstrap";

function RequestDetailsModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`${props.modalData.employee} Request`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {`${props.modalData.employee} is requesting off time from ${
            props.modalData.endTime ? props.modalData.startTime : "00:00"
          } until ${
            props.modalData.endTime ? props.modalData.endTime : "00:00"
          } in the date ${
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
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestDetailsModal;
