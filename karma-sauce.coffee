SAUCE_FILE = "sauce-config.json"
try
  sauce_config = require("./#{SAUCE_FILE}")
catch e
  throw new Error "#{SAUCE_FILE} does not exist. Please create it and add your sauce credentials"

karma_shared = require("./karma-shared.conf")

# Karma configuration
# Generated on Mon Mar 10 2014 13:16:59 GMT-0500 (CDT)
module.exports = (config) ->
  # do we want to reverse these?
  karma_shared config,
    testName: "pluck deep sauce"
    logFile: "deep-pluck-sauce.log"

  config.set
    plugins: [
      "karma-sauce-launcher",
      "karma-html2js-preprocessor",
      "karma-mocha",
      "karma-browserify",
      "karma-phantomjs-launcher"
    ]
    autorun: true

    saucelabs:
      username: sauce_config.username
      account:  sauce_config.account

    customLaunchers:
      sl_chrome:
        base: "SauceLabs"
        browserName: "chrome"
        version: "34"
      sl_firefox:
        base: "SauceLabs"
        browserName: "firefox"
        version: "26"
      sl_safari:
        base: "SauceLabs"
        browserName: "safari"
        platform: "OS X 10.9"
        version: "7"
      sl_ie_8:
        base: "SauceLabs"
        browserName: "internet explorer"
        platform: "windows 7"
        version: "8"
      sl_ie_9:
        base: "SauceLabs"
        browserName: "internet explorer"
        platform: "Windows 7"
        version: "9"
      sl_ie_10:
        base: "SauceLabs"
        browserName: "internet explorer"
        platform: "Windows 7"
        version: "10"
      sl_ie_11:
        base: "SauceLabs"
        browserName: "internet explorer"
        platform: "Windows 8.1"
        version: "11"

    browsers: ["sl_ie_8", "sl_ie_9", "sl_ie_10", "sl_ie_11", "sl_firefox", "sl_chrome", "sl_safari", "sl_chrome", "sl_firefox"]

  return
