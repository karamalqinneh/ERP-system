import TicketsTable from "../tickets-tables/ticketsTable";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";

function SearchResults(props) {
  // props.formInput to get the data
  let customerTickets = props.searchResults ? props.searchResults : [];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{ background: "transparent", height: "auto", marginTop: "8%" }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "#fefefe" }}>
        <Modal.Title
          style={{ backgroundColor: "#fefefe" }}
          id="contained-modal-title-vcenter"
        >
          Search Results
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#fefefe",
          height: "40vh",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.searchResults && (
          <TicketsTable tickets={customerTickets} customerName="John Doe " />
        )}
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

export default SearchResults;
