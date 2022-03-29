import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Imagotipos NATGAS.png";
import { GlobeAltIcon } from "@heroicons/react/solid";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <div className="container mx-auto flex max-w-7xl flex-col items-center px-8 py-8 sm:flex-row">
      <div className="max-h-20 overflow-hidden">
        <Link to="/app/dashboard">
          <img src={logo} alt="NatGas" className="h-14 -translate-y-2" />
        </Link>
      </div>
      <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l sm:border-gray-200 sm:pl-4">
        © {year} NatGas - Administrador de Recursos Humanos
      </p>
      <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          href="https://www.natgas.com.mx/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">NatGas Web</span>
          <GlobeAltIcon className="h-5 w-5" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
