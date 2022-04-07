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
const Token = lazy(() => import("../pages/utils/token"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const FormBlog = lazy(() => import("../pages/blog/FormBlog"));
const FormBanner = lazy(() => import("../pages/banner/FormBanner"));
const BuscarVacaciones = lazy(
  () => import("../pages/vacaciones/BuscarVacaciones"),
);
const Reportes = lazy(() => import("../pages/reports/AllReports"));
const Rangos = lazy(() => import("../pages/vacaciones/ranges/Rangos"));
const TestPage = lazy(() => import("../pages/TestPage"));
const ReportsForm = lazy(() => import("../pages/reports/FormReport"));

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
    path: "/vacations/request",
    component: SolicitarVac,
  },
  {
    path: "/vacations/ranges",
    component: Rangos,
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
    path: "/token",
    component: Token,
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
    path: "/blog",
    component: Blog,
  },

  {
    path: "/blog/form",
    component:FormBlog,
  },
  {
    path: "/bannerform",
    component:FormBanner,
  },
  {
    path: "/TestPage",
    component: TestPage,
  }
];

export default routes;
