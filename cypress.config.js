const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiUrl: 'https://serverest.dev',
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
