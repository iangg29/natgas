import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const SolicitarNGB = lazy(() => import("../pages/SolicitarNGB"));

const SolicitarVac = lazy(() => import("../pages/SolicitarVac"));
const VistaSolicitud = lazy(() => import("../pages/VistaSolicitud"));
const MisSolicitudes = lazy(() => import("../pages/MisSolicitudes"));
const BuscarVacaciones = lazy(() => import("../pages/BuscarVacaciones"));

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
    path: "/SolicitarNGB",
    component: SolicitarNGB,
  },

  {
    path: "/MisSolicitudes",
    component: MisSolicitudes,
  },

  {
    path: "/BuscarVacaciones",
    component: BuscarVacaciones,
  },
];

export default routes;
