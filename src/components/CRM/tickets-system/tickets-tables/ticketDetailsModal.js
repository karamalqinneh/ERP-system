import { Modal, Button, Form } from "react-bootstrap";
import { useState, useRef } from "react";

function TicketDetailsModal(props) {
  let commentRef = useRef();
  let [showContact, setShowContact] = useState(false);
  let [showComments, setShowComments] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(commentRef.current.value);
  };
  let contactInfo = showContact && (
    <>
      <p style={{ backgroundColor: "#fefefe" }}>
        Email: {props.userData.email}
      </p>
      <p style={{ backgroundColor: "#fefefe" }}>
        Phone: {props.userData.phone}
      </p>
    </>
  );
  let originalContent = (
    <>
      <p style={{ backgroundColor: "#fefefe" }}>
        Opened Since: {props.ticketData.date}
      </p>
      <p style={{ backgroundColor: "#fefefe" }}>
        Resolution: {props.ticketData.resolution}
      </p>
      <p style={{ backgroundColor: "#fefefe" }}>
        Details: {props.ticketData.details}
      </p>
      {contactInfo}
    </>
  );
  let comments = [];
  for (let property in props.ticketData.updates) {
    comments.push(
      <p style={{ backgroundColor: "#fefefe" }}>
        {`${property}: ${props.ticketData.updates[property]} `}
      </p>
    );
  }

  let history = (
    <>
      {comments}
      <Form onSubmit={submitHandler} style={{ backgroundColor: "#fefefe" }}>
        <Form.Group
          style={{ backgroundColor: "#fefefe" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label style={{ backgroundColor: "#fefefe" }}>
            New Update
          </Form.Label>
          <Form.Control
            style={{ backgroundColor: "#fefefe" }}
            ref={commentRef}
            type="text"
            placeholder="Enter your comment"
          />

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button
          style={{
            backgroundColor: "rgb(9, 200, 195)",
            borderColor: "rgb(9, 200, 195)",
            marginLeft: "82.5%",
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );

  let mainContent = showComments ? history : originalContent;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      style={{ background: "transparent", height: "auto", marginTop: "15%" }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "#fefefe" }}>
        <Modal.Title
          style={{ backgroundColor: "#fefefe" }}
          id="contained-modal-title-vcenter"
        >
          {`Ticket ${props.ticketData.id}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fefefe" }}>
        {mainContent}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#fefefe" }}>
        <Button
          style={{
            backgroundColor: "rgb(9, 200, 195)",
            borderColor: "rgb(9, 200, 195)",
          }}
          onClick={() => {
            setShowContact(!showContact);
          }}
        >
          Contact
        </Button>
        <Button
          style={{
            backgroundColor: "rgb(9, 200, 195)",
            borderColor: "rgb(9, 200, 195)",
          }}
          onClick={() => {
            setShowComments(!showComments);
          }}
        >
          Show History
        </Button>
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

export default TicketDetailsModal;
