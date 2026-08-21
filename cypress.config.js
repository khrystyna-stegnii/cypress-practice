const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  reporter: 'cypress-mochawesome-reporter',

  env: {
    site1_email: "khrystyna.stegnii@gmail.com",
    site1_password: "gskfvvRYUziFuXj",
  },

  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});