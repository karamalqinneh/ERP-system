import styled from "styled-components";
import SearchResults from "./searchResults";
import { Form, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

const Label = styled(Form.Label)`
  background-color: #fefefe;
`;

const Input = styled(Form.Control)`
  width: 20vw;
  height: 3rem;
  background-color: #fefefe;
`;

const InputGroup = styled(Form.Group)`
  background-color: #fefefe;
  display: flex;
  width: 30vw;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: rgba(9, 200, 195, 0.8);
  border-color: rgb(9, 200, 195);
  margin-left: 35%;
  margin-top: 2rem;
  &:hover {
    background-color: rgb(9, 200, 195);
  }
`;

function SearchForm() {
  let [showModal, setShowModal] = useState(false);
  let customerNameRef = useRef();
  let tickedIDRef = useRef();
  let dateRef = useRef();
  let resolutionRef = useRef();
  let body;

  const ticketSearchHandler = (e) => {
    e.preventDefault();
    body = {
      name: customerNameRef.current.value,
      id: tickedIDRef.current.value,
      date: dateRef.current.value,
      reso: resolutionRef.current.value,
    };
    setShowModal(true);
  };
  return (
    <>
      <Header>Search Parameters</Header>
      <Form
        onSubmit={ticketSearchHandler}
        style={{ backgroundColor: "#fefefe" }}
      >
        <InputGroup>
          <Label>Ticket ID:</Label>
          <Input ref={tickedIDRef} type="text" placeholder="Enter Ticket ID" />
        </InputGroup>
        <InputGroup>
          <Label>Customer Name:</Label>
          <Input
            ref={customerNameRef}
            type="text"
            placeholder="Enter Customer Name"
          />
        </InputGroup>
        <InputGroup>
          <Label>Ticket Date:</Label>
          <Input ref={dateRef} type="date" />
        </InputGroup>
        <InputGroup>
          <Label>Resolution: </Label>
          <Input
            ref={resolutionRef}
            type="text"
            placeholder="Enter a Resolution"
          />
        </InputGroup>
        <StyledButton variant="primary" type="submit">
          Submit
        </StyledButton>
      </Form>
      <SearchResults show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default SearchForm;
