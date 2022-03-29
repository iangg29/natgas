import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { IEmployee } from "../shared/interfaces/app.interface";
import Page from "../containers/Page";

const Employee = (): JSX.Element => {
  const { number } = useParams<string>();

  const [employee, setEmployee] = useState<IEmployee>({
    address: "",
    birthDate: "",
    cellphone: 0,
    contractDate: "",
    created_at: "",
    email: "",
    gender: "",
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
    <Page title={employee.email} headTitle={employee.email}>
      <hr />
      <p>{employee.cellphone}</p>
    </Page>
  );
};

export default Employee;
