import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Page from "../../containers/Page";
import { IEmployee } from "../../shared/interfaces/app.interface";

const CompleteProfile = (): JSX.Element => {
  // TODO: HR Fills sensitive data and locks own user profile modification.

  let { email } = useParams();

  const [employee, setEmployee] = useState<IEmployee>({
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

  useEffect(() => {
    (async () => {
      await axios
        .get(`/user/email/${email}`)
        .then((res: AxiosResponse) => {
          if (res.data.data.document.size !== 1) {
            return <Navigate to="/app/employees" />;
          }
          if (res.data.data.document[0].verified) {
            alert("El usuario ya ha sido verificado.");
            return <Navigate to="/app/employees" />;
          }
          setEmployee(res.data.data.document[0]);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, [email]);

  return (
    <Page
      title={`Completar perfil (${email})`}
      headTitle="Completar perfil"
      padding={true}
    >
      <h1>{employee.email}</h1>
    </Page>
  );
};

export default CompleteProfile;
