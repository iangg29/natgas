import React from "react";
import { Helmet } from "react-helmet";
import natgas from "../assets/img/NATGAS-2.jpg";
import logo from "../assets/img/IMAGOTIPO_contorno.png";
import { Link } from "react-router-dom";

const Landing = (): JSX.Element => {
  // TODO: Implement final design.

  return (
    <>
      <Helmet>
        <title>NatGas - Recursos Humanos</title>
      </Helmet>
      <div
        className="h-screen w-full bg-gradient-to-bl from-natgas-verde to-natgas-azul-claro p-20"
        style={{
          background: `url(${natgas}) center center no-repeat, linear-gradient(-45deg, #43B02A, #007DBA)`,
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-lg text-center">
          <img src={logo} alt="Natgas" className="mx-auto h-52 animate-pulse" />
          <Link to="/app/dashboard" className="main-button">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
