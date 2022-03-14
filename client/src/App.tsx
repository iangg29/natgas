import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Error404 } from "./pages/404";
import { Navbar } from "./components/Navbar";
import Dashboard from "./pages/dashboard";

function App(): JSX.Element {
  // TODO: Implement missing routes and fix Sidebar & Navbar display. (Only authenticated users) [Nested routers maybe ¿?]
  // TODO: Remember to use HeadlessUI to simplify components. Only render data.
  // TODO: Fonts pulled from files are still missing in TailwindCSS. [HIGH PRIORITY FIX].
  return (
    <Router>
      <div id="app" className="w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
