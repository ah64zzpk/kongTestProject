import { routeDomain } from '../domains/routeDomain';

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
        routeDomain.visitRouteOverviewPage();
        routeDomain.addFirstRoute();
        routeDomain.setRouteNameWithCheck(routeDataSet.name);
        cy.log(`set route name with value ${routeDataSet.name}`);
        routeDomain.selectRouteServiceWitchCheck(serviceIdSet);
        cy.log(`select service from dropdown option with id as ${serviceIdSet}`);
        routeDomain.setRouteTagWithCheck(routeDataSet.tag);
        cy.log(`set route tag with value ${routeDataSet.tag}`);
        routeDomain.setRoutePathWithCheck(routeDataSet.path);
        cy.log(`set route path with value ${routeDataSet.path}`);
        routeDomain.saveRoute();
    })

    after(() => {
        // runs once all tests are done
        cy.log(`delete service for test with ID as ${serviceId}`);
        cy.clearRoutes(); // Clear all routes after test
        cy.clearServices(); // Clear all services after test
    })
})