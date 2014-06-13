module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    // i'm not sure if this is going to get overwritten or merged
    files: ['deep-pluck.js','test/*-test.js','test/fixtures/*'],
    preprocessors: {
      '**/*.json': 'html2js',
      'test/*.js': 'browserify'
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
