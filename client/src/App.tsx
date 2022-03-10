import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Error404 } from "./pages/404";
import Authenticated from "./utils/authenticated";
import { Dashboard } from "./pages/dashboard";

function App(): JSX.Element {
  return (
    <Router>
      <div id="app" className="w-full h-screen">
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Landing />} />
          <Route
            path="/dashboard"
            element={
              <Authenticated>
                <Dashboard />
              </Authenticated>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
