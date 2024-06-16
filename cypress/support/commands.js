Cypress.Commands.add('dataTestId', (testId) => {
    return cy.get(`[data-testid="${testId}"]`);
});

// Cypress.Commands.add('isExistElement', (selector) => {
//     cy.get('body').then((body) => {
//       if (body.find(selector).length > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     });
// });

// Cypress.Commands.add('getResources', (resource) => {
//     const apiUrl = 'http://localhost:8001/default/' + resource;
//     cy.request({
//         method: 'GET',
//         url: apiUrl,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log(response)
//       });
// })