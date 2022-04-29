import SideBar from "../../UI/side-bar/sideBar";
import { useState } from "react";

function Home() {
  let data = [
    {
      tabName: "Test",
      actionName: () => {
        console.log("Working");
      },
    },
    {
      tabName: "Test2",
      actionName: () => {
        console.log("Working");
      },
    },
  ];
  return (
    <>
      <SideBar tabsData={data} />
    </>
  );
}

export default Home;
