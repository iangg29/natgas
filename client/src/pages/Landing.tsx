import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logo from "../assets/img/Natgas-OFICIAL.png";

const Landing = (): JSX.Element => {
  // TODO: Implement final design.
  const year = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>NatGas - Recursos Humanos</title>
      </Helmet>
      <section className="relative h-full w-full bg-white px-6 antialiased">
        <div className="mx-auto max-w-7xl">
          <nav className="relative z-50 h-24 select-none">
            <div className="container relative mx-auto flex h-24 flex-wrap items-center justify-between overflow-hidden border-b border-gray-200 font-medium sm:px-4 md:overflow-visible md:px-2 lg:justify-center">
              <div className="top-0 left-0 h-full w-full items-start py-4 text-sm md:absolute md:relative md:flex md:items-center md:bg-transparent md:p-0 lg:text-base">
                <div className="flex h-auto w-full  flex-row content-between justify-between overflow-hidden">
                  <div>
                    <Link
                      to="/"
                      className="block inline-flex h-16 w-auto items-center px-6 text-xl font-black leading-none text-natgas-azul"
                    >
                      NatGas<span className="text-natgas-verde">.</span>
                    </Link>
                  </div>
                  <div className="grid place-items-center">
                    <Link
                      to="/login"
                      className="block inline-flex w-auto items-center rounded-full bg-natgas-azul py-3 px-8 text-xs leading-none text-gray-50 shadow-lg sm:text-sm"
                    >
                      Iniciar Sesión
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex min-h-[60%] w-full flex-wrap content-center">
          <div className="mx-auto">
            <img
              src={logo}
              alt="Natgas"
              className="mx-auto w-32 sm:w-56 md:w-72"
            />
            <h1 className="mt-10 text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              <p>
                <span className="inline md:block">Bienvenid@ al</span>{" "}
                <span className="relative mt-4 block animate-move-bg bg-gradient-to-r from-natgas-sec-one via-natgas-sec-two to-natgas-sec-one bg-[length:400%] bg-clip-text bg-clip-text text-transparent text-transparent md:inline-block">
                  Portal de empleados
                </span>
              </p>
            </h1>
          </div>
        </div>
      </section>
      <div className="absolute bottom-16 mx-auto w-full text-center">
        <div className="container mx-auto w-full text-xs font-semibold text-gray-400 sm:text-base">
          <p>NatGas &copy; {year} - Derechos Reservados.</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
