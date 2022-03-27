import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../containers/Page";

const Dashboard = (): JSX.Element => {
  // TODO: (Registra perfil) User is allowed to edit basic data while he is still pending of approval by HR.

  const { user } = useAuth0();

  return (
    <Page title="Mi perfil" headTitle="Mi perfil">
      <div className="py-10 dark:text-gray-200">
        <p>{user?.email}</p>
      </div>
    </Page>
  );
};

export default Dashboard;
