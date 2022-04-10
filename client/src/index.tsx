import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/styles.css";
import App from "./App";
import Loading from "./utils/Loading";
import axios from "axios";

// TODO: E2E & Unit testing is still pending. (Cypress & JEST [Pending]).
// TODO: For Blog posts, an S3 server (File management) is required, GCP provides one. [API]
// GCP => Google Cloud Platform

axios.defaults.baseURL = process.env.REACT_APP_API_URI;

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
);
