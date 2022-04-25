import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Loading from "../utils/Loading";
import Main from "../containers/Main";
import routes, { IRoute } from "../routes";
import Header from "../components/Header/Header";
import Error404 from "../pages/404";
import { connect } from "react-redux";

const Layout = (props: any): JSX.Element => {
  const { auth } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  useEffect(() => {
    if (!auth.isLoggedIn) navigate("/login");
  }, [auth, navigate]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex w-full flex-1 flex-col">
        <Header />
        <Main>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route: IRoute, i: number) => {
                return (
                  <Route
                    key={i}
                    path={`${route.path}`}
                    element={<route.component />}
                  />
                );
              })}
              <Route path="/" element={<Navigate to="/app/dashboard" />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(Layout);
