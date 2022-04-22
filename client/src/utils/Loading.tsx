import React from "react";
import logo from "../assets/img/isotipo-contorno.png";

const Loading = (): JSX.Element => {
  // TODO: Implement a nice loader with company logo.

  return (
    <div className="flex h-screen w-full justify-center p-6 text-lg font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400">
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
