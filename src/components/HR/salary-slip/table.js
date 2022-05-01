import styled from "styled-components";
import logo from "../../../assets/logo.png";

const Td = styled.td`
  border: 1px solid black;
  background-color: #fefefa;
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: #fefefa;
`;

const Image = styled.img`
  width: 3rem;
  height: 2rem;
  background-color: #fefefa;
`;

function SalaryTable() {
  return (
    <Table>
      <tbody>
        <tr>
          <Td colSpan="2" rowSpan="5">
            <Image src={logo} />
          </Td>
          <Td colSpan="6" rowSpan="5">
            Demo Company
          </Td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <Td colSpan="8">Payslip For the Month of August 2019</Td>
        </tr>
        <tr>
          <Td colSpan="4">Employee Name: Karam Al-Qinneh</Td>
          <Td colSpan="4">Paid Days:</Td>
        </tr>
        <tr>
          <Td>Gender:</Td>
          <Td></Td>
          <Td>Male</Td>
          <Td></Td>
          <Td colSpan="4">LOP Days:</Td>
        </tr>
        <tr>
          <Td colSpan="2">Earnings</Td>
          <Td colSpan="2">Amount</Td>
          <Td colSpan="2">Deductions</Td>
          <Td colSpan="2">Amount</Td>
        </tr>
        <tr>
          <Td colSpan="2">Basic</Td>
          <Td colSpan="2">&nbsp;&nbsp;10,000</Td>
          <Td colSpan="2">Salary Advnce</Td>
          <Td colSpan="2">&nbsp;&nbsp;1,000</Td>
        </tr>
        <tr>
          <Td colSpan="2">OT Hours</Td>
          <Td colSpan="2">50</Td>
          <Td colSpan="2">Other Deductions</Td>
          <Td colSpan="2">0</Td>
        </tr>
        <tr>
          <Td colSpan="2">OT Rate</Td>
          <Td colSpan="2">75</Td>
          <Td colSpan="4" rowSpan="2"></Td>
        </tr>
        <tr>
          <Td colSpan="2">OT Payment</Td>
          <Td colSpan="2">&nbsp;&nbsp;3,750</Td>
        </tr>
        <tr>
          <Td colSpan="2">Total Payment</Td>
          <Td colSpan="2">&nbsp;&nbsp;13,750</Td>
          <Td colSpan="2">Total Deductions</Td>
          <Td colSpan="2">&nbsp;&nbsp;1,000</Td>
        </tr>
        <tr>
          <Td colSpan="2">Net Pay:</Td>
          <Td colSpan="2">&nbsp;&nbsp;12,750</Td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SalaryTable;
