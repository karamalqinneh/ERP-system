let data = (dispatch) => {
  return {
    HR: [
      {
        tabName: "Main",
        actionName: () => {
          dispatch({ type: "MAIN" });
        },
      },
      {
        tabName: "Leave Request",
        actionName: () => {
          dispatch({ type: "LEAVE" });
        },
      },
      {
        tabName: "Vacation Request",
        actionName: () => {
          dispatch({ type: "VACATION" });
        },
      },
      {
        tabName: "Salary Slip",
        actionName: () => {
          dispatch({ type: "SALARY" });
        },
      },
      {
        tabName: "Manager View",
        actionName: () => {
          dispatch({ type: "MANAGER" });
        },
      },
    ],
    CRM: [
      {
        tabName: "Search",
        actionName: () => {
          dispatch({ type: "SEARCH" });
        },
      },
      {
        tabName: "Add Customers",
        actionName: () => {
          dispatch({ type: "ADD" });
        },
      },
      {
        tabName: "Generate Leads",
        actionName: () => {
          dispatch({ type: "LEAD" });
        },
      },
      {
        tabName: "Tickets System",
        actionName: () => {
          dispatch({ type: "TICKET" });
        },
      },
    ],
  };
};

export default data;
