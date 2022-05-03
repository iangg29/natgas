import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { iDepartment } from "../../shared/interfaces/app.interface";
import Page from "../../containers/Page";
import { MySwal } from "../../utils/AlertHandler";
import Title from "../../components/Title/Title";
import InputLong from "../../components/Inputs/InputLong";
import DateInputLong from "../../components/Inputs/DateInputLong";
import ButtonLight from "../../components/Buttons/buttonLight";
import { Link } from "react-router-dom";

const ActualizaPerfil = ({ auth }: any): JSX.Element => {
  // TODO: HR Fills sensitive data and locks own user profile modification.

  const [employee, setEmployee] = useState<any>({});

  const navigate = useNavigate();

  //const [employees, setEmployees] = useState<IEmployment[]>([]);

  useEffect(() => {
    (() => {
      axios
        .get(`/user/me`)
        .then((res: AxiosResponse) => {
          const user = res.data.data.user;
          const birthdate = user.birthdate ? user.birthdate.slice(0, -14) : "";

          setEmployee({ ...user, birthdate });
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
  }, [auth]);

  const onSubmit = async (): Promise<any> => {
    console.log("HOLA SI ME ESTOY PIDIENDO");
    await axios
      .patch(`/user/me`, {
        address: employee.address,
        birthdate: employee.birthdate,
        cellphone: employee.cellphone,
        rfc: employee.rfc,
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      })
      .finally(() => {
        MySwal.fire({
          title: "¡Perfil actualizado!",
          icon: "success",
          text: "Perfil actualizado con éxito",
          confirmButtonColor: "#002b49",
        });

        navigate("/app/profile");
      });
  };
  return (
    <Page title={`Datos Personales`} headTitle="Editar perfil" padding={true}>
      <div className="font-gilroy-light">
        <hr />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <InputLong
              label="RFC"
              getVal={employee.rfc}
              setVal={(val: any) => setEmployee({ ...employee, rfc: val })}
              placeholder="RFC"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-6 py-1 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full">
            <InputLong
              label="Dirección"
              getVal={employee.address}
              setVal={(val: any) => setEmployee({ ...employee, address: val })}
              placeholder="Dirección"
            />
          </div>
          <div className="w-full">
            <InputLong
              label="Teléfono"
              getVal={employee.cellphone}
              setVal={(val: any) =>
                setEmployee({ ...employee, cellphone: val })
              }
              placeholder="Teléfono"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <DateInputLong
              label="Fecha de nacimiento"
              getVal={employee.birthdate}
              setVal={(val: any) =>
                setEmployee({ ...employee, birthdate: val })
              }
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-14 py-14 text-center md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <ButtonLight action={onSubmit} label="Confirmar" />
          </div>
          <div className="w-full py-3 md:w-1/2">
            <Link
              to="/app/profile"
              className="rounded-full border-2 border-natgas-verde px-8 py-3 hover:bg-natgas-verde hover:text-white"
            >
              Cancelar
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ActualizaPerfil;
