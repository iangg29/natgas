import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../containers/Page";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";
import CardBlogs from "../components/Cards/CardBlogs";
import TitleWhite from "../components/Title/TitleWhite";

const Dashboard = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <Page title={`Bienvenid@ ${user?.name}`} headTitle="Dashboard">
      <div className="py-10">
        <Link to="/app/requests">Requests</Link>
        <ButtonBar />
        <TitleWhite title="Últimos Natgas Blogs" />
        <CardBlogs 
          title={'Embajadores Natgas'}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, amet nibh sed eu aliquam volutpat..."} 
          date={"6/4/22"} 
        />
      </div>
    </Page>
  );
};

export default Dashboard;
