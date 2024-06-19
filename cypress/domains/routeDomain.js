import { routeOverviewPage } from '../pages/routeOverviewPage';
import { routeAddPage } from '../pages/routeAddPage';
class RouteDomain{

    visitRouteOverviewPage(){
        cy.visit('/routes');
        routeOverviewPage.checkInRouteOverviewPage();
        cy.log('visit route overview page');
    }

    addFirstRoute(){
        routeOverviewPage.clickAddFirstRouteBtn();
        routeAddPage.checkInRouteAddPage();
        cy.log('Click button to create first route and check arrive in route add page');
    }

    setRouteNameWithCheck(routeName){
        routeAddPage.inputRouteName(routeName);
        routeAddPage.checkRouteName(routeName);
        cy.log('Input route name and check input box has value');
    }

    selectRouteServiceWitchCheck(serviceId){
        routeAddPage.expandRouteServiceDropdown();
        routeAddPage.selectRouteServiceOptions(serviceId);
        routeAddPage.checkRouteServiceSelectionValueInput(serviceId);
        cy.log(`select service from dropdown option with id as ${serviceId}`);
    }

    setRouteTagWithCheck(routeTag){
        routeAddPage.inputRouteTag(routeTag);
        routeAddPage.checkRouteTagInput(routeTag);
        cy.log('Input route tag and check input box has value');
    }

    setRoutePathWithCheck(routePath){
        routeAddPage.inputRoutePath(routePath);
        routeAddPage.checkRoutePathInput(routePath);;
        cy.log('Input route path and check input box has value');
    }
    
    saveRoute(){
        routeAddPage.saveRoute();
        routeOverviewPage.checkInRouteOverviewPage();
        cy.log('Save route by click save button and check go back to overview page');
    }

}
export const routeDomain = new RouteDomain();