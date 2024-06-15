class ServiceAddPage {
    //getter function
    getAddGatewayPageTitle() {
      return cy.get('.title').contains('New Gateway Service');
    }

    getGatewayNameInput(){
      return cy.dataTestId('gateway-service-name-input').should('be.visible');
    }

    getGatewayTagInput(){
      return cy.dataTestId('gateway-service-tags-input').should('be.visible');
    }

    getGatewayUpUrlInput(){
      return cy.dataTestId('gateway-service-url-input').should('be.visible');
    }

    getGatewaySaveBtn(){
      return cy.dataTestId('form-submit').should('be.visible');
    }

    getGatewayCancelBtn(){
      return cy.dataTestId('form-cancel').should('be.visible');
    }

    //action function
    checkInAddGatewayPage(){
        this.getAddGatewayPageTitle().should('be.visible');
    }

    inputGatewayName(name) {
      this.getGatewayNameInput().clear().type(name);
    }

    checkGatewayName(name) {
      this.getGatewayNameInput().should('have.value', name);
    }

    inputGatewayTag(tag) {
      this.getGatewayTagInput().clear().type(tag);
    }

    checkGatewayTag(tag) {
      this.getGatewayTagInput().should('have.value', tag);
    }

    inputGatewayUpUrl(upstreamUrl) {
      this.getGatewayUpUrlInput().clear().type(upstreamUrl);
    }

    checkGatewayUpUrl(upstreamUrl) {
      this.getGatewayUpUrlInput().should('have.value', upstreamUrl);
    }

    checkGatewaySaveBtnDisabled(){
      this.getGatewaySaveBtn().should('be.disabled');
    }

    clickGatewaySaveBtn(){
      this.getGatewaySaveBtn().should('not.be.disabled').click();
    }
  
  }
  
  export default ServiceAddPage;