class RouteAddPage{
    //getter function
    getRouteAddTitle() {
        return cy.get('.title').contains('Create Route');
    }

    getRouteNameInput(){
        return cy.dataTestId('route-form-name').should('be.visible');
    }

    getRouteServiceSelectionBtn() {
        return cy.dataTestId('route-form-service-id')
        .parent().find('[data-testid="kui-icon-wrapper-chevron-down-icon"]');
    }

    getDropdownSelectionExpand(){
        return cy.get('div[role="button"][aria-expanded="true"]')
    }

    getRouteServiceSelectionDropDownOption(serviceId) {
        return cy.dataTestId(`select-item-${serviceId}`);
    }

    getRouteServiceSelectionInput(){
        return cy.dataTestId('route-form-service-id');
    }

    getRouteTagInput(){
        return cy.dataTestId('route-form-tags');
    }

    getPathInput(){
        return cy.dataTestId('route-form-paths-input-1');
    }

    getSaveBtn(){
        return cy.dataTestId('form-submit').should('be.visible');
    }

    //action function
    checkInRouteAddPage(){
        this.getRouteAddTitle().should('be.visible');
    }

    inputRouteName(name) {
        this.getRouteNameInput().clear().type(name);
    }

    checkRouteName(name) {
        this.getRouteNameInput().should('have.value', name);
    }

    checkRouteServiceInput(serivceId) {
        this.getRouteServiceSelectionInput().invoke('val').should('contain', serivceId);
    }

    selectRouteService(serviceId){
        this.getRouteServiceSelectionBtn().click(); // Click the dropdown button
        this.getDropdownSelectionExpand().should('exist'); // Ensure the dropdown is expanded
        this.getRouteServiceSelectionDropDownOption(serviceId).click(); // Click the dropdown option
        this.checkRouteServiceInput(serviceId);
    }

    inputRouteTag(tag){
        this.getRouteTagInput().clear().type(tag);
    }

    checkRouteTagInput(tag){
        this.getRouteTagInput().should('have.value', tag);
    }

    inputRoutePath(path){
        this.getPathInput().clear().type(path);
    }

    checkRoutePathInput(path){
        this.getPathInput().should('have.value', path);
    }

    saveRoute(){
        this.getSaveBtn().should('not.be.disabled').click();
    }

}
export default RouteAddPage;