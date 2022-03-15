import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));

type Route = {
  path: string;
  component: ExoticComponent;
};

const routes: Route[] = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export default routes;
