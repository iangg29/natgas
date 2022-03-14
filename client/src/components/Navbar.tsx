import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = (): JSX.Element => {
  // Implement username and search bar.

  const { loginWithRedirect } = useAuth0();

  return (
    <nav>
      <button className="main-button" onClick={() => loginWithRedirect()}>
        Login
      </button>
    </nav>
  );
};
