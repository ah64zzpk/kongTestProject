import RouteOverviewPage from '../pages/routeOverviewPage';
// import ServiceAddPage from '../pages/serviceAddPage';

const routeDataSet = {
  name: 'customerRoute',
  tag: 'customer',
  path: '/v1/customers'
}

const serviceDataSet = {
    name: 'customerService',
    tag: 'customer',
    upstreamUrl: 'api.mycompany.com'
  }

describe('Kong Manage Route Page Test', () => {
  const routeOverviewPage = new RouteOverviewPage();
//   const serviceAddPage = new ServiceAddPage();
    before(() => {
        cy.clearServices(); // Clear all services before test
        cy.clearRoutes(); // Clear all routes before test
        cy.addServices(serviceDataSet.name,serviceDataSet.tag,serviceDataSet.upstreamUrl);
    })
    beforeEach(() => {
        cy.clearRoutes(); // Clear all routes before each test
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
    });

    it('visit route overview page, add new route, finally save successfully', () => {
        routeOverviewPage.visitRouteOverviewPage();
        cy.log('visit route overview page');
        
    })

    after(() => {
        // runs once all tests are done
        cy.clearServices(); // Clear all services after test
        cy.clearRoutes(); // Clear all routes after test
    })
})