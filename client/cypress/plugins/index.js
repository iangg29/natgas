/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  config.env.auth0_username = process.env.REACT_APP_AUTH0_TEST_USERNAME;
  config.env.auth0_password = process.env.REACT_APP_AUTH0_TEST_PASSWORD;
  config.env.auth0_domain = process.env.REACT_APP_AUTH0_DOMAIN;
  config.env.auth0_client_id = process.env.REACT_APP_AUTH0_CLIENT_ID;
  config.env.auth0_client_secret = process.env.REACT_APP_AUTH0_CLIENT_SECRET;

  return config;
};
