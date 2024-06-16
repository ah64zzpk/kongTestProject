class RouteOverviewPage{
    //getter function
    getRouteOverviewTitle() {
        return cy.get('.title').contains('Routes');
    }

    getAddNewRoueteBtnEmpty(){
        return cy.dataTestId('new-route').should('be.visible');
    }

    //action function
    visitRouteOverviewPage(){
        cy.visit('/routes');
        this.checkInRouteOverviewPage();
    }

    checkInRouteOverviewPage(){
        this.getRouteOverviewTitle().should('be.visible');
    }
}
export default RouteOverviewPage;