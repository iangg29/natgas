import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        Mi Perfil
      </h1>
      <div className="py-10">
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
