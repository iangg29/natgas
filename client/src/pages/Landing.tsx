import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet";
import Title from "../components/Title/Title";
const Landing = (): JSX.Element => {
  // TODO: Implement final design.

  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Helmet>
        <title>NatGas - Recursos Humanos</title>
      </Helmet>
      <div className="h-screen w-full">
        <p className="font-gilroy text-5xl uppercase">LANDING PAGE</p>
        <button
          className="main-button"
          onClick={() =>
            loginWithRedirect({
              redirectUri: `${process.env.REACT_APP_DOMAIN}/app`,
            })
          }
        >
          Login
        </button>
      </div>
      <div className="p-10">
      </div>
    </>
  );
};

export default Landing;
