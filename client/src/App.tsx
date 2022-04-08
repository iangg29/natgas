import React, { lazy } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./containers/Layout"));
const Landing = lazy(() => import("./pages/Landing"));

function App(): JSX.Element {
  const { error } = useAuth0();

  /*
    TODO: Buggy condition. [Generates confusion with Suspense]
      if (isLoading) {
        return <Loading />;
      }
    */

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <Router>
        <div id="app" className="h-screen w-full">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/app/*" element={<Layout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
