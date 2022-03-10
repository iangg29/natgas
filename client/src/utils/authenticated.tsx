import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Authenticated = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};

export default withAuthenticationRequired(Authenticated);
