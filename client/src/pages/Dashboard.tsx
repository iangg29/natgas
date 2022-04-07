import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../containers/Page";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";

const Dashboard = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <Page title={`Bienvenid@ ${user?.name}`} headTitle="Dashboard">
      <div className="py-10">
        <Link to="/app/requests">Requests</Link>
        <ButtonBar />
      </div>
    </Page>
  );
};

export default Dashboard;
