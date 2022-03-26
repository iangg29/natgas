import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Page from "../containers/Page";

const CompleteProfile = (): JSX.Element => {
  let { email } = useParams();

  const [employee, setEmployee] = useState<any>({});

  useEffect(() => {
    (async () => {
      await axios
        .get(process.env.REACT_APP_API_URI + `/user/email/${email}`)
        .then((res) => {
          if (res.data.data.document.size != 1) {
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
    <Page title={`Completar perfil (${email})`} headTitle="Completar perfil">
      <h1>{email}</h1>
    </Page>
  );
};

export default CompleteProfile;
