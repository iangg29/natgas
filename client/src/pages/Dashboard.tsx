import React from "react";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";
import DashCarousel from "../components/Carousel/DashCarousel";
import { Helmet } from "react-helmet";

const Dashboard = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="overflow-hidden">
        <div className="container mx-auto mb-5 p-10">
          <h1 className="text-center text-2xl font-bold font-bold text-natgas-azul dark:text-gray-50 md:text-left">
            Bienvenid@
          </h1>
          <hr className="natgas-divisor" />
          <DashCarousel />
          <ButtonBar />
          <div className="grid dark:text-gray-100">
            <Link to="/app/requests">Requests</Link>
            <Link to="/app/vacations/ranges">Rangos</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
