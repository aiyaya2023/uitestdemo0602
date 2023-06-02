const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "z4j9wf",
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    supportFile: false,
  },
})
