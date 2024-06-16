Cypress.Commands.add('addServices', (name,tag,host) => {
    const apiBaseUrl = Cypress.env('apiBaseUrl');
    cy.request('POST', `${apiBaseUrl}services`,
        {
          "port": 443,
          "enabled": true,
          "ca_certificates": null,
          "protocol": "https",
          "connect_timeout": 60000,
          "read_timeout": 60000,
          "name": name,
          "client_certificate": null,
          "path": "/customers",
          "tls_verify": null,
          "retries": 5,
          "tls_verify_depth": null,
          "write_timeout": 60000,
          "tags": [tag],
          "host": host
        }
      ).then((response) => {
      expect(response.status).to.eq(201);
    });
});