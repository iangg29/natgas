import { ExoticComponent, lazy } from "react";


const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const SolicitarNGB = lazy(() => import("../pages/SolicitarNGB"))
const Test = lazy(() => import("../pages/Test"))
const SolicitarVac = lazy(() => import("../pages/SolicitarVac"));
const VistaSolicitud = lazy(() => import("../pages/VistaSolicitud"));

type Route = {
  path: string;
  component: ExoticComponent;
};

const routes: Route[] = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/SolicitarVac",
    component: SolicitarVac,
  },
  {
    path: "/VistaSolicitudes",
    component: VistaSolicitud,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/SolicitarNGB",
    component: SolicitarNGB,
  },

  {
    path: "/Test",
    component: Test,
  },
];

export default routes;
