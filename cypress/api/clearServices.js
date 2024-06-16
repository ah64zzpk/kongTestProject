Cypress.Commands.add('clearServices', () => {
    const apiBaseUrl = Cypress.env('apiBaseUrl');
    cy.request('GET', `${apiBaseUrl}services`).then((response) => {
      expect(response.status).to.eq(200);
      
      // Step 2: Extract the IDs of all services
      const serviceIds = response.body.data.map(service => service.id);
  
      // Step 3: Loop through each service ID and send a DELETE request
      serviceIds.forEach((id) => {
        cy.request('DELETE', `${apiBaseUrl}services/${id}`).then((response) => {
          expect(response.status).to.eq(204); // Assuming 204 No Content for successful delete
        });
      });
    });
  });