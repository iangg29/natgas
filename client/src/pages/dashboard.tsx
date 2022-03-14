import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const Dashboard = (): JSX.Element => {
  // TODO: Pull, manipulate and render data from the API. (Maybe dynamic grid.)
  return <h1>Dashboard</h1>;
};

export default withAuthenticationRequired(Dashboard);
