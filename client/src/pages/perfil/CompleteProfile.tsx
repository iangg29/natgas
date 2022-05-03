import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { iDepartment } from "../../shared/interfaces/app.interface";
import Page from "../../containers/Page";
import { MySwal } from "../../utils/AlertHandler";
import Title from "../../components/Title/Title";
import InputLong from "../../components/Inputs/InputLong";
import DateInputLong from "../../components/Inputs/DateInputLong";
import ButtonLight from "../../components/Buttons/buttonLight";

const CompleteProfile = ({ auth }: any): JSX.Element => {
  // TODO: HR Fills sensitive data and locks own user profile modification.

  let { email } = useParams<string>();
  const [employee, setEmployee] = useState<any>({});
  const [departments, setDepartments] = useState<iDepartment[]>([]);
  const [pertenece, setPertenece] = useState<any>({
    email: "",
    idDepartamento: 1,
    position: "Especialista",
    date: new Date().toISOString().slice(0, -14),
  });
  const navigate = useNavigate();

  //const [employees, setEmployees] = useState<IEmployment[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/department/")
        .then((res: AxiosResponse) => {
          setDepartments(res.data.data.documents);
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
        });
      await axios
        .get(`/user/email/${email}`)
        .then((res: AxiosResponse) => {
          const user = res.data.data.document[0];
          if (user.verified) {
            MySwal.fire({
              title: "¡Error!",
              icon: "error",
              text: "Este usuario ya ha sido verificado",
              confirmButtonColor: "#002b49",
            });
            navigate("/app/employees");
          }
          const birthdate = user.birthdate ? user.birthdate.slice(0, -14) : "";
          const contractdate = user.contractdate ? user.contractdate.slice(0, -14) : "";
          
          setEmployee({ ...user, contractdate, birthdate });
          setPertenece({ ...pertenece, email: user.email });
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
  }, [auth, email, navigate, pertenece]);

  const onSubmit = (): void => {
    (async () => {
      await Promise.all([
        axios.patch(`/user/${employee.number}`, {
          address: employee.address,
          birthdate: employee.birthdate,
          ngblocks: employee.ngBlocks,
          vacations: employee.vacations,
          cellphone: employee.cellphone,
          contractdate: employee.contractdate,
          rfc: employee.rfc,
          verified: 1,
        }),
        axios.post(`/pertenece/`, {
          idDepartamento: pertenece.idDepartamento,
          position: pertenece.position,
          email: employee.email,
          date: pertenece.date,
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
          MySwal.fire({
            title: "¡Usuario verificado!",
            icon: "success",
            text: "El usuario ha sido verificado con éxito",
            confirmButtonColor: "#002b49",
          });
          navigate("/app/pending/profiles");
        });
    })();
  };

  return (
    <Page
      title={`Completar perfil : ${employee.name} ${employee.lastname}`}
      headTitle="Completar perfil"
      padding={true}
    >
      <div className="font-gilroy-light">
        <hr />
        <Title title="Datos personales" />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <InputLong
              label="Numero de vacaciones"
              getVal={employee.vacations}
              setVal={(val: number) =>
                setEmployee({ ...employee, vacations: val })
              }
              placeholder="Dias de vacaciones"
            />
          </div>
          <div className="w-full md:w-1/3">
            <InputLong
              label="Numero de natgas blocks"
              getVal={employee.ngBlocks}
              setVal={(val: number) =>
                setEmployee({ ...employee, ngBlocks: val })
              }
              placeholder="Dias de natgas blocks"
            />
          </div>
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
              label="Cellphone"
              getVal={employee.cellphone}
              setVal={(val: any) => setEmployee({ ...employee, cellphone: val })}
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
                setEmployee({ ...employee, birthdate: val})
              }
            />
          </div>
          <div className="w-full md:w-1/2">
            <DateInputLong
              label="Fecha de inicio de contrato"
              getVal={employee.contractdate}
              setVal={(val: any) =>
                setEmployee({ ...employee, contractdate: val})
              }
            />
          </div>
        </div>
        <hr />
        <Title title="Datos laborales" />
        <div className="flex flex-col space-y-6 py-10 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <div className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
              Departamento
            </div>
            <select
              className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
              placeholder="Departamento"
              value={pertenece.idDepartamento}
              onChange={(e) =>
                setPertenece({ ...pertenece, idDepartamento: e.target.value })
              }
            >
              {departments?.length > 0 ? (
                departments?.map((card) => (
                  <option value={card.idDepartamento}> {card.name} </option>
                ))
              ) : (
                <p>No hay departamentos disponibles</p>
              )}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
              Posición
            </div>
            <select
              className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
              placeholder="Posicion"
              value={pertenece.position}
              onChange={(e) =>
                setPertenece({ ...pertenece, position: e.target.value })
              }
            >
              <option value="Analista">Analista</option>
              <option value="Especialista">Especialista</option>
              <option value="Gerencia">Gerencia</option>
              <option value="Direccion">Dirección</option>
              <option value="Coordinacion">Coordinación</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-6 py-2 text-gray-600 dark:text-gray-200 md:flex-row md:space-y-0">
          <div className="w-full ">
            <DateInputLong
              label="Fecha de inicio de trabajo en el departamento"
              getVal={pertenece.date}
              setVal={(val: any) =>
                setPertenece({ ...employee, date: val})
              }
            />
          </div>
        </div>
        <div className="flex flex-col space-y-14 py-14 text-center md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2">
            <ButtonLight action={onSubmit} label="Completar Perfil" />
          </div>
          <div className="w-full py-3 md:w-1/2">
            <Link
              to="/app/employees"
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

export default CompleteProfile;
