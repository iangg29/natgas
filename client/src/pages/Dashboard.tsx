import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../containers/Page";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";
import DashCarousel from "../components/Carousel/DashCarousel";

const Dashboard = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <Page title={`Bienvenid@ ${user?.name}`} headTitle="Dashboard">
      <div className="py-10">
        <DashCarousel/>
        <Link to="/app/requests">Requests</Link>
        <ButtonBar />
        
      </div>
    </Page>
  );
};

export default Dashboard;
