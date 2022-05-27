import styled from "styled-components";
import { useRef } from "react";

const SideContainer = styled.div`
  width: 20vw;
  height: 100%;
  background-color: rgb(9, 200, 195);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  color: #fefefa;
  min-height: 75vh;
  position: fixed;
  top: 10vh;
  left: 0;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(9, 200, 195);
  height: 65vh;
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
  &.active {
    background-color: rgb(9, 175, 175);
    border-left: 10px solid #fefefe;
  }
`;

const Footer = styled.footer`
  background-color: rgb(9, 200, 195);
  padding: 0.2rem;
  margin-top: auto;
`;

function SideBar(props) {
  const navRef = useRef();
  const activeHandler = (e) => {
    const children = [].slice.call(navRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  let tabs = props.tabsData.map((ele) => (
    <SubTabs
      key={ele.tabName}
      onClick={() => {
        ele.actionName();
      }}
    >
      {ele.tabName}
    </SubTabs>
  ));
  return (
    <SideContainer className={props.className}>
      <TabName>{props.tabName}</TabName>
      <TabsContainer ref={navRef} onClick={activeHandler}>
        {tabs}
        <Footer>&copy; Karam Al-Qinneh</Footer>
      </TabsContainer>
    </SideContainer>
  );
}

export default SideBar;
