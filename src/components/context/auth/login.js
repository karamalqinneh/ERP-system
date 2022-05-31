import React, { useEffect, useState } from "react";
import base64 from "base-64";
import superagent from "superagent";
import jwt from "jwt-decode";
import cookie from "react-cookies";

const API = `http://localhost:3001`;
export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    const response = await superagent
      .post(`${API}/signin`)
      .set("authorization", `Basic ${base64.encode(`${email}:${password}`)}`);
    console.log("inside login >> response", response); //userInfo + token
    validateMyUser(response.body);
  };

  const validateMyUser = (data) => {
    if (data) {
      const validUser = jwt(data.token);
      if (validUser) {
        setLoginstate(true, data);
        cookie.save("userData", data);
      } else {
        setLoginstate(false, {});
      }
    } else {
      setLoginstate(false, {});
    }
  };

  const setLoginstate = (isLogged, userData) => {
    setLoggedIn(isLogged);
    setUser(userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
    cookie.remove("userData");
  };

  useEffect(() => {
    const myUserInfo = cookie.load("userData");
    validateMyUser(myUserInfo);
  }, []);

  const canDo = (capability) => {
    return user?.actions?.includes(capability);
  };

  const state = {
    loggedIn,
    user,
    login,
    logout,
    canDo,
  };

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
