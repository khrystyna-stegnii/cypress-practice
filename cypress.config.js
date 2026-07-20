const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
   baseUrl: "https://example.cypress.io/",
   retries: {
     runMode: 2,
     openMode: 2
   },
   video: true,
   screenshotOnRunFailure: true
  },
});
