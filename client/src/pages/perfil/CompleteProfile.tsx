import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import {
  IDepartment,
  IEmployment,
} from "../../shared/interfaces/app.interface";
import Page from "../../containers/Page";
import { IEmployee } from "../../shared/interfaces/app.interface";
import { MySwal } from "../../utils/AlertHandler";

const CompleteProfile = (): JSX.Element => {
  // TODO: HR Fills sensitive data and locks own user profile modification.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEmployee>();
  
  let { email } = useParams<string>();

  //const [departments, setDepartments] = useParams<IDepartment([])>;


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
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IEmployee> = (data: any): void => {
    (async () => {
      await axios
        .get(`/user/email/${email}`, data)
        .then((res: AxiosResponse) => {
          reset();
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
  };
  

  return (
    <Page
      title={`Completar perfil (${email})`}
      headTitle="Completar perfil"
      padding={true}
    >
      <h1>{employee.email}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-10">
        <div className="">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                RFC
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="text"
                placeholder="RFC"
                {...register("rfc")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Dirección
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="text"
                placeholder="Dirección"
                {...register("address")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Fecha de nacimiento
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="date"
                placeholder="Fecha"
                {...register("birthdate")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Teléfono
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="number"
                placeholder="Teléfono"
                {...register("cellphone")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Género
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="text"
                placeholder="Género"
                {...register("gender")} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Departamento
              </label>
              <select
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                placeholder="RFC"
                {...register("rfc")} 
              >
              </select>
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Puesto
              </label>
              <select
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                placeholder="Dirección"
                {...register("address")} 
              >

              </select>
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Inicio de contrato
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="date"
                placeholder="Fecha"
                {...register("contractdate")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Natgas Blocks disponibles
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="number"
                placeholder="5"
                {...register("ngBlocks")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Días de vacaciones disponibles
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="number"
                placeholder="10"
                {...register("gender")} 
              />
            </div>
            <div className="m-4 h-16 ">
              <label className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
                Días de vacaciones ganados
              </label>
              <input
                className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
                type="number"
                placeholder="5"
                {...register("gender")} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-30 sm:h-37 flex">
        <div className="m-auto">
          {" "}
          <button className="primary-button bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two" type="submit">
            Confirmar registro
          </button>
        </div>
      </div>
    </form>
    </Page>
  );
};

export default CompleteProfile;