import React, {
  ChangeEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import axios, { AxiosResponse } from "axios";
import { Listbox, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Page from "../../containers/Page";
import {
  iDepartment,
  iEmployment,
} from "../../shared/interfaces/app.interface";
import { CheckIcon, SearchIcon, SelectorIcon } from "@heroicons/react/solid";
import Pagination from "../../components/Inputs/Pagination";
import { MySwal } from "../../utils/AlertHandler";
import AbacContainer from "../../containers/abacContainer";

const Employees = (): JSX.Element => {
  const [employees, setEmployees] = useState<iEmployment[]>([]);
  const [departments, setDepartments] = useState<iDepartment[]>([
    {
      idDepartamento: -1,
      name: "Departamento",
      created_at: "",
      updated_at: "",
    },
  ]);

  const [nameSearch, setNameSearch] = useState<string>("");
  const [numberSearch, setNumberSearch] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<iDepartment>(
    departments[0],
  );

  const [page, setPage] = useState<number>(1);
  const topRef = useRef<any>(null);
  const limit = 25;

  const filterDepartment = (department: iDepartment) => {
    setSelectedDepartment(department);
  };

  useEffect(() => {
    (async () => {
      await axios
        .get("https://natgas-server-bynv2pe5gq-uc.a.run.app/api/department")
        .then((res: AxiosResponse) => {
          setDepartments((d) => [...d, ...res.data.data.documents]);
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
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://natgas-server-bynv2pe5gq-uc.a.run.app/api/user/employment?${
            selectedDepartment.name !== "Departamento"
              ? `departamento_like=${selectedDepartment?.name}&`
              : ""
          }name_like=${nameSearch}&number_like=${numberSearch}&sort=number&limit=${limit}&page=${page}`,
        )
        .then((res: AxiosResponse) => {
          setEmployees(res.data.data.documents);
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
  }, [page, nameSearch, numberSearch, selectedDepartment]);

  return (
    <AbacContainer required_role="HR">
      <Page title="Empleados" headTitle="Empleados" padding={true}>
        <h2 className="text-lg font-semibold">Buscar empleados</h2>
        <div
          className="mt-5 grid grid-cols-1 content-center items-center space-y-2 md:grid-cols-3 md:space-y-0"
          ref={topRef}
        >
          <div className="w-full">
            <Listbox value={selectedDepartment} onChange={filterDepartment}>
              <div className="relative">
                <Listbox.Button className="relative w-full rounded bg-natgas-sec-two py-2.5 pl-3 pr-10 text-left text-white focus:outline-none focus-visible:border-natgas-verde focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-natgas-azul-claro sm:text-sm">
                  <span className="block">{selectedDepartment?.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="text-gray-1 00 h-5  w-5"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {departments?.map(
                      (department: iDepartment, idx: number) => (
                        <Listbox.Option
                          key={idx}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-gray-50 text-natgas-azul-claro"
                                : "text-gray-900"
                            }`
                          }
                          value={department}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {department.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-natgas-azul-claro">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ),
                    )}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-natgas-azul-claro  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-natgas-azul-claro"
              placeholder="Nombre de empleado"
              value={nameSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNameSearch(e.target.value)
              }
            />
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-natgas-azul-claro  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-natgas-azul-claro"
              placeholder="Número de empleado"
              value={numberSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNumberSearch(e.target.value)
              }
            />
          </div>
        </div>
        <hr className="my-10 rounded border-2 bg-natgas-gris-cool text-natgas-gris-cool dark:border-gray-600" />
        <div className="my-10 grid grid-cols-1 gap-2 text-gray-50 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {employees?.map((employee: iEmployment, idx: number) => (
            <div
              key={idx}
              className="w-full rounded-lg bg-natgas-azul text-center shadow"
            >
              <h3 className="p-5 font-bold">
                {employee.name + " " + employee.lastname} -{" "}
                {employee.departamento}
              </h3>
              <hr />
              <div className="p-2 px-5 font-semibold">
                <p>
                  {employee.position} desde{" "}
                  {new Date(employee.contrato).toLocaleDateString()}
                </p>
                <p>Número de empleado: {employee.number}</p>
              </div>
              <div className="pt-3 pb-5">
                <Link
                  to={`/app/employee/${employee.number}`}
                  className="rounded-full bg-white px-8 py-2 text-natgas-azul"
                >
                  Ver perfil
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          length={employees.length}
          getPage={page}
          setPage={setPage}
          reference={topRef}
          limit={limit}
        />
      </Page>
    </AbacContainer>
  );
};

export default Employees;
