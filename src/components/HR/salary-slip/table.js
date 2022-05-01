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

function SalaryTable(props) {
  let data = {
    month: "May",
    year: "2022",
    employee: "Karam Al-Qinneh",
    paidDays: 30,
    gender: "Male",
    lopDays: 0,
    basicSalary: 600,
    otHours: 23,
    otRate: 1.5,
    otPayment: 300,
    totalPayment: 900,
    socialSecurity: 30,
    otherDeductions: 100,
    totalDeductions: 130,
    netPay: 770,
  };
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
          <Td colSpan="8">
            Payslip For the Month of {`${data.month}`} {`${data.year}`}{" "}
          </Td>
        </tr>
        <tr>
          <Td colSpan="4">Employee Name: {`${data.employee}`} </Td>
          <Td colSpan="4">Paid Days: {`${data.paidDays}`}</Td>
        </tr>
        <tr>
          <Td colSpan="2">Gender:</Td>
          <Td colSpan="2">{`${data.gender}`}</Td>
          <Td colSpan="4">LOP Days: {`${data.lopDays}`}</Td>
        </tr>
        <tr>
          <Td colSpan="2">Earnings</Td>
          <Td colSpan="2">Amount</Td>
          <Td colSpan="2">Deductions</Td>
          <Td colSpan="2">Amount</Td>
        </tr>
        <tr>
          <Td colSpan="2">Basic</Td>
          <Td colSpan="2">&nbsp;&nbsp;{`${data.basicSalary}`}</Td>
          <Td colSpan="2">Social Security</Td>
          <Td colSpan="2">&nbsp;&nbsp;{`${data.socialSecurity}`}</Td>
        </tr>
        <tr>
          <Td colSpan="2">OT Hours</Td>
          <Td colSpan="2">{`${data.otHours}`}</Td>
          <Td colSpan="2">Other Deductions</Td>
          <Td colSpan="2">{`${data.otherDeductions}`}</Td>
        </tr>
        <tr>
          <Td colSpan="2">OT Rate</Td>
          <Td colSpan="2">{`${data.otRate}`}</Td>
          <Td colSpan="2">Total Deductions</Td>
          <Td colSpan="2">&nbsp;&nbsp;{`${data.totalDeductions}`}</Td>
        </tr>
        <tr>
          <Td colSpan="2">OT Payment</Td>
          <Td colSpan="2">&nbsp;&nbsp;{`${data.otPayment}`}</Td>
          <Td colSpan="3" rowSpan="3"></Td>
        </tr>
        <tr>
          <Td colSpan="2">Total Payment</Td>
          <Td colSpan="2">&nbsp;&nbsp;{`${data.totalPayment}`}</Td>
        </tr>
        <tr>
          <Td colSpan="2" style={{ fontWeight: "600" }}>
            Net Pay:
          </Td>
          <Td colSpan="2" style={{ fontWeight: "600" }}>
            &nbsp;&nbsp;{`${data.netPay}`}
          </Td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SalaryTable;
