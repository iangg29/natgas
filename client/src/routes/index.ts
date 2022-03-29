import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/perfil/Profile"));
const CompleteProfile = lazy(() => import("../pages/perfil/CompleteProfile"));
const Employees = lazy(() => import("../pages/empleados/Employees"));
const Employee = lazy(() => import("../pages/empleados/Employee"));
const SolicitarNGB = lazy(() => import("../pages/natgasblocks/SolicitarNGB"));
const SolicitarVac = lazy(() => import("../pages/vacaciones/SolicitarVac"));
const VistaSolicitud = lazy(() => import("../pages/vacaciones/VistaSolicitud"));
const MisSolicitudes = lazy(() => import("../pages/perfil/MisSolicitudes"));

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
