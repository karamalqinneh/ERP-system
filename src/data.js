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
        tabName: "Customers List",
        actionName: () => {
          dispatch({ type: "LIST" });
        },
      },
      {
        tabName: "Tickets System",
        actionName: () => {
          dispatch({ type: "TICKET" });
        },
      },
    ],
    SCM: [
      {
        tabName: "Warehouse Managment",
        actionName: () => {
          dispatch({ type: "WAREHOUSE" });
        },
      },
      {
        tabName: "Suppliers",
        actionName: () => {
          dispatch({ type: "SUPPLIERS" });
        },
      },
      {
        tabName: "Analytics and Reports",
        actionName: () => {
          dispatch({ type: "REPORTS" });
        },
      },
    ],
    sales: [
      {
        tabName: "Sales",
        actionName: () => {
          dispatch({ type: "SALES" });
        },
      },
      {
        tabName: "Purchases",
        actionName: () => {
          dispatch({ type: "PURCHASES" });
        },
      },
      {
        tabName: "Analytics and Reports",
        actionName: () => {
          dispatch({ type: "REPORTS" });
        },
      },
    ],
    Home: [
      {
        tabName: "Login",
        actionName: () => {
          dispatch({ type: "LOGIN" });
        },
      },
      {
        tabName: "Profile Settings",
        actionName: () => {
          dispatch({ type: "SETTINGS" });
        },
      },
    ],
  };
};

export default data;
