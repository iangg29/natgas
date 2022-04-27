import React, { useEffect, useState } from "react";
import Page from "../../containers/Page";
import axios from "axios";
import { iEmployee, iBelong } from "../../shared/interfaces/app.interface";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { connect } from "react-redux";

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

  const [belong, setBelong] = useState<iBelong>({
    idPertenece: 0,
    email: "",
    idDepartamento: 0,
    position: "",
    updated_at: "",
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs): void => {
    (async () => {
      try {
        await axios.patch(`/user/${auth.user.number}`, {
          address: data.address,
          birthdate: data.birthdate,
          cellphone: data.cellphone,
          contractdate: data.contractdate,
          rfc: data.rfc,
        });
        await axios.patch(`/pertenece/email/${auth.user.email}`, {
          idDepartamento: data.idDepartamento,
          position: data.position,
        });
      } catch (error: any) {
        alert(error.message);
      }
      navigate("/app/profile");
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const perfil = await axios.get(`/user/email/${auth.user.email}`);
        const pertenece = await axios.get(
          `/pertenece/email/${auth.user.email}`,
        );

        setProfile(perfil.data.data.document);
        setBelong(pertenece.data.data.document);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [auth.user.email]);

  return (
    <Page title="Mi perfil" headTitle="Mi perfil" padding={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-gilroy-light">
          <hr />
          <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">RFC</h4>
              <input
                type="string"
                defaultValue={auth.user.rfc}
                {...register("rfc")}
                placeholder="RFC"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Teléfono</h4>
              <input
                type="number"
                defaultValue={auth.user.cellphone}
                {...register("cellphone")}
                placeholder="Teléfono"
                className="modal-input"
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
                type="string"
                defaultValue={auth.user.address}
                {...register("address")}
                placeholder="Dirección"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="font-gilroy-extrabold">Fecha de nacimiento</h4>
              <input
                type="string"
                defaultValue={new Date(
                  auth.user.birthdate,
                ).toLocaleDateString()}
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
              <span>{auth.user.number}</span>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Departamento</h4>
              <input
                type="number"
                defaultValue={belong.idDepartamento}
                {...register("idDepartamento")}
                placeholder="Departamento"
                className="modal-input"
              />
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-gilroy-extrabold">Puesto</h4>
              <input
                type="string"
                defaultValue={belong.position}
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
                defaultValue={new Date(
                  auth.user.contractdate,
                ).toLocaleDateString()}
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

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(ActualizaPerfil);
