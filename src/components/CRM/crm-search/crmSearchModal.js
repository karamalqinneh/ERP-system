import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";

function CRMSearchModal(props) {
  let searchRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.passData(searchRef.current.value);
    props.onHide();
  };
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
          Search
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fefefe" }}>
        <Form onSubmit={submitHandler} style={{ backgroundColor: "#fefefe" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ backgroundColor: "#fefefe" }}
          >
            <Form.Label style={{ backgroundColor: "#fefefe" }}>
              Customer ID
            </Form.Label>
            <Form.Control
              ref={searchRef}
              type="text"
              placeholder="Customer ID"
              style={{ backgroundColor: "#fefefe" }}
            />

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button
            style={{
              backgroundColor: "rgb(9, 200, 195)",
              borderColor: "rgb(9, 200, 195)",
              marginLeft: "calc(100% - 5rem)",
            }}
            onClick={props.onHide}
            type="submit"
          >
            Search
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CRMSearchModal;
