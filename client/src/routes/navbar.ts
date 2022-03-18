import { HomeIcon, UserIcon } from "@heroicons/react/solid";

type NavbarLink = {
  path: string;
  icon: any;
  name: string;
};

const routes: NavbarLink[] = [
  {
    path: "/app/dashboard",
    icon: HomeIcon,
    name: "Dashboard",
  },
  {
    path: "/app/profile",
    icon: UserIcon,
    name: "Perfil",
  },
];

export default routes;
