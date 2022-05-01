import styled from "styled-components";

const SideContainer = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: rgb(9, 200, 195);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  color: #fefefa;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(9, 200, 195);
  height: 75vh;
`;

const TabName = styled.div`
  background-color: rgb(9, 200, 195);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  padding: 3rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 25vh;
`;

const SubTabs = styled.div`
  background-color: rgb(9, 200, 195);
  width: 100%;
  margin: 0 auto;
  font-size: 1.25rem;
  padding: 1rem 0.75rem;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Footer = styled.footer`
  background-color: rgb(9, 200, 195);
  padding: 0.2rem;
  margin-top: auto;
`;
// margin-top: calc(100vh - 6rem - 11rem);

function SideBar(props) {
  let tabs = props.tabsData.map((ele) => (
    <SubTabs key={ele.tabName} onClick={ele.actionName}>
      {ele.tabName}
    </SubTabs>
  ));
  return (
    <SideContainer className={props.className}>
      <TabName>{props.tabName}</TabName>
      <TabsContainer>
        {tabs}
        <Footer>&copy; Karam Al-Qinneh</Footer>
      </TabsContainer>
    </SideContainer>
  );
}

export default SideBar;
