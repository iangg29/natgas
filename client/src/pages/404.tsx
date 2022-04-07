import React from "react";
import { Link } from "react-router-dom";

const Error404 = (): JSX.Element => {
  // TODO: Implement new styling and complete design.
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Página no encontrada. Revisa la dirección o{" "}
        <Link
          className="text-natgas-azul hover:underline dark:text-natgas-azul-claro"
          to="/app/dashboard"
        >
          vuelve atrás
        </Link>
        .
      </p>
    </div>
  );
};

export default Error404;
