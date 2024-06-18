import ServiceOverviewPage from '../pages/serviceOverviewPage';
import ServiceAddPage from '../pages/serviceAddPage';

const serviceDataSet = {
  name: 'customerService',
  tag: 'customer',
  upstreamUrl: 'https://api.mycompany.com/customers'
}
describe('Kong Manage Service Page Test', () => {
  const serviceOverviewPage = new ServiceOverviewPage();
  const serviceAddPage = new ServiceAddPage();

  beforeEach(() => {
    cy.clearServices(); // Clear all services before each test
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
  });

  it.skip('visit service page, add new service and cancel it should back to overview page', ()=>{

  })

  it.skip('add new service without upstream URL as mandantory field, save button should be disabled', ()=>{
    
  })

  it('visit service page, add new service, finally save successfully', () => {
    serviceOverviewPage.visitGatewayPage();
    cy.log('visit gateway overview page');
    serviceOverviewPage.addFirstService();
    serviceAddPage.checkInAddGatewayPage();
    cy.log('click add new service button and verify enter entering adding new service page OK');
    serviceAddPage.inputGatewayName(serviceDataSet.name);
    serviceAddPage.checkGatewayName(serviceDataSet.name);
    cy.log('Input new service name OK');
    serviceAddPage.inputGatewayTag(serviceDataSet.tag);
    serviceAddPage.checkGatewayTag(serviceDataSet.tag);
    cy.log('Input new service tag OK');
    serviceAddPage.inputGatewayUpUrl(serviceDataSet.upstreamUrl);
    serviceAddPage.checkGatewayUpUrl(serviceDataSet.upstreamUrl);
    cy.log('Input new service upstream OK');
    serviceAddPage.clickGatewaySaveBtn();
    serviceOverviewPage.checkInGatewayOverviewPage();
    cy.log('Save new service OK');
  })
})