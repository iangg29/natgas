import {
  ChartPieIcon,
  LogoutIcon,
  MenuIcon,
  NewspaperIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { LogoutAuthAction } from "../../store/actions/auth.action";
import { connect } from "react-redux";
import Toggler from "../DarkMode/Toggler";

const SideBar = (props: any): JSX.Element => {
  const { auth, logout } = props;
  const navigate = useNavigate();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex-gray text-white hover:text-natgas-azul-claro focus:outline-none">
          <MenuIcon className="h-8 w-8" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-800 dark:bg-gray-900">
          <div className="px-1 py-1 ">
          <a onClick={() => {window.location.href="/app/profile"}}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                        : "text-gray-900 dark:text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <UserIcon
                        className="mr-2 h-5 w-5 text-natgas-azul-claro dark:text-natgas-azul"
                        aria-hidden="true"
                      />
                    ) : (
                      <UserIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    {auth.user.name} {auth.user.lastname}
                  </button>
                )}
              </Menu.Item>
            </a>
          </div>
          <Toggler />
          <div className="px-1 py-1 ">
            <Link to="/app/reports">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                        : "text-gray-900 dark:text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ChartPieIcon
                        className="mr-2 h-5 w-5 text-natgas-azul-claro dark:text-natgas-azul"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChartPieIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Reporte mensual
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className="px-1 py-1 ">
            <Link to="/app/blog">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                        : "text-gray-900 dark:text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <NewspaperIcon
                        className="mr-2 h-5 w-5 text-natgas-azul-claro dark:text-natgas-azul"
                        aria-hidden="true"
                      />
                    ) : (
                      <NewspaperIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Blog
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => logout(navigate)}
                  className={`${
                    active
                      ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                      : "text-gray-900 dark:text-gray-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <LogoutIcon
                      className="mr-2 h-5 w-5 text-natgas-azul-claro dark:text-natgas-azul"
                      aria-hidden="true"
                    />
                  ) : (
                    <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  )}
                  Cerrar sesión
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: (navigate: any) => {
      dispatch(LogoutAuthAction(navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
