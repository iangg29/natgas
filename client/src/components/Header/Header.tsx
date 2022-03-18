import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../../assets/img/IMAGOTIPO_contorno.png";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, DropdownItem } from "@windmill/react-ui";
import { LogoutIcon } from "@heroicons/react/solid";

const Header = (): JSX.Element => {
  // TODO: Display routes in navbar. (From routes/navbar.ts)

  const { user, logout } = useAuth0();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const handleProfileClick = (): void => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="shadow-bottom z-40 max-h-20 bg-natgas-azul py-4">
      <div className="flex h-full w-full items-center justify-around px-6 text-gray-100">
        <div className="flex items-center">
          <Link to="/app/dashboard">
            <img src={logo} alt="Natgas" className="mx-auto h-28" />
          </Link>
        </div>
        <div>Links</div>
        <ul className="flex flex-shrink-0 items-center space-x-6">
          <li className="relative inline-block">
            <button
              className="focus:shadow-natgas-azul-claro focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Perfil"
              aria-haspopup={true}
            >
              <Avatar
                className="align-middle"
                src={`${user?.picture}`}
                alt={user?.name}
                aria-hidden={true}
              />
              <span className="ml-2 lg:ml-5">{user?.name}</span>
            </button>
            <Dropdown
              onClose={() => setIsProfileMenuOpen(false)}
              isOpen={isProfileMenuOpen}
              align="right"
            >
              <DropdownItem
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <LogoutIcon className="w-4 h-4 mr-3" aria-hidden={true} />
                <span>Logout</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
