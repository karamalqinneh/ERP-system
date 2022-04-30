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
  };
};

export default data;
