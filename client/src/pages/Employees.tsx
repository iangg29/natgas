import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Page from "../containers/Page";

const Employees = (): JSX.Element => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(process.env.REACT_APP_API_URI + "/user")
        .then((res) => {
          setEmployees(res.data.data.documents);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, []);

  return (
    <Page title="Empleados" headTitle="Empleados">
      {employees?.map((employee: any, idx: number) => (
        <div key={idx} className="p-5">
          <p>{employee.email}</p>
          <br />
          <Link
            to={`/app/profile/${employee.email}/complete`}
            className="main-button"
          >
            Completar perfil
          </Link>
        </div>
      ))}
    </Page>
  );
};

export default Employees;
