type SidebarLink = {
  path: string;
  icon: string;
  name: string;
};

const routes: SidebarLink[] = [
  {
    path: "/app/dashboard",
    icon: "home",
    name: "Dashboard",
  },
];

export default routes;
