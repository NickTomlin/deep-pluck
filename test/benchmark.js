var _ = require('lodash');
var pluckDeep = require('../pluck-deep');
var benchmark = require('benchmark');
// 460k of government data. Woo Hoo. https://www.healthcare.gov/api/glossary.json
var bigObj = require('./fixtures/glossary.json');
var suite = new benchmark.Suite();

function langFilter (lang){
  return lang == "es";
}

// SPOILER: PluckDeep is a lot slower.
suite.add('Pluck deep', function () {
  var articlesInSpanish = pluckDeep(bigObj, 'lang')
  .filter(langFilter)
  .length;
})
.add('Manual munging', function () {
// yes, there is only one child of this object
// but we are going to iterate just because
var result = _.chain(bigObj)
  .map(function (child){
    return _.map(child, function (glossary) {
      return glossary.lang;
    });
  })
  .flatten()
  .filter(langFilter)
  .value();
})
.on('cycle', function(event) {
  console.log(String(event.target), event.target.times.period * 1000, ' ms');
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();
