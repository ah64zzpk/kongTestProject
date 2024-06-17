import RouteOverviewPage from '../pages/routeOverviewPage';
import RouteAddPage from '../pages/routeAddPage';

const routeDataSet = {
  name: 'customerCreate',
  tag: 'customer',
  path: '/v1/customers'
}

const serviceDataSet = {
    name: 'customerService',
    tag: 'customer',
    upstreamUrl: 'https://api.mycompany.com/customers'
  }

describe('Kong Manager Route Page Test', () => {
    const routeOverviewPage = new RouteOverviewPage();
    const routeAddPage = new RouteAddPage();
    let serviceId = null;
    before(() => {
        cy.clearRoutes(); // Clear all routes before test
        cy.clearServices(); // Clear all services before test
        cy.addServices(serviceDataSet.name,serviceDataSet.tag,serviceDataSet.upstreamUrl).then((id) => {
            serviceId = id; // Store the service ID in a variable
            cy.log(`created service for test with ID as ${serviceId}`);
        });
    })
    beforeEach(() => {
        cy.clearRoutes(); // Clear all routes before each test
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
    });

    it('visit route overview page, add new route, finally save successfully', () => {
        const serviceIdSet = serviceId;
        routeOverviewPage.visitRouteOverviewPage();
        cy.log('visit route overview page');
        routeOverviewPage.addFirstRoute();
        routeAddPage.checkInRouteAddPage();
        cy.log('Click button to create first route');
        routeAddPage.inputRouteName(routeDataSet.name);
        routeAddPage.checkRouteName(routeDataSet.name);
        cy.log('Input route name and check input box has value');
        routeAddPage.selectRouteService(serviceIdSet);
        cy.log(`select service from dropdown option with id as ${serviceIdSet}`);
        routeAddPage.inputRouteTag(routeDataSet.tag);
        routeAddPage.checkRouteTagInput(routeDataSet.tag);
        cy.log('Input route tag and check input box has value');
        routeAddPage.inputRoutePath(routeDataSet.path);
        routeAddPage.checkRoutePathInput(routeDataSet.path);;
        cy.log('Input route path and check input box has value');
        routeAddPage.saveRoute();
        routeOverviewPage.checkInRouteOverviewPage();
        cy.log('Save added route OK');
    })

    after(() => {
        // runs once all tests are done
        cy.log(`delete service for test with ID as ${serviceId}`);
        cy.clearRoutes(); // Clear all routes after test
        cy.clearServices(); // Clear all services after test
    })
})