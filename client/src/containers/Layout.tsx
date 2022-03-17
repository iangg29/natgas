import React, { Suspense } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../utils/Loading";
import Main from "../containers/Main";
import routes from "../routes";
import Header from "../components/Header/Header";

const Layout = (): JSX.Element => {
  // TODO: Pull, manipulate and render data from the API. (Maybe dynamic grid.)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex w-full flex-1 flex-col">
        <Header />
        <Main>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={`${route.path}`}
                    element={<route.component />}
                  />
                );
              })}
              <Route path="/" element={<Navigate to="/app/dashboard" />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Layout);
