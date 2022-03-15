import React, { lazy } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./containers/Layout"));
const Landing = lazy(() => import("./pages/Landing"));

function App(): JSX.Element {
  // TODO: Implement missing routes and fix Sidebar & Navbar display. (Only authenticated users) [Nested routers maybe ¿?]
  // TODO: Remember to use HeadlessUI to simplify components. Only render data.
  // TODO: Fonts pulled from files are still missing in TailwindCSS. [HIGH PRIORITY FIX].

  const { isLoading, error } = useAuth0();

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
        <div id="app" className="w-full h-screen">
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
