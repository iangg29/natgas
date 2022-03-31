import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <div className="flex flex-col space-y-6 py-10 text-gray-700 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">RFC</h4>
          <span>{employee.rfc}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">Teléfono</h4>
          <span>{employee.cellphone}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">Correo electrónico</h4>
          <span>{employee.email}</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-6 py-10 text-gray-700 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/2">
          <h4 className="font-bold">Dirección</h4>
          <span>{employee.address}</span>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="font-bold">Fecha de nacimiento</h4>
          <span>{new Date(employee.birthdate).toLocaleDateString()}</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-6 py-10 text-gray-700 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">No. Empleado</h4>
          <span>{employee.number}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">Departamento</h4>
          <span>Departamento</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">Puesto</h4>
          <span>Puesto</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col py-10 text-gray-700 md:flex-row">
        <div className="w-full md:w-1/3">
          <h4 className="font-bold">Inicio de contrato</h4>
          <span>{new Date(employee.contractdate).toLocaleDateString()}</span>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 py-10 md:grid-cols-2">
        <div className="flex flex-col space-y-10">
          <div>
            Vacaciones usadas: <span className="number-bold">3</span>
          </div>
          <div>
            Vacaciones disponibles: <span className="number-bold">25</span>
          </div>
          <div>
            Vacaciones ganadas: <span className="number-bold">4</span>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <div>
            Natgas Blocks usados: <span className="number-bold">4</span>
          </div>
          <div>
            Natgas Blocks disponibles: <span className="number-bold">1</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-14 py-14 text-center md:flex-row md:space-y-0">
        <div className="w-full md:w-1/2">
          <Link
            to="/app/natgasblocks/request"
            className="rounded-full border-2 border-natgas-azul-claro px-8 py-3"
          >
            Solicitar Natgas Block
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Link
            to="/app/vacations/request"
            className="rounded-full border-2 border-natgas-verde px-8 py-3"
          >
            Solicitar vacaciones
          </Link>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link
          to="/app/dashboard"
          className="rounded-full bg-natgas-sec-one px-8 py-3 text-white"
        >
          Editar perfil
        </Link>
      </div>
    </Page>
  );
};

export default Employee;
