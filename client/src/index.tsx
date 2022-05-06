import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "flowbite";

import "./assets/css/styles.css";
import App from "./App";
import Loading from "./utils/Loading";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import "flowbite";

// TODO: E2E & Unit testing is still pending. (Cypress).
// TODO: For Blog posts, an S3 server (File management) is required, GCP provides one. [API]
// GCP => Google Cloud Platform

axios.defaults.baseURL = process.env.REACT_APP_API_URI;

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Provider>,
);
