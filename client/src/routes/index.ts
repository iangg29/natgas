import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const CompleteProfile = lazy(() => import("../pages/CompleteProfile"));
const Employees = lazy(() => import("../pages/Employees"));

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
    path: "/profile/:email/complete",
    component: CompleteProfile,
  },
  {
    path: "/employees",
    component: Employees,
  },
];

export default routes;
