import React, { Suspense, useContext, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import Loading from "../utils/Loading";
import Main from "../containers/Main";
import routes from "../routes";

const Layout = (): JSX.Element => {
  // TODO: Pull, manipulate and render data from the API. (Maybe dynamic grid.)
  const { isSidebarOpen, closeSidebar } = useContext<any>(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
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
