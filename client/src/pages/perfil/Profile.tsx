import React, { useEffect, useState } from "react";
import Page from "../../containers/Page";
import axios, { AxiosResponse } from "axios";
import { IEmployment } from "../../shared/interfaces/app.interface";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Stats from "../../components/Profile/Stats";

const Profile = (props: any): JSX.Element => {
  // TODO: (Registra perfil) User is allowed to edit basic data while he is still pending of approval by HR.

  const { auth } = props;
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

  useEffect(() => {
    (async () => {
      await axios
        .get(`/user/email/${auth.user.email}`)
        .then((res: AxiosResponse) => {
          setProfile(res.data.data.document[0]);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, [auth.user]);

  return (
    <Page title="Mi perfil" headTitle="Mi perfil" padding={true}>
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
            <span>{profile.departamento}</span>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-gilroy-extrabold">Puesto</h4>
            <span>{profile.position}</span>
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
        <Stats user={auth.user} />
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
            to={`/app/profile/${profile.number}/update`}
            className="rounded-full bg-natgas-sec-one px-8 py-3 text-white hover:bg-natgas-sec-two"
          >
            Editar perfil
          </Link>
        </div>
      </div>
    </Page>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(Profile);
