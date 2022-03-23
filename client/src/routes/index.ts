import { ExoticComponent, lazy } from "react";


const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const SolicitarNGB = lazy(() => import("../pages/SolicitarNGB"))

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
    path: "/profile",
    component: Profile,
  },
  {
    path: "/SolicitarNGB",
    component: SolicitarNGB,
  },
];

export default routes;
