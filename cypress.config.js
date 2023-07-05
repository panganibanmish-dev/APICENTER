const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://stg.apicenter.io",
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      login_email: "panganibanmish.work@gmail.com",
      login_password: "Radeonstar@1030",
      MAILOSAUR_API_KEY: "k0xaoDI5ND0KbxaoJsFqHZfQRBLjpV4N",
      baseUrl2: "https://apicenter.io/",
    },
  },
  requestTimeout: 30000,
  numTestsKeptInMemory: 0,
  numTestsKeptInMemory: 0,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 30000,
  video: true,
  experimentalSingleTabRunMode: true,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  experimentalStudio: true
});
