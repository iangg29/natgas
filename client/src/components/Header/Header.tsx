import { Fragment } from "react";
import { ChevronDownIcon, LogoutIcon, UserIcon } from "@heroicons/react/solid";
import logoBig from "../../assets/img/IMAGOTIPO_contorno.png";
import logoSmall from "../../assets/img/isotipo-contorno.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import SideBar from "../Sidebar/SideBar";
import routes, { NavbarLink } from "../../routes/navbar";
import { LogoutAuthAction } from "../../store/actions/auth.action";
import { connect } from "react-redux";
import Toggler from "../DarkMode/Toggler";

const Header = (props: any): JSX.Element => {
  const { auth, logout } = props;
  const navigate = useNavigate();

  return (
    <header className="shadow-bottom z-40 max-h-20 bg-natgas-azul py-4">
      <div className="relative flex h-full w-full items-center justify-around px-6 text-gray-100">
        <div className="flex items-center">
          <Link to="/app/dashboard">
            <img
              src={logoBig}
              alt="Natgas"
              className="mx-auto hidden h-24 lg:block"
            />
            <img
              src={logoSmall}
              alt="Natgas"
              className="mx-auto h-20 translate-y-3 lg:hidden"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul>
            <li>
              {routes.map((route: NavbarLink, idx: number) =>
                route.path  === "/app/employees" && !auth.user.roles.includes("HR" ) ?
                <div className="hidden"></div> : 
                route.path === "/app/profile" ? (
                  <button
                    className="mr-5"
                    onClick={() => {
                      window.location.href = "/app/profile";
                    }}
                  >
                    {route.name}
                  </button>
                ) : (
                  <Link to={route.path} key={idx} className="mr-5">
                    {route.name}
                  </Link>
                ),
              )}
            </li>
          </ul>
        </div>

        <ul className="flex flex-shrink-0 items-center space-x-2">
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className=" t-2 invisible inline-flex w-full justify-center rounded-md px-4 py-2 align-middle text-sm font-medium hover:bg-opacity-30 focus:outline-none md:visible">
                  <div className="ml-2 mt-1 inline-flex content-center items-center justify-center">
                    <span className="ml-2">
                      {auth.user.name} {auth.user.lastname}
                    </span>
                    <ChevronDownIcon
                      className="ml-2 -mr-1 h-5 w-5 text-white hover:text-natgas-azul-claro"
                      aria-hidden="true"
                    />
                  </div>
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-800 dark:bg-gray-900">
                  <div className="px-1 py-1 ">
                    <div
                      onClick={() => {
                        window.location.href = "/app/profile";
                      }}
                    >
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
                    </div>
                  </div>
                  <Toggler />
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
                            <LogoutIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Cerrar sesi??n
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="text-4xl md:invisible">
            <SideBar />
          </li>
        </ul>
      </div>
    </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
