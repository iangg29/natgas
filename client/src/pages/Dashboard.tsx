import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../containers/Page";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";
import TitleWhite from "../components/Title/TitleWhite";

const Dashboard = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <Page title={`Bienvenid@ ${user?.name}`} headTitle="Dashboard">
      <div className="py-10">
        <div className="grid">
          <Link to="/app/requests">Requests</Link>
          <Link to="/app/vacations/ranges">Rangos</Link>
        </div>
        <ButtonBar />
        <TitleWhite title="Últimos Natgas Blogs" />
      </div>
    </Page>
  );
};

export default Dashboard;
