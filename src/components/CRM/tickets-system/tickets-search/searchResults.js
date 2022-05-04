import TicketsTable from "../tickets-tables/ticketsTable";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";

function SearchResults(props) {
  // props.formInput to get the data
  let customerTickets = [
    {
      id: "1",
      resolution: "Sales",
      date: "04-05-2022",
      details: "Pending Shipment",
      updates: {
        "05-05-2022-09:23": "Test Message",
        "05-05-2022-13:23": "Test Message",
      },
      status: "Open",
    },
    {
      id: "2",
      resolution: "Marketing",
      date: "04-05-2022",
      details: "Campaign didn't meet targets",
      updates: {
        "05-05-2022-09:23": "Test Message",
        "05-05-2022-13:23": "Test Message",
      },
      status: "Resolved",
    },
  ];

  return (
    <Modal
      {...props}
      size="md"
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
          marginLeft: "7.5%",
        }}
      >
        <TicketsTable tickets={customerTickets} customerName="John Doe " />
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
