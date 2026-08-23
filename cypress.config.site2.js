const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  env: {
    site2_email: "khrystyna.stegnii+2@gmail.com",
    site2_password: "Test12345678!",
  },

  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space",
    video: true,
    screenshotOnRunFailure: true,
  },
});