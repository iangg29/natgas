import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (): JSX.Element => {
  // Implement username and search bar.

  const { user, logout } = useAuth0();

  return (
    <nav>
      <ul>
        <li>Natgas</li>
        <li>{user?.name}</li>
        <li>
          <button
            className="main-button"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
