import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));

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
];

export default routes;
