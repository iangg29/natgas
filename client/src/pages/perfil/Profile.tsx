import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../../containers/Page";
import axios, { AxiosResponse } from "axios";
import { IEmployee } from "../../shared/interfaces/app.interface";

const Profile = (): JSX.Element => {
  // TODO: (Registra perfil) User is allowed to edit basic data while he is still pending of approval by HR.
  const [profile, setProfile] = useState<IEmployee>({
    address: "",
    birthdate: "",
    cellphone: 0,
    contractdate: "",
    created_at: "",
    email: "",
    gender: "",
    lastname: "",
    name: "",
    ngBlocks: 0,
    number: 0,
    rfc: "",
    updated_at: "",
    vacations: 0,
    verified: false,
  });
  const { user } = useAuth0();

  useEffect(() => {
    (async () => {
      await axios
        .get(`/user/email/${user?.email}`)
        .then((res: AxiosResponse) => {
          console.log(res);
          setProfile(res.data.data.document[0]);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, [user]);

  return (
    <Page title="Mi perfil" headTitle="Mi perfil">
      <div className="dark:text-gray-200">
        <p>
          {profile.email} your employee number is {profile.number} and RFC is{" "}
          {profile.rfc}
        </p>
      </div>
    </Page>
  );
};

export default Profile;
