const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mf4euu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
  },
})
//defaultCommandTimeout: 10000;
