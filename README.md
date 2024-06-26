# Kong Test Project

This is my task for the Kong test project.

## Install and Structure

1. **docker-compose.yml** is in the root directory, required to set up the Kong Manager for workflow tests.
2. All tests are in the **cypress** folder.
3. UI test scripts are in the **e2e** folder.
4. API scripts are in the **api** folder.

## Design of Test

1. All tests are only for UI configuration checks; gateway function testing is not included, I orginally wanted to setup a testing app as a service that kong api gateway will forward client request to, so we have check request URL/headers/bodys that processed by kong API gateway in server side, but due to time constrains, I only performed UI configuration check.
2. Some additional test scenarios are listed in `addService.cy.js` as placeholders and are currently skipped. I acknowledge there are many more scenarios to cover; these are just examples.

## Setup and Teardown

1. **API operations** are used for setup and teardown as they are more stable and faster than UI operations.
2. `clearService` and `clearRoute` functions clean up the test landscape, and `addServices` function uses API to create services, which is a precondition for creating routes.

## Implementation of the Testing

1. For route-related operations, **Page Object** and **Domain Action** files are used.

### Page Object Files (e.g., `routeOverviewPage.js`, `routeAddPage.js`):

- **Purpose**: To encapsulate the locators and actions related to a specific page.
- **Content**: Both getter functions for locators and action functions that interact with these locators.

### Domain Actions File (e.g., `routeDomain.js`):

- **Purpose**: To encapsulate complex workflows that span multiple pages.
- **Content**: High-level functions that combine actions from multiple page objects to achieve a specific goal.

### Separation of Concerns:

- **Page Object Files**: Each page object encapsulates only the details related to that specific page. This makes it easier to locate and update locators or page-specific actions if the UI changes.
- **Domain Actions File**: High-level actions involving multiple pages are centralized, keeping your test scripts clean and focused on the test logic rather than the implementation details of page interactions.

2. For services-related operations, only the **Page Object** is introduced.
   - You can compare `addRoute.cy.js` and `addService.cy.js` to see the differences between writing with and without domain action files.
   - More test details are exposed in `addService`, while for `addRoute`, these details are included in the domain action file.
   - Both approaches have pros and cons, so I have kept both.

## Run in CI github action
Push code to trigger a run in GitHub Actions:
https://github.com/ah64zzpk/kongTestProject/actions

## Run Locally

```bash
git clone https://github.com/ah64zzpk/kongTestProject.git
docker-compose up -d
npm install
npm run clean:reports && npm run cy:run



