const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "z4j9wf",
  "env": {
    "CYPRESS_RECORD_KEY": "cbfa8b78-74fa-44d6-99cb-aa18e0044dc4"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
