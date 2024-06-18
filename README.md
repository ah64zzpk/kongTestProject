Kong Test Project
This is my task for kong test project
docker-compose.yml is in root,and all tests are in cypress folder.
This testing is for demo use only, and it contains two tests, and both of them located in e2e folder
1. add service
2. add routes related to this services
I know there should be more scenarios required for both adding services and adding routes page, I put some of them in it.skip part
These two scripts focus only on UI operations.
I noticed there're test id predefined for the elements on pages, and I defined different page object for different pages: service page and route page, each page contains the getter function to return the UI element locator and action functions to perform basic UI operations.

In api folder there are two scripts for test setup and teardown
1. clean up services/routes before and after test suite
2. create services as precondtion for route adding test
