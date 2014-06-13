karma_shared = require("./karma-shared.conf")

# Karma configuration
# Generated on Mon Mar 10 2014 13:16:59 GMT-0500 (CDT)
module.exports = (config) ->
  karma_shared config,
    testName: "pluck deep client"
    logFile: "pluck-deep-client.log"

  config.set
    browsers: ["Firefox", "Chrome", "Safari"]
    autorun: true

  return
