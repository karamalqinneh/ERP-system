import styled from "styled-components";
import Card from "../../../UI/card";
import VacationBalance from "../vaction-request/vacationBalance";

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 70vh;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(9, 200, 195);
`;

const FormContainer = styled.div`
  width: 100%;
  height: 35vh;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 70%;
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
  color: rgb(9, 200, 195);
`;

function LeaveRequestMain(props) {
  return (
    <Container>
      <VacationBalance />
      <Form>
        <FormContainer>
          <div>
            <label style={{ display: "block", marginTop: "1rem" }}>Date:</label>
            <Input type="date" style={{ height: "12rem" }} />
          </div>
          <InputsContainer>
            <div>
              <label style={{ display: "block", marginTop: "1rem" }}>
                Start Time:
              </label>
              <Input type="time" />
            </div>
            <div>
              <label style={{ display: "block", marginTop: "1rem" }}>
                End Time:
              </label>
              <Input type="time" />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Comments"
                style={{ marginTop: "1rem" }}
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
