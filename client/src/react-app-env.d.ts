/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH0_DOMAIN: string;
      REACT_APP_AUTH0_CLIENT_ID: string;
      REACT_APP_AUTH0_CLIENT_SECRET: string;
      REACT_APP_DOMAIN: string;
      REACT_APP_API_URI: string;

      REACT_APP_AUTH0_TEST_USERNAME: string;
      REACT_APP_AUTH0_TEST_PASSWORD: string;
    }
  }
}
declare module "./icons";

export {};
