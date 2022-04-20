import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { iRange, iRangeData } from "../../../shared/interfaces/app.interface";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";

type Props = {
  setRanges: (value: ((prevState: iRange[]) => iRange[]) | iRange[]) => void;
  ranges: iRange[];
};

type Inputs = {
  maximum: number;
  minimum: number;
  days: number;
};

const CreateRange = ({ ranges, setRanges }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const onSubmit: SubmitHandler<Inputs> = (data: iRangeData): void => {
    const lastMax = ranges.length <= 0 ? -1 : ranges[ranges.length - 1].maximum;
    if (parseInt(String(data.minimum)) > lastMax) {
      if (parseInt(String(data.maximum)) < parseInt(String(data.minimum))) {
        alert("El valor máximo debe de ser mayor al mínimo.");
      } else {
        (async () => {
          await axios
            .post("/rangos", data)
            .then((res: AxiosResponse) => {
              const newData: iRange = res.data.data.new[0];
              setRanges([...ranges, newData]);
            })
            .catch((err) => {
              console.trace(err);
            });
        })();
        closeModal();
        reset();
      }
    } else {
      alert(`El valor mínimo debe de ser mayor a ${lastMax}`);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-natgas-verde px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <PlusCircleIcon className="h-5 w-5" />
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
              <div className="my-8 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-natgas-azul p-6 text-left align-middle text-gray-50 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-100"
                >
                  Crear intervalo
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="my-4 flex flex-col space-y-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Valor mínimo..."
                      className="modal-input"
                      {...register("minimum", {
                        required: true,
                      })}
                    />
                    {errors.minimum && (
                      <span className="required-input-feedback">
                        El campo es requerido.
                      </span>
                    )}
                    <input
                      type="number"
                      min={0}
                      {...register("maximum", {
                        required: true,
                      })}
                      placeholder="Valor máximo..."
                      className="modal-input"
                    />
                    {errors.maximum && (
                      <span className="required-input-feedback">
                        El campo es requerido.
                      </span>
                    )}
                    <input
                      type="number"
                      min={0}
                      {...register("days", {
                        required: true,
                      })}
                      placeholder="Días de vacaciones..."
                      className="modal-input"
                    />
                    {errors.days && (
                      <span className="required-input-feedback">
                        El campo es requerido.
                      </span>
                    )}
                  </div>
                  <div className="mt-4 text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-natgas-azul-claro px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-natgas-azul focus-visible:ring-offset-2"
                    >
                      Crear
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateRange;
