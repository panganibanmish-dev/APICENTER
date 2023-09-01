const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  projectId: "14qdc8",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Apicenter",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    debug: true,
  },
  e2e: {
    baseUrl: "https://app.apicenter.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
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
      password: "Radeonstar@1120",
    },
  },
  requestTimeout: 30000,
  numTestsKeptInMemory: 0,
  numTestsKeptInMemory: 0,
  responseTimeout: 30000,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/reports/html/assets",
  defaultCommandTimeout: 50000,
  video: true,
  compilerOptions: {
    types: ["jest", "node"],
  },
  experimentalSingleTabRunMode: true,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  experimentalStudio: true,
});
