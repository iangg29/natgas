import React, { useEffect, useState } from "react";
import Page from "../../containers/Page";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Token = (): JSX.Element => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");

  const createTestUser = async () => {
    await axios
      .post(
        "https://natgas-dev.us.auth0.com/api/v2/users",
        {
          given_name: "Test",
          family_name: "User",
          email: "testemail@gmail.com",
          password: "Password12345678.",
          connection: "Username-Password-Authentication",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        alert("Success!" + res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (err: any) {
        console.error(err);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <Page title="Token generator" headTitle="Token">
      <p>Token: {token}</p>
      <button onClick={createTestUser}>Create test user with token.</button>
    </Page>
  );
};

export default Token;
