import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/styles.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Loading from "./utils/Loading";

// TODO: E2E & Unit testing is still pending. (Cypress & JEST [Pending]).
// TODO: For Blog posts, an S3 server (File management) is required, GCP provides one. [API]

// GCP => Google Cloud Platform

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Suspense>,
);
