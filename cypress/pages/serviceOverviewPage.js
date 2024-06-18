class ServiceOverviewPage {
    //getter function
    getFirstGatewayServiceBtn() {
      return cy.dataTestId('new-gateway-service');
    }

    getGatewayPageTitle() {
      return cy.get('.title').contains('Gateway Services');
    }

    getActionButton(index) {
      return cy.dataTestId('overflow-actions-button').eq(index);
    }
  
    getDropdownList() {
      return cy.dataTestId('dropdown-list');
    }
  
    getDeleteOption() {
      return cy.get('[data-testid="k-dropdown-popover"][aria-expanded="true"] li[data-testid="action-entity-delete"] button[data-testid="dropdown-item-trigger"]');
    }
  
    getConfirmationPrompt() {
      return cy.get('.prompt-confirmation-text');
    }

    getServiceNameLocator() {
      return cy.get('.prompt-confirmation-text .confirmation-text');
    }
  
    getConfirmationInput() {
      return cy.dataTestId('confirmation-input');
    }
  
    getConfirmDeleteButton() {
      return cy.dataTestId('modal-action-button');
    }

    getServiceRowByName(serviceName){
      return cy.get(`tr[data-testid="${serviceName}"]`)
    }

    getServiceRowProtocolByName(serviceName){
      return this.getServiceRowByName(serviceName).find(`td[data-testid="protocol"]`);
    }

    getServiceRowEnabledByName(serviceName){
      return this.getServiceRowByName(serviceName).find(`td[data-testid="enabled"]`);
    }

    //action function
    visitGatewayPage(){
        cy.visit('/services');
        this.checkInGatewayOverviewPage();
    }

    addFirstService(){
      this.getFirstGatewayServiceBtn().should('be.visible').click();
    }

    checkInGatewayOverviewPage(){
      this.getGatewayPageTitle().should('be.visible');
    }

    clickActionButton(index) {
      this.getActionButton(index).click();
    }
  
    clickDeleteOption() {
      this.getDeleteOption().click();
    }
  
    ensureConfirmationPromptIsVisible() {
      this.getConfirmationPrompt().should('be.visible');
    }
  
    extractServiceName(callback) {
      this.getServiceNameLocator().invoke('text').then((text) => {
        const matches = text.match(/"([^"]*)"/);
        if (matches) {
          callback(matches[1]);
        }
      });
    }
  
    inputConfirmation(serviceName) {
      this.getConfirmationInput().type(serviceName);
    }
  
    clickConfirmDeleteButton() {
      this.getConfirmDeleteButton().should('not.be.disabled').click();
    }

    checkServiceProtocalByName(serviceName,protocol){
      this.getServiceRowProtocolByName(serviceName)
      .find('span')
      .should('contain.text', protocol);
    }

    checkServiceEnableStatusByName(serviceName,status){
      this.getServiceRowEnabledByName(serviceName)
      .find('span[data-testid="switch-control"]')
      .invoke('attr', 'aria-checked')
      .should('equal', status.toString());
    }
  
    // Method to perform the delete sequence for a specific service
    deleteService(index = 0) {
      this.clickActionButton(index);
      this.clickDeleteOption();
      this.ensureConfirmationPromptIsVisible();
      this.extractServiceName((serviceName) => {
        cy.log(`Resource name to delete: ${serviceName}`);
        this.inputConfirmation(serviceName);
        this.clickConfirmDeleteButton();
      });
    }
  
  }
  
  export default ServiceOverviewPage;