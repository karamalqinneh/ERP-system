import { useRef } from "react";

import styled from "styled-components";
import axios from "axios";

import Card from "../../../UI/card";
import VacationBalance from "../vaction-request/vacationBalance";

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 70vh;
  background-color: #fefefa;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefa;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 35vh;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fefefa;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefa;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 40%;
  margin-top: 1rem;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(9, 200, 195);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: #fefefa;
`;

const Input = styled.input`
  height: 3rem;
  width: 22.5vw;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  font-size: 1.25rem;
  text-align: center;
  background-color: #fefefa;
  margin-top: 0.2rem;
`;

const Label = styled.label`
  background: #fefefa;
  display: block;
  margin-top: 1rem;
`;

function LeaveRequestMain(props) {
  let dateRef = useRef();
  let startTimeRef = useRef();
  let endTimeRef = useRef();
  let commentsRef = useRef();
  const leaveRequestHandler = async (e) => {
    e.preventDefault();
    let body = {
      date: dateRef.current.value,
      start: startTimeRef.current.value,
      end: endTimeRef.current.value,
      comments: commentsRef.current.value,
      user: 1,
    };
    let request = await axios.post(
      "https://erp-system-2022.herokuapp.com/new-leave-request",
      body
    );
    console.log(request);
    dateRef.current.value = "";
    startTimeRef.current.value = "";
    endTimeRef.current.value = "";
    commentsRef.current.value = "";
  };
  return (
    <Container>
      <VacationBalance />
      <Form onSubmit={leaveRequestHandler}>
        <FormContainer>
          <div style={{ backgroundColor: "#fefefa" }}>
            <Label>Date:</Label>
            <Input type="date" style={{ height: "12rem" }} ref={dateRef} />
          </div>
          <InputsContainer>
            <div style={{ backgroundColor: "#fefefa" }}>
              <Label>Start Time:</Label>
              <Input type="time" ref={startTimeRef} />
            </div>
            <div style={{ backgroundColor: "#fefefa" }}>
              <Label>End Time:</Label>
              <Input type="time" ref={endTimeRef} />
            </div>
            <div style={{ backgroundColor: "#fefefa" }}>
              <Input
                type="text"
                placeholder="Comments"
                style={{ marginTop: "1rem" }}
                ref={commentsRef}
              />
            </div>
          </InputsContainer>
        </FormContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default LeaveRequestMain;
