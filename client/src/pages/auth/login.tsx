import React from "react";
import logo from "../../assets/img/Natgas-OFICIAL.png";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { Helmet } from "react-helmet";

type Inputs = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const year = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data: any): void => {
    (async () => {
      await axios
        .post("https://api.natgas.ian.software/auth/login", data)
        .then((res: AxiosResponse) => {
          console.log(res);
          reset();
          navigate("/app/dashboard");
        })
        .catch((err) => {
          const error = err.toJSON();
          if (error.status === 401) {
            alert("Usuario/Contraseña incorrectos.");
          }
        });
    })();
  };

  return (
    <>
      <Helmet>
        <title>NatGas | Login</title>
      </Helmet>
      <div className="flex h-screen w-full flex-row">
        <div className="flex w-full flex-col justify-around md:w-1/2">
          <div className="mx-auto w-1/3">
            <Link to="/">
              <img src={logo} alt="Natgas" />
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto flex w-11/12 flex-col justify-around rounded-xl text-center">
              <h2 className="font-bebas-bold text-2xl">Bienvenid@</h2>
              <div className="my-5 mx-auto flex w-3/4 flex-col space-y-2 md:w-1/2">
                <label
                  htmlFor="emailInput"
                  className="text-left font-gilroy-light"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className="rounded-lg border-0 bg-gray-200 focus:outline-0"
                  {...register("email", {
                    maxLength: 50,
                    required: true,
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="text-xs text-red-700">
                    Debes ingresar el correo electrónico.
                  </span>
                )}
                {errors.email?.type === "maxLength" && (
                  <span className="text-xs text-red-700">
                    El correo electrónico no puede superar los 50 caracteres.
                  </span>
                )}
                <label
                  htmlFor="passwordInput"
                  className="text-left font-gilroy-light"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="passwordInput"
                  className="rounded-lg border-0 bg-gray-200 focus:outline-0"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-xs text-red-700">
                    La contraseña debe de tener al menos 8 caracteres.
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-xs text-red-700">
                    Debes ingresar la contraseña.
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-5">
                <button
                  type="submit"
                  className="mx-auto mt-5 w-3/4 rounded-xl border border-natgas-azul bg-natgas-azul px-10 py-1 font-semibold text-white shadow-lg transition-all hover:bg-transparent hover:text-natgas-azul md:w-1/2"
                >
                  Iniciar sesión
                </button>
                <Link
                  to="/password/recover"
                  className="mx-auto font-quicksand-regular text-sm text-natgas-azul hover:underline"
                >
                  Olvidé mi contraseña
                </Link>
              </div>
            </div>
          </form>
          <div className="mx-auto text-center">
            <p className="text-xs text-gray-400">
              Copyright &copy; {year} | NatGas
            </p>
          </div>
        </div>
        <div className="login-splash hidden w-full md:block md:w-1/2"></div>
      </div>
    </>
  );
};

export default Login;
