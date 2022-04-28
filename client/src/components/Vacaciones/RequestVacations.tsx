import React, { ChangeEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import axios from "axios";
import { MySwal } from "../../utils/AlertHandler";
import { CalendarIcon, UserIcon, XIcon } from "@heroicons/react/solid";

const RequestVacations = ({ user }: any): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [getStartDate, setStartdate] = useState<string>("");
  const [getEndDate, setEndDate] = useState<string>("");
  const [getSuplente, setSuplente] = useState<string>("");

  const sendVacationsRequest = async () => {
    await axios
      .post("/vacation", {
        startdate: getStartDate,
        enddate: getEndDate,
        substitute: getSuplente,
        email: user.email,
      })
      .then(() => {
        closeModal();
        MySwal.fire({
          title: "¡Creado!",
          icon: "success",
          text: "Petición de vacación creada correctamente",
          confirmButtonColor: "#002b49",
        });
        setEndDate("");
        setStartdate("");
        setSuplente("");
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
        closeModal();
        setEndDate("");
        setStartdate("");
        setSuplente("");
      });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="rounded-full border-2 border-natgas-verde px-8 py-3 hover:bg-natgas-verde hover:text-white"
      >
        Solicitar vacaciones
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="relative my-8 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-natgas-azul"
                id="requestVacationsModal"
              >
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-900 dark:text-gray-50"
                >
                  Solicitar Vacaciones
                </Dialog.Title>
                <div className="mt-2 pb-5">
                  <div className="mt-5 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
                    Fecha de inicio
                  </div>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <CalendarIcon className="h-5 w-5 text-natgas-azul dark:text-gray-100" />
                    </div>
                    <input
                      type="date"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:bg-natgas-azul-claro dark:text-white dark:placeholder-gray-100 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="Select date"
                      id="datefromInput"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setStartdate(e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-5 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
                    Fecha fin
                  </div>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <CalendarIcon className="h-5 w-5 text-natgas-azul dark:text-gray-100" />
                    </div>
                    <input
                      type="date"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:bg-natgas-azul-claro dark:text-white dark:placeholder-gray-100 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="Select date"
                      id="datetoInput"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEndDate(e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-5 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
                    Nombre del suplente
                  </div>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <UserIcon className="h-5 w-5 text-natgas-azul dark:text-gray-100" />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:bg-natgas-azul-claro dark:text-white dark:placeholder-gray-100 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="Ej: Juan Pérez"
                      id="backupInput"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSuplente(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={sendVacationsRequest}
                    type="button"
                    id="requestTriggerBtn"
                    className="inline-flex items-center rounded-lg bg-natgas-azul px-6 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 hover:underline hover:shadow-xl focus:outline-none focus:ring-0 focus:ring-blue-300 dark:bg-natgas-azul-claro"
                  >
                    Solicitar
                    <PaperAirplaneIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="absolute top-3 right-3">
                  <button onClick={closeModal}>
                    <XIcon className="h-5 w-5 text-natgas-azul dark:text-gray-100" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RequestVacations;
