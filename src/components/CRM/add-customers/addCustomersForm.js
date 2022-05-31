import { useRef } from "react";

import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 3rem;
`;

const Header = styled.h1`
  background-color: #fefefe;
  color: rgb(9, 200, 195);
  font-size: 1.25rem;
`;

const Label = styled(Form.Label)`
  background-color: #fefefe;
  width: 20vw;
`;

const Input = styled(Form.Control)`
  width: 20vw;
  height: 3rem;
  background-color: #fefefe;
  margin-left: 1rem;
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
function AddCustomerForm(props) {
  let customerNameRef = useRef();
  let classRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();
  let body;

  const newCustomerHandler = async (e) => {
    e.preventDefault();
    body = {
      name: customerNameRef.current.value,
      class: classRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      accountManager: "karamalqinneh@live.com", //get the useremail
    };
    let request = await axios.post(
      "https://erp-system-2022.herokuapp.com/add-customer",
      body
    );
    console.log(request);
    customerNameRef.current.value = "";
    classRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
  };
  return (
    <Section>
      <Header>New Customer</Header>
      <Form
        onSubmit={newCustomerHandler}
        style={{ backgroundColor: "#fefefe" }}
      >
        <InputGroup>
          <Label>Customer Name:</Label>
          <Input
            ref={customerNameRef}
            type="text"
            placeholder="Enter Customer Name"
          />
        </InputGroup>
        <InputGroup>
          <Label>Customer Class:</Label>
          <Form.Select
            style={{ width: "20vw", height: "3rem" }}
            ref={classRef}
            placeholder="Class"
          >
            <option>Class</option>
            <option value="VIP">VIP</option>
            <option value="Silver">Silver</option>
            <option value="Bronze">Bronze</option>
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <Label>Phone:</Label>
          <Input
            ref={phoneRef}
            type="number"
            increament="1"
            placeholder="Enter a Phone Number"
          />
        </InputGroup>
        <InputGroup>
          <Label>Email: </Label>
          <Input ref={emailRef} type="email" placeholder="Enter an Email" />
        </InputGroup>
        <StyledButton variant="primary" type="submit">
          Submit
        </StyledButton>
      </Form>
    </Section>
  );
}

export default AddCustomerForm;
