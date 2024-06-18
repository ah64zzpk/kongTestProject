const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8002/default',
    env: {
      apiBaseUrl: 'http://localhost:8001/' // Base URL for API operations
    }
  },
  reporter: 'mochawesome',
  reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
  }
});
