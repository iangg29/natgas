import React, { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iNews, iNewsData } from "../../shared/interfaces/app.interface";
import axios, { AxiosResponse } from "axios";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { MySwal } from "../../utils/AlertHandler";

type Props = {
  setNews: (value: ((prevState: iNews[]) => iNews[]) | iNews[]) => void;
  news: iNews[];
};

type Inputs = {
  name: string;
  date: string;
  image: any;
};

const CreateNews = ({ news, setNews }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const onSubmit: SubmitHandler<Inputs> = (data: iNewsData): void => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("date", data.date);
    formData.append("news_photo", data.image[0]);
    (async () => {
      await axios({
        method: "POST",
        url: "https://natgas-server-bynv2pe5gq-uc.a.run.app/api/news",
        data: formData,
      })
        .then((res: AxiosResponse) => {
          const newData: iNews = res.data.data.new[0];
          setNews([...news, newData]);
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
    closeModal();
    reset();
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
                  Crear anuncio
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  encType="multipart/form-data"
                >
                  <div className="my-4 flex flex-col space-y-3">
                    <input
                      type="text"
                      placeholder="Nombre..."
                      className="modal-input"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <span className="required-input-feedback">
                        El campo es requerido.
                      </span>
                    )}
                    <input
                      type="date"
                      {...register("date", {
                        required: true,
                      })}
                      placeholder="Fecha..."
                      className="modal-input"
                    />
                    {errors.date && (
                      <span className="required-input-feedback">
                        El campo es requerido.
                      </span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      {...register("image", {
                        required: true,
                      })}
                      placeholder="Imagen..."
                      className="modal-input"
                    />
                    {errors.image && (
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

export default CreateNews;
