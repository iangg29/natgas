import React from "react";
import { Switch } from "@headlessui/react";

type Props = {
  label: string;
  getVal: any; //Escribir de inicio o de fin
  setVal: any;
};

const CheckBox = ({ label, getVal, setVal }: Props): JSX.Element => {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={getVal}
          onChange={setVal}
          className={`${
            getVal ? "bg-natgas-azul-claro" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              getVal ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default CheckBox;
