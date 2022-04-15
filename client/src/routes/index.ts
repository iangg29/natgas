import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/perfil/Profile"));
const CompleteProfile = lazy(() => import("../pages/perfil/CompleteProfile"));
const ActualizaPerfil = lazy(() => import("../pages/perfil/ActualizaPerfil"));
const Employees = lazy(() => import("../pages/empleados/Employees"));
const Employee = lazy(() => import("../pages/empleados/Employee"));
const SolicitarNGB = lazy(() => import("../pages/natgasblocks/SolicitarNGB"));
const SolicitarVac = lazy(() => import("../pages/vacaciones/SolicitarVac"));
const VistaSolicitud = lazy(() => import("../pages/vacaciones/VistaSolicitud"));
const MisSolicitudes = lazy(() => import("../pages/perfil/MisSolicitudes"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const FormBlog = lazy(() => import("../pages/blog/FormBlog"));
const FormBanner = lazy(() => import("../pages/banner/FormBanner"));
const Asuetos = lazy(()  => import("../pages/asuetos/asuetos"));
const BuscarVacaciones = lazy(
  () => import("../pages/vacaciones/BuscarVacaciones"),
);
const Rangos = lazy(() => import("../pages/vacaciones/ranges/Rangos"));
const ViewBlog = lazy(() => import("../pages/blog/ViewBlog"));

export type IRoute = {
  path: string;
  component: ExoticComponent;
};

const routes: IRoute[] = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/vacations/request",
    component: SolicitarVac,
  },
  {
    path: "/vacations/ranges",
    component: Rangos,
  },
  {
    path: "/vacations/search",
    component: BuscarVacaciones,
  },
  {
    path: "/requests/pending",
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
    path: "/natgasblocks/request",
    component: SolicitarNGB,
  },
  {
    path: "/requests",
    component: MisSolicitudes,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/:slug",
    component: ViewBlog,
  },
  {
    path: "/blog/form",
    component: FormBlog,
  },
  {
    path: "/bannerform",
    component: FormBanner,
  },
  {
    path: "/asuetos",
    component: Asuetos,
  },
  {
    path: "/profile/:id/update",
    component: ActualizaPerfil,
  },
];

export default routes;
