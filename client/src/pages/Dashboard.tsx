import React from "react";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import DashCarousel from "../components/Carousel/DashCarousel";
import { Helmet } from "react-helmet";
import LastBlog from "../components/Dashboard/LastBlog";
import { connect } from "react-redux";

const Dashboard = ({ auth }: any): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="overflow-hidden">
        <div className="container mx-auto mb-5 p-10">
          <h1 className="text-center text-2xl font-bold font-bold text-natgas-azul dark:text-gray-50 md:text-left">
            Bienvenid{auth.user.gender === "Masculino" ? "o" : "a"}{" "}
            {auth.user.name}
          </h1>
          <hr className="natgas-divisor" />
          <DashCarousel />
          <ButtonBar />
        </div>
        <LastBlog />
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
