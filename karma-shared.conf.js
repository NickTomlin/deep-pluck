module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'expect'],
    // i'm not sure if this is going to get overwritten or merged
    files: ['pluck-deep.js','test/*-test.js','test/fixtures/*'],
    preprocessors: {
      '**/*.json': 'html2js'
    },
    exclude: [],
    reporters: ['progress'],
    autowatch: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    captureTimeout: 60000,
  });
};
