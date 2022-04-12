import { HomeIcon, UserIcon } from "@heroicons/react/solid";

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
];

export default routes;
