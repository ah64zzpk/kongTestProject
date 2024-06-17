Cypress.Commands.add('addServices', (name,tag,url) => {
    const apiBaseUrl = Cypress.env('apiBaseUrl');
    cy.request('POST', `${apiBaseUrl}services`,
      {
        "name": name,
        "tags": [
            tag
        ],
        "read_timeout": 60000,
        "retries": 5,
        "connect_timeout": 60000,
        "ca_certificates": null,
        "client_certificate": null,
        "write_timeout": 60000,
        "port": 443,
        "url": url
    }).then((response) => {
      expect(response.status).to.eq(201);
      return response.body.id;
    });
});