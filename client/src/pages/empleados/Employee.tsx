import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { IEmployee } from "../../shared/interfaces/app.interface";
import Page from "../../containers/Page";

const Employee = (): JSX.Element => {
  const { number } = useParams<string>();

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
        .get(`/user/${number}`)
        .then((res: AxiosResponse) => {
          setEmployee(res.data.data.document[0]);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, [number]);

  return (
    <Page
      title={employee.name + " " + employee.lastname}
      headTitle={employee.name}
    >
      <hr />
      <p>{employee.cellphone}</p>
    </Page>
  );
};

export default Employee;
