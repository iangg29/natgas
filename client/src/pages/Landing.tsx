import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet";
import natgas from "../assets/img/NATGAS-2.jpg";
import logo from "../assets/img/IMAGOTIPO_contorno.png";

const Landing = (): JSX.Element => {
  // TODO: Implement final design.

  const { loginWithRedirect } = useAuth0();

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
          <button
            className="main-button"
            onClick={() =>
              loginWithRedirect({
                redirectUri: `${process.env.REACT_APP_DOMAIN}/app`,
              })
            }
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
