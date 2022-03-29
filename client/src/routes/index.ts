import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const CompleteProfile = lazy(() => import("../pages/CompleteProfile"));
const Employees = lazy(() => import("../pages/Employees"));
const Employee = lazy(() => import("../pages/Employee"));
const SolicitarNGB = lazy(() => import("../pages/SolicitarNGB"));
const SolicitarVac = lazy(() => import("../pages/SolicitarVac"));
const VistaSolicitud = lazy(() => import("../pages/VistaSolicitud"));
const MisSolicitudes = lazy(() => import("../pages/MisSolicitudes"));

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
    path: "/SolicitudesPendientes",
    component: VistaSolicitud,
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
  {
    path: "/employee/:number",
    component: Employee,
  },
  {
    path: "/SolicitarNGB",
    component: SolicitarNGB,
  },
  {
    path: "/MisSolicitudes",
    component: MisSolicitudes,
  },
];

export default routes;
