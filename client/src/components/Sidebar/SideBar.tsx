import { LogoutIcon, UserIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaBars } from 'react-icons/fa';

const SideBar = (): JSX.Element => {

  const { user, logout } = useAuth0();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flexg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
        <FaBars/> 
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
                      <Menu.Item>
                        {({ active }) => (
                          <div 
                            className={`${
                              active
                                ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                                : "text-gray-900 dark:text-gray-100"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <div
                             className="h-8 w-8 rounded-full"
                              style={{
                                background: `url(${user?.picture}) center center no-repeat`,
                                backgroundSize: "cover",
                                }}
                              />
                           <span className="ml-2">{user?.name}</span>
                          </div>
                        )}
                      </Menu.Item>
                   
                  </div>
                  <div className="px-1 py-1 ">
                    <Link to="/app/profile">
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
                              <UserIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Mi perfil
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                  <div className="px-1 py-1 ">
                    <Link to="/app/employees">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                                : "text-gray-900 dark:text-gray-100"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Reporte mensual
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                  <div className="px-1 py-1 ">
                    <Link to="/app/employees">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                                : "text-gray-900 dark:text-gray-100"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
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
                          className={`${
                            active
                              ? "bg-natgas-azul font-semibold text-white dark:bg-natgas-azul-claro"
                              : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() =>
                            logout({ returnTo: window.location.origin })
                          }
                        >
                          {active ? (
                            <LogoutIcon
                              className="mr-2 h-5 w-5 text-natgas-azul-claro dark:text-natgas-azul"
                              aria-hidden="true"
                            />
                          ) : (
                            <LogoutIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Cerrar sesión
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
  )
}

export default SideBar