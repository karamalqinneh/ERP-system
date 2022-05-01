import styled from "styled-components";
import Card from "../../../UI/card";
import VacationBalance from "../vaction-request/vacationBalance";

function HRMain() {
  return (
    <Card>
      <h1>Employee Name: Karam Al-Qinneh</h1>
      <h1>Department: IT</h1>
      <h1>Title: Software Engineer</h1>
      <h1>Basic Salary: 600</h1>
      <VacationBalance />
    </Card>
  );
}

export default HRMain;
