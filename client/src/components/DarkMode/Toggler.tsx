import React from "react";
import { Menu } from "@headlessui/react";
import { LightBulbIcon } from "@heroicons/react/solid";

const Toggler = (): JSX.Element => {
  const toggle = (): void => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <div className="px-1 py-1 ">
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={() => toggle()}
            className={`${
              active
                ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                : "text-gray-900 dark:text-gray-100"
            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            <div>
              <LightBulbIcon
                className={`mr-2 h-5 w-5 ${
                  active ? "text-natgas-azul-claro dark:text-natgas-azul" : ""
                }`}
                aria-hidden="true"
              />
            </div>
            Modo obscuro
          </button>
        )}
      </Menu.Item>
    </div>
  );
};

export default Toggler;
