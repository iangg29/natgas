import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Page from "../../containers/Page";
import axios, { AxiosResponse } from "axios";
import { IEmployee } from "../../shared/interfaces/app.interface";
import { Link } from "react-router-dom";

const Profile = (): JSX.Element => {
  // TODO: (Registra perfil) User is allowed to edit basic data while he is still pending of approval by HR.
  const [profile, setProfile] = useState<IEmployee>({
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
  const { user } = useAuth0();

  useEffect(() => {
    (async () => {
      await axios
        .get(`/user/email/${user?.email}`)
        .then((res: AxiosResponse) => {
          console.log(res);
          setProfile(res.data.data.document[0]);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, [user]);

  return (
    <Page title="Mi perfil" headTitle="Mi perfil">
      <div className="font-gilroy-light">
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">RFC</h4>
            <span>{profile.rfc}</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Teléfono</h4>
            <span>{profile.cellphone}</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Correo electrónico</h4>
            <span>{profile.email}</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <h4 className="font-gilroy-extrabold">Dirección</h4>
            <span>{profile.address}</span>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="font-gilroy-extrabold">Fecha de nacimiento</h4>
            <span>{new Date(profile.birthdate).toLocaleDateString()}</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">No. Empleado</h4>
            <span>{profile.number}</span>
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
            <span>{new Date(profile.contractdate).toLocaleDateString()}</span>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 py-10 text-gray-600 dark:text-gray-200 md:grid-cols-2">
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
              className="rounded-full border-2 border-natgas-azul-claro px-8 py-3 hover:bg-natgas-azul-claro hover:text-white"
            >
              Solicitar Natgas Block
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Link
              to="/app/vacations/request"
              className="rounded-full border-2 border-natgas-verde px-8 py-3 hover:bg-natgas-verde hover:text-white"
            >
              Solicitar vacaciones
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
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

export default Profile;
