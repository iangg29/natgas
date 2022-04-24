import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./containers/Layout"));
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/auth/login"));

function App(): JSX.Element {
  return (
    <>
      <Router>
        <div id="app" className="h-screen w-full">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app/*" element={<Layout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
