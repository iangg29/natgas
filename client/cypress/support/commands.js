import axios from "axios";

Cypress.Commands.add("login", () => {
  Cypress.log({
    name: "loginViaJWT",
  });

  const options = {
    method: "POST",
    url: Cypress.env("auth_url"),
    body: {
      email: Cypress.env("auth_username"),
      password: Cypress.env("auth_password"),
    },
  };

  cy.request(options).then((res) => {
    const loginAuthState = {
      isLoggedIn: true,
      user: res.body.data.user,
      token: res.body.token,
    };
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.body.token}`;
    localStorage.setItem("auth", JSON.stringify(loginAuthState));
  });
});
