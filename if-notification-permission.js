const webdriverFirefox = require(‘selenium-webdriver/firefox’);

const ffProfile = new webdriverFirefox.Profile();
ffProfile.setPreference('dom.push.testing.ignorePermission', true);
ffProfile.setPreference('notification.prompt.testing', true);
ffProfile.setPreference('notification.prompt.testing.allow', true);
Const options = new webdriverFirefox.Options();
options.setProfile(ffProfile);
const builder = new webdriver
  .Builder()
  .forBrowser(‘firefox’)
.setFirefoxOptions(options);
