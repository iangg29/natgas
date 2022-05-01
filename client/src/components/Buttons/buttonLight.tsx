import React from "react";

type Props = {
  label: string;
  action: () => void;
  bg?: string;
};
const ButtonLight= ({
  label,
  action,
  bg = "rounded-full border-2 border-natgas-azul-claro px-8 py-3 hover:bg-natgas-azul-claro hover:text-white",
}: Props): JSX.Element => {
  return (
    <button onClick={action} className={` ${bg}`}>
      {label}
    </button>
  );
};

export default ButtonLight;