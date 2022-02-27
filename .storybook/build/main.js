const path = require('path')

module.exports = {
  "stories": [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions'
  ],
  "framework": "@storybook/vue3",
  // "core": {
  //   "builder": "storybook-builder-vite"
  // }
}
