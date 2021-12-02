import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { AuthCheckLogin } from "../../utils/Auth";

export default function Authenticated(props: any) {
  const [cookie] = useCookies(["user"]);
  useEffect(() => {
    AuthCheckLogin(cookie);
  }, []);
  return <div>{props.children}</div>;
}
