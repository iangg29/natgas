import React, { useEffect, useState } from "react";
import Page from "../../containers/Page";
import axios, {AxiosResponse} from "axios";
import { iBelong, iEmployee } from "../../shared/interfaces/app.interface";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { MySwal } from "../../utils/AlertHandler";

type Inputs = {
  address: string;
  birthdate: string;
  cellphone: number;
  contractdate: string;
  rfc: string;
  position: string;
  idDepartamento: number;
};

const ActualizaPerfil = ({ auth }: any): JSX.Element => {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<iEmployee>({
    address: "",
    birthdate: new Date().toISOString().slice(0, -14),
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

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs): void => {
    (async () => {
      await Promise.all([
        axios.patch(`/user/me`, {
          address: data.address,
          birthdate: data.birthdate,
          cellphone: data.cellphone,
          contractdate: data.contractdate,
          rfc: data.rfc,
        }),
      ])
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
        })
        .finally(() => {
          navigate("/app/profile");
        });
    })();
  };

  useEffect(() => {
    (async () => {
      axios
        .get(`/user/me`)
        .then((res: AxiosResponse) => {
          setProfile(res.data.data.documents)
        }).catch(error => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });});
      })();
  });

  return (
    <Page title="Mi perfil" headTitle="Mi perfil" padding={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-gilroy-light">
          <hr />
          <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">RFC</h4>
              <input
                type="text"
                defaultValue={auth.user.rfc}
                {...register("rfc")}
                placeholder="RFC"
                className="profile-input dark:text-black"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Teléfono</h4>
              <input
                type="number"
                defaultValue={auth.user.cellphone}
                {...register("cellphone")}
                placeholder="Teléfono"
                className="profile-input dark:text-black"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Correo electrónico</h4>
              <span>{auth.user.email}</span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
            <div className="w-full md:w-1/2">
              <h4 className="font-gilroy-extrabold">Dirección</h4>
              <input
                type="text"
                defaultValue={auth.user.address}
                {...register("address")}
                placeholder="Dirección"
                className="profile-input dark:text-black"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="font-gilroy-extrabold">Fecha de nacimiento</h4>
              <input
                type="date"
                defaultValue={new Date(auth.user.birthdate)
                  .toISOString()
                  .slice(0, -14)}
                {...register("birthdate")}
                placeholder="Fecha de nacimiento"
                className="profile-input dark:text-black"
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

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(ActualizaPerfil);
