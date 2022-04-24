import { Dialog, Transition } from "@headlessui/react";
import React, { ChangeEvent, Fragment, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import axios from "axios";
import { MySwal } from "../../utils/AlertHandler";

const RequestNGB = ({ user }: any): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [getDate, setDate] = useState<string>("");
  const [getRadio, setRadio] = useState<number>(0);

  const sendNGBRequest = async () => {
    try {
      await axios.post("/natgasblock/", {
        date: getDate,
        period: getRadio,
        email: user.email,
      });
      await MySwal.fire({
        title: "¡Creado!",
        icon: "success",
        text: "Petición de Natgas Block creada correctamente",
        confirmButtonColor: "#002b49",
      });
      closeModal();
      setDate("");
      setRadio(0);
    } catch (error: any) {
      await MySwal.fire({
        title: "¡Error!",
        icon: "error",
        text: error.message,
        confirmButtonColor: "#002b49",
      });
      closeModal();
      setDate("");
      setRadio(0);
    }
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
        className="rounded-full border-2 border-natgas-azul-claro px-8 py-3 hover:bg-natgas-azul-claro hover:text-white"
      >
        Solicitar Natgas Block
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
              <div className="my-8 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-natgas-azul">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-900 dark:text-gray-50"
                >
                  Solicitar Natgas Block
                </Dialog.Title>
                <div className="mt-2 py-5">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="date"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:bg-natgas-azul-claro dark:text-white dark:placeholder-gray-100 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="Select date"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setDate(e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-5 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
                    Parte del turno a usar
                  </div>
                  <div className="mt-4 flex items-stretch ">
                    <label className="flex items-stretch">
                      <input
                        type="radio"
                        className="checked:bg-natgas-azul dark:checked:bg-natgas-azul-claro"
                        value={!getRadio ? 1 : 0}
                        onChange={() => setRadio(0)}
                        name="turno"
                      />
                      <div className=" ml-2 text-sm font-normal text-gray-700 dark:text-gray-200 ">
                        Primera Mitad
                      </div>
                    </label>

                    <label className="ml-6 flex items-stretch">
                      <input
                        type="radio"
                        className="checked:bg-natgas-azul dark:checked:bg-natgas-azul-claro"
                        value={!getRadio ? 0 : 1}
                        onChange={() => setRadio(1)}
                        name="turno"
                      />
                      <div className=" ml-2 text-sm font-normal text-gray-700 dark:text-gray-200">
                        Segunda Mitad
                      </div>
                    </label>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={sendNGBRequest}
                    type="button"
                    className="inline-flex items-center rounded-lg bg-natgas-azul px-6 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 hover:underline hover:shadow-xl focus:outline-none focus:ring-0 focus:ring-blue-300 dark:bg-natgas-azul-claro"
                  >
                    Solicitar
                    <PaperAirplaneIcon className="ml-2 h-5 w-5" />
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

export default RequestNGB;
