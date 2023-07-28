const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://app.apicenter.io/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      login_email: "panganibanmish.work@gmail.com",
      login_password: "Radeonstar@1030",

      inEmail: "panganibanmish.test@gmail.com",
      inPassword: "Radeonstar@1120",
      firstname: "Michelle",
      lastname: "Panganiban",
      phone: 923456784,
      company: "GG QA",
      email: "panganibanmish.work@gmail.com",
      baseUrl2: "https://apicenter.io/",
    },
  },
  requestTimeout: 30000,
  numTestsKeptInMemory: 0,
  numTestsKeptInMemory: 0,
  responseTimeout: 30000,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 50000,
  video: true,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    reportFilename: "[status]_[datetime]-[name]-report",
    title: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    charts: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    overwrite: true,
    inlineAssets: true,
    enableCharts: true,
  },
  compilerOptions: {
    types: ["jest", "node"],
  },
  experimentalSingleTabRunMode: true,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  experimentalStudio: true
});
