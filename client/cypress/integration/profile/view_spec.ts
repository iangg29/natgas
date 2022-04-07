/// <reference types="cypress" />

describe("login", (): void => {
  it("Should successfully log into our app", (): void => {
    // @ts-ignore
    cy.login()
      .then((resp: { body: any }) => {
        return resp.body;
      })
      .then((body: { access_token: any; expires_in: any; id_token: any }) => {
        const { access_token, expires_in, id_token } = body;
        const auth0State = {
          nonce: "",
          state: "some-random-state",
        };
        const callbackUrl = `/app?access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
        cy.visit(callbackUrl, {
          onBeforeLoad(win) {
            win.document.cookie =
              "com.auth0.auth.some-random-state=" + JSON.stringify(auth0State);
          },
        });
      });
  });
});

export {};
