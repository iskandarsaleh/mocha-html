const webdriverChrome = require('selenium-webdriver/chrome');

const notificationPermission = {};
    notificationPermission[testServerAddress + ',*'] = {
      setting: 1,
    };
    const chromePreferences = {
      profile: {
        content_settings: {
          exceptions: {
            notifications: notificationPermission,
          },
        },
      },
    };

    // Write to a file
    const tempPreferenceDir = path.join(__dirname, 'tmp', 'chrome-prefs');
    mkdirp.sync(tempPreferenceDir + '/Default');
    const preferenceFilePath = path.join(tempPreferenceDir, 'Preferences');
    fs.writeFileSync(
      preferenceFilePath,
      JSON.stringify(chromePreferences));


const options = new webdriverChrome.Options();
options.addArguments('user-data-dir=' + tempPreferenceDir);

const builder = new webdriver
  .Builder()
  .forBrowser(‘chrome’)
.setChromeOptions(options);
