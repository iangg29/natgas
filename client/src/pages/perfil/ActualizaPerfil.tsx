import React, { useEffect, useState } from "react";
import Page from "../../containers/Page";
import axios, { AxiosResponse } from "axios";
import { IEmployment } from "../../shared/interfaces/app.interface";
import { Link, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

type Inputs = {
  address: string;
  birthdate: string;
  cellphone: number;
  contractdate: string;
  created_at: string;
  email: string;
  gender: string;
  lastname: string;
  name: string;
  ngBlocks: number;
  number: number;
  rfc: string;
  updated_at: string;
  vacations: number;
  verified: boolean;
  position: string;
  departamento: string;
  contrato: string;
  };

const ActualizaPerfil = (): JSX.Element => {
    
    const { id } = useParams<string>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const navigate = useNavigate();

    const [profile, setProfile] = useState<IEmployment>({
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
      position: "",
      departamento: "",
      contrato: "",
    });
  
    const email = "jbelmonte@natgas.com";
  
    const onSubmit: SubmitHandler<Inputs> = (data: IEmployment): void => {
      (async () => {
        await axios
          .patch(`/user/${id}`, data)
          .then((res: AxiosResponse) => {
            console.log(res.data.data.document[0]);
            setProfile(res.data.data.document[0]);
          })
          .catch((err) =>{
            console.trace(err);
          });
          navigate('/app/profile');
      })();
    };

    useEffect(() => {
      (async () => {
        await axios
          .get(`/user/email/${email}`)
          .then((res: AxiosResponse) => {
            console.log(res.data.data.document[0]);
            setProfile(res.data.data.document[0]);
          })
          .catch((err) => {
            console.trace(err);
          });
      })();
    }, [email]);
  
    return (
      <Page title="Mi perfil" headTitle="Mi perfil" padding={true}>
        <form onSubmit= {handleSubmit(onSubmit)}>
        <div className="font-gilroy-light">
          <hr />
          <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">RFC</h4>
              <input 
                type="string"
                defaultValue={profile.rfc}
                {...register("rfc")}
                placeholder= "RFC"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Teléfono</h4>
              <input 
                type="number"
                defaultValue={profile.cellphone}
                {...register("cellphone")}
                placeholder="Teléfono"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Correo electrónico</h4>
              <span>{profile.email}</span>
              {/* <input 
                type="string"
                defaultValue={profile.email}
                {...register("email")}
                placeholder="Correo electrónico"
                className="modal-input"
              /> */}
            </div>
          </div>
          <hr />
          <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
            <div className="w-full md:w-1/2">
            <h4 className="font-gilroy-extrabold">Dirección</h4>
              <input 
                type="string"
                defaultValue={profile.address}
                {...register("address")}
                placeholder="Dirección"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="font-gilroy-extrabold">Fecha de nacimiento</h4>
              <input 
                type="string"
                defaultValue={new Date(profile.birthdate).toLocaleDateString()}
                {...register("birthdate")}
                placeholder="Fecha de nacimiento"
                className="modal-input"
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">No. Empleado</h4>
              <span>{profile.number}</span>
              {/* <input 
                type="number"
                defaultValue={profile.number}
                {...register("number")}
                placeholder="No. empleado"
                className="modal-input"
              /> */}
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Departamento</h4>
              {/* <span>{profile.departamento}</span> */}
              <input 
                type="string"
                defaultValue={profile.departamento}
                {...register("departamento")}
                placeholder="Departamento"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Puesto</h4>
              {/* <span>{profile.position}</span> */}
              <input 
                type="string"
                defaultValue={profile.position}
                {...register("position")}
                placeholder="Puesto"
                className="modal-input"
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-col py-10 text-gray-600 dark:text-gray-200 md:flex-row">
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Inicio de contrato</h4>
              <input 
                type="string"
                defaultValue={new Date(profile.contractdate).toLocaleDateString()}
                {...register("contractdate")}
                placeholder="Inicio de contrato"
                className="modal-input"
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-col space-y-14 py-14 text-center md:flex-row md:space-y-0">
            <div className="w-full md:w-1/2">
              <button
                type="submit"
                className="rounded-full border-2 border-natgas-azul-claro px-8 py-3 hover:bg-natgas-azul-claro hover:text-white"
              >
                Confirmar cambios
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <Link
                to="/app/profile"
                className="rounded-full border-2 border-natgas-verde px-8 py-3 hover:bg-natgas-verde hover:text-white"
              >
                Cancelar
              </Link>
            </div>
          </div>
        </div>
        </form>
      </Page>
    );
  };

export default ActualizaPerfil