import { useContext } from "react";
import { LoginContext } from "./login";
import { When } from "react-if";

export default function Auth(props) {
  const login2 = useContext(LoginContext);

  const isLoggedIn = login2.loggedIn;

  return <When condition={isLoggedIn}>{props.children}</When>;
}
