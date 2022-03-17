import { HomeIcon } from "@heroicons/react/solid";

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
];

export default routes;
