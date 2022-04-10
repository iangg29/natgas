import React from "react";
import Page from "../containers/Page";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";
import DashCarousel from "../components/Carousel/DashCarousel";
import TitleWhite from "../components/Title/TitleWhite";

const Dashboard = (): JSX.Element => {
  return (
    <Page title={`Bienvenid@`} headTitle="Dashboard">
      <div className="py-10">
        <DashCarousel />
        <Link to="/app/requests">Requests</Link>
        <ButtonBar />
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
