import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Page from "../../containers/Page";
import { iEmployee } from "../../shared/interfaces/app.interface";
import { MySwal } from "../../utils/AlertHandler";

const CompleteProfile = (): JSX.Element => {
  // TODO: HR Fills sensitive data and locks own user profile modification.

  let { email } = useParams<string>();

  const [employee, setEmployee] = useState<iEmployee>({
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
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .get(`/user/email/${email}`)
        .then((res: AxiosResponse) => {
          if (res.data.data.document.size !== 1) {
            navigate("/app/employees");
            return;
          }
          if (res.data.data.document[0].verified) {
            MySwal.fire({
              title: "¡Error!",
              icon: "error",
              text: "El usuario ya ha sido verificado.",
              confirmButtonColor: "#002b49",
            }).then(() => {
              navigate("/app/employees");
              return;
            });
          }
          setEmployee(res.data.data.document[0]);
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
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
