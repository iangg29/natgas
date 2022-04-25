import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { IEmployee } from "../../shared/interfaces/app.interface";
import Page from "../../containers/Page";
import Stats from "../../components/Profile/Stats";
import { MySwal } from "../../utils/AlertHandler";

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
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
        });
    })();
  }, [number]);

  return (
    <Page
      title={employee.name + " " + employee.lastname}
      headTitle={employee.name}
      padding={true}
    >
      <div className="font-gilroy-light">
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">RFC</h4>
            <span>{employee.rfc}</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Teléfono</h4>
            <span>{employee.cellphone}</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Correo electrónico</h4>
            <span>{employee.email}</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <h4 className="font-gilroy-extrabold">Dirección</h4>
            <span>{employee.address}</span>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="font-gilroy-extrabold">Fecha de nacimiento</h4>
            <span>{new Date(employee.birthdate).toLocaleDateString()}</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600  dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">No. Empleado</h4>
            <span>{employee.number}</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Departamento</h4>
            <span>Departamento</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Puesto</h4>
            <span>Puesto</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col py-10 text-gray-600 dark:text-gray-200 md:flex-row">
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Inicio de contrato</h4>
            <span>{new Date(employee.contractdate).toLocaleDateString()}</span>
          </div>
        </div>
        <hr />
        <Stats user={employee} />
        <hr />
        <div className="mt-14 text-center">
          <Link
            to="/app/dashboard"
            className="rounded-full bg-natgas-sec-one px-8 py-3 text-white hover:bg-natgas-sec-two"
          >
            Editar perfil
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Employee;
