import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import Page from "../containers/Page";
import { IEmployee } from "../shared/interfaces/app.interface";

const Employees = (): JSX.Element => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(process.env.REACT_APP_API_URI + "/user")
        .then((res: AxiosResponse) => {
          setEmployees(res.data.data.documents);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, []);

  return (
    <Page title="Empleados" headTitle="Empleados">
      {employees?.map((employee: IEmployee, idx: number) => (
        <div key={idx} className="p-5">
          <p>{employee.email}</p>
          {!employee.verified ? (
            <>
              <br />
              <Link
                to={`/app/profile/${employee.email}/complete`}
                className="main-button"
              >
                Completar perfil
              </Link>
            </>
          ) : null}
        </div>
      ))}
    </Page>
  );
};

export default Employees;
