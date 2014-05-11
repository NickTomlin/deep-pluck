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
    logFile: "pluck-deep-sauce.log"

  config.set
    saucelabs:
      username: sauce_config.username
      account:  sauce_config.account

    customLaunchers:
      sl_ie_8:
        base: "SauceLabs"
        browserName: "internet explorer"
        platform: "windows 7"
        version: "8"
      sl_ie_9:
        base: "SauceLabs"
        browserName: "internet explorer"
        platform: "windows 7"
        version: "9"

    browsers: ["sl_ie_8", "sl_ie_9"]

    plugins: [
      "karma-sauce-launcher",
      "karma-html2js-preprocessor",
      "karma-mocha",
      "karma-expect",
      "karma-phantomjs-launcher"
    ]

    singleRun: true
    autowatch: false

  return
