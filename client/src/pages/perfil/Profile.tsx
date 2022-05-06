import React, { Suspense } from "react";
import Page from "../../containers/Page";
import axios from "axios";
import { iEmployment } from "../../shared/interfaces/app.interface";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Stats from "../../components/Profile/Stats";
import { suspend } from "suspend-react";
import ContentLoader from "react-content-loader";
import RequestNGB from "../../components/NatgasBlocks/RequestNGB";
import RequestVacations from "../../components/Vacaciones/RequestVacations";

const Profile = (props: any): JSX.Element => {
 
  const { auth } = props;

  return (
    <Page title="Mi perfil" headTitle="Mi perfil" padding={true}>
      <Suspense fallback={<ProfileLoader />}>
        <ProfileData auth={auth} />
      </Suspense>
      <hr />
      <Stats user={auth.user} />
      <hr />
      <div className="flex flex-col space-y-14 py-14 text-center md:flex-row md:space-y-0">
        <div className="w-full md:w-1/3">
          <RequestNGB user={auth.user} />
        </div>
        <div className="w-full md:w-1/3">
          <RequestVacations user={auth.user} />
        </div>
        <div className="w-full md:w-1/3">
        <Link
          to={`/app/requests/`}
          className="rounded-full border-2 inline-block border-natgas-azul px-8 py-3 hover:bg-natgas-azul hover:text-white"
        >
          Solicitudes Realizadas
        </Link>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link
          to={`/app/profile/me`}
          className="rounded-full bg-natgas-sec-one px-8 py-3 text-white hover:bg-natgas-sec-two"
        >
          Editar perfil
        </Link>
      </div>
    </Page>
  );
};

const ProfileData = ({ auth }: any): JSX.Element => {
  const data: iEmployment = suspend(
    async () => {
      const res: any = await axios.get(`/user/me`);
      return await res.data.data.user;

    },
    ["profileDataFetch"],
    {
      lifespan: 60000,
    },
  );

  return (
    <div className="font-gilroy-light">
      <hr />
      <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">RFC</h4>
          <span>{data.rfc}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">Teléfono</h4>
          <span>{data.cellphone}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">Correo electrónico</h4>
          <span>{data.email}</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/2">
          <h4 className="font-gilroy-extrabold">Dirección</h4>
          <span>{data.address}</span>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="font-gilroy-extrabold">Fecha de nacimiento</h4>
          <span>{new Date(data.birthdate).toLocaleDateString()}</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">No. Empleado</h4>
          <span>{data.number}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">Departamento</h4>
          <span>{data.departamento}</span>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">Puesto</h4>
          <span>{data.position}</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col py-10 text-gray-600 dark:text-gray-200 md:flex-row">
        <div className="w-full md:w-1/3">
          <h4 className="font-gilroy-extrabold">Inicio de contrato</h4>
          <span>{new Date(data.contrato).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

const ProfileLoader = (): JSX.Element => {
  return (
    <ContentLoader viewBox="0 0 400 230">
      <svg
        role="img"
        className="w-full"
        aria-labelledby="loading-aria"
        viewBox="0 0 400 230"
        preserveAspectRatio="none"
      >
        <title id="loading-aria">Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#clip-path)"
          style={{ fill: "url('#fill')" }}
        />
        <defs>
          <clipPath id="clip-path">
            <rect x="3" y="41" rx="0" ry="0" width="55" height="11" />
            <rect x="1" y="55" rx="0" ry="0" width="80" height="10" />
            <rect x="39" y="60" rx="0" ry="0" width="8" height="2" />
            <rect x="153" y="39" rx="0" ry="0" width="55" height="11" />
            <rect x="153" y="55" rx="0" ry="0" width="80" height="10" />
            <rect x="183" y="60" rx="0" ry="0" width="8" height="2" />
            <rect x="312" y="37" rx="0" ry="0" width="55" height="11" />
            <rect x="310" y="51" rx="0" ry="0" width="80" height="10" />
            <rect x="348" y="56" rx="0" ry="0" width="8" height="2" />
            <rect x="8" y="87" rx="0" ry="0" width="54" height="12" />
            <rect x="9" y="105" rx="0" ry="0" width="199" height="11" />
            <rect x="282" y="83" rx="0" ry="0" width="57" height="12" />
            <rect x="281" y="100" rx="0" ry="0" width="79" height="14" />
            <rect x="10" y="135" rx="0" ry="0" width="56" height="12" />
            <rect x="11" y="151" rx="0" ry="0" width="53" height="12" />
            <rect x="171" y="137" rx="0" ry="0" width="56" height="13" />
            <rect x="318" y="133" rx="0" ry="0" width="58" height="12" />
            <rect x="172" y="154" rx="0" ry="0" width="56" height="11" />
            <rect x="319" y="149" rx="0" ry="0" width="58" height="10" />
            <rect x="8" y="181" rx="0" ry="0" width="60" height="15" />
            <rect x="9" y="202" rx="0" ry="0" width="96" height="11" />
          </clipPath>
          <linearGradient id="fill">
            <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </ContentLoader>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(Profile);
