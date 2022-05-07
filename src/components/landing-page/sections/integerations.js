import styled from "styled-components";
import sales from "../../../assets/icons/receipt.svg";
import accounting from "../../../assets/icons/cash.svg";
import CRM from "../../../assets/icons/CRM.svg";
import HR from "../../../assets/icons/HR.png";
import SCM from "../../../assets/icons/package.svg";

const Section = styled.section`
  width: 100vw;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f7;
`;

const Container = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f7;
`;

const Data = styled.div`
  width: 85vw;
  height: 30vh;
  background-color: #f1f5f7;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  background-color: #f1f5f7;
  margin-bottom: 2vh;
`;
const SubTitle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  background-color: #f1f5f7;
  margin-bottom: 2vh;
  color: rgb(9, 200, 195);
`;
const Desc = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2vh;
  opacity: 70%;
  width: 50vw;
  margin: 3vh 0 0 2vw;
  background-color: #f1f5f7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 35vh 35vh;
  grid-template-columns: repeat(3, 28.33vw);
  background-color: #f1f5f7;
  align-items: center;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f1f5f7;
`;

const GridIcon = styled.img`
  height: 5vh;
  width: 5vw;
  background-color: #f1f5f7;
`;

const Div = styled.div`
  background-color: #f1f5f7;
  margin-left: 1rem;
`;

const GridTitle = styled.h3`
  font-size: 1.5rem;
  width: 23.33vw;
  background-color: #f1f5f7;
`;
const GridContent = styled.p`
  font-size: 1.1rem;
  opacity: 70%;
  width: 23.33vw;
  text-align: justify;
  background-color: #f1f5f7;
`;

function Integerations() {
  //     import accounting from "../../../assets/icons/cash.svg";
  // import CRM from "../../../assets/icons/CRM.svg";
  // import HR from "../../../assets/icons/HR.png";
  // import SCM from "../../../assets/icons/package.svg";
  return (
    <Section>
      <Container>
        <Data>
          <Title>
            <SubTitle>Daftra</SubTitle> Integrated Business Apps
          </Title>
          <Desc>
            Performing equally effectively, separately and simultaneously - Use
            all, activate or deactivate to match your business needs.
          </Desc>
        </Data>
        <Grid>
          <GridItem>
            <GridIcon src={sales} />
            <Div>
              <GridTitle>Sales</GridTitle>
              <GridContent>
                Invoicing, POS, Sales Commission, Insurance Management, Offers,
                Installments
              </GridContent>
            </Div>
          </GridItem>
          <GridItem>
            <GridIcon src={accounting} />
            <Div>
              <GridTitle>Accounting</GridTitle>
              <GridContent>
                Expenses, Tax, Treasuries, Cheque Cycle, Chart of Accounts,
                Auto-Journals, Assets, Cost Centers, General Ledger, Financial
                Reports
              </GridContent>
            </Div>
          </GridItem>
          <GridItem>
            <GridIcon src={CRM} />
            <Div>
              <GridTitle>CRM</GridTitle>
              <GridContent>
                Contact Management, Appointment Assignment, Memberships, Points
                {"&"} Credits, Client Follow-Up, Client Attendance
              </GridContent>
            </Div>
          </GridItem>
          <GridItem>
            <GridIcon src={HR} />
            <Div>
              <GridTitle>HR</GridTitle>
              <GridContent>
                Employee Database, Payroll, Contracts, Attendance {"&"} Leave
                Management, Multi-Shifts, Requests, Loans
              </GridContent>
            </Div>
          </GridItem>
          <GridItem>
            <GridIcon src={SCM} />
            <Div>
              <GridTitle>SCM</GridTitle>
              <GridContent>
                Stock Tracking, Barcode, Purchases, Suppliers, Warehouses,
                Stocktaking, Requisitions, Price Lists
              </GridContent>
            </Div>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
}

export default Integerations;
