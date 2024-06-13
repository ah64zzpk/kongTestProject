Cypress.Commands.add('dataTestId', (testId) => {
    return cy.get(`[data-testid="${testId}"]`);
});