import ServicePage from '../pages/servicePage';
describe('visit Service Page', () => {
  const servicePage = new ServicePage();
    it('displays add service button', () => {
      cy.visit('/services')
      servicePage.getNewGatewayServiceButton().should('be.visible')
    })
  
})