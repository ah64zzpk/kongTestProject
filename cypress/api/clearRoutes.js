Cypress.Commands.add('clearRoutes', () => {
    const apiBaseUrl = Cypress.env('apiBaseUrl');
    cy.request('GET', `${apiBaseUrl}routes`).then((response) => {
      expect(response.status).to.eq(200);
      
      // Step 2: Extract the IDs of all routes
      const routesIds = response.body.data.map(route => route.id);
  
      // Step 3: Loop through each routes ID and send a DELETE request
      routesIds.forEach((id) => {
        cy.request('DELETE', `${apiBaseUrl}routes/${id}`).then((response) => {
          expect(response.status).to.eq(204); // Assuming 204 No Content for successful delete
        });
      });
    });
  });