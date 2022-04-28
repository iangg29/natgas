export type NavbarLink = {
  path: string;
  name: string;
};

const routes: NavbarLink[] = [
  {
    path: "/app/dashboard",
    name: "Dashboard",
  },
  {
    path: "/app/profile",
    name: "Perfil",
  },
  {
    path: "/app/employees",
    name: "Empleados",
  },
  {
    path: "/app/blog",
    name: "Blog",
  },
  {
    path: "/app/reports",
    name: "Reportes Mensuales",
  },
];

export default routes;
