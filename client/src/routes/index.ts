import { ExoticComponent, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/perfil/Profile"));
const CompleteProfile = lazy(() => import("../pages/perfil/CompleteProfile"));
const ActualizaPerfil = lazy(() => import("../pages/perfil/ActualizaPerfil"));
const Employees = lazy(() => import("../pages/empleados/Employees"));
const Employee = lazy(() => import("../pages/empleados/Employee"));
const SolicitarVac = lazy(() => import("../pages/vacaciones/SolicitarVac"));
const VistaSolicitud = lazy(() => import("../pages/vacaciones/VistaSolicitud"));
const MisSolicitudes = lazy(() => import("../pages/perfil/MisSolicitudes"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const FormBlog = lazy(() => import("../pages/blog/FormBlog"));
const FormBanner = lazy(() => import("../pages/banner/FormBanner"));
const Asuetos = lazy(() => import("../pages/asuetos/asuetos"));
const BuscarVacaciones = lazy(
  () => import("../pages/vacaciones/BuscarVacaciones"),
);
const Reportes = lazy(() => import("../pages/reports/AllReports"));
const Rangos = lazy(() => import("../pages/vacaciones/ranges/Rangos"));
const ViewBlog = lazy(() => import("../pages/blog/ViewBlog"));
const EditBlog = lazy(() => import("../pages/blog/EditBlog"));
const ReportsForm = lazy(() => import("../pages/reports/FormReport"));
const EditReports = lazy(() => import("../pages/reports/EditReport"));
const RegistrosPendientes = lazy(() => import("../pages/perfil/RegistrosPendientes"));

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
    path: "/profile/complete",
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
    path: "/requests",
    component: MisSolicitudes,
  },
  {
    path: "/vacations/search",
    component: BuscarVacaciones,
  },
  {
    path: "/reports/",
    component: Reportes,
  },
  {
    path: "/reports/new",
    component: ReportsForm,
  },
  {
    path: "/reports/edit/:id",
    component: EditReports,
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
    path: "/blog/edit/:id",
    component: EditBlog,
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
  {
    path: "/pending/profiles",
    component: RegistrosPendientes ,
  },
];

export default routes;
