'use strict'

const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin')

/**
 * mock plugin
 * it runs last
 * see readme.md
 */
class Plugin extends PuppeteerExtraPlugin {
  constructor(opts = {}) {
    super(opts);
  }

  get requirements() {
    return new Set(['runLast'])
  }

  beforeLaunch(options) {
    console.log("lastPlugin.beforeLaunch  options:", JSON.stringify(options));
  }

  onPageCreated(page) {
    console.log("lastPlugin.onPageCreated  page url:", page.url());
  }
  
  get name() {
    return 'stealth/evasions/lastPlugin'
  }
}

module.exports = function(pluginConfig) {
  return new Plugin(pluginConfig)
}
