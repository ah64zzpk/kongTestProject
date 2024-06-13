class ServicePage {
    getNewGatewayServiceButton() {
      return cy.get('[data-testid="new-gateway-service"]');
    }
  
    // Add more element getters related to the service page here
  }
  
  export default ServicePage;