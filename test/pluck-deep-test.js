var assert = require('assert');
var nested = require('./fixtures/nested.json');
var multipleLevels = require('./fixtures/multiple-levels.json');
var regular = require('./fixtures/regular-object');
var deepPluck = require('../deep-pluck');

describe('deepPluck', function () {
  it('properly deals with a single json object', function () {
    var results = deepPluck(nested, 'sub_section_items');
    assert.equal(results.length, 3);
  });

  it('handles targets at multiple levels of an object', function () {
    var results = deepPluck(multipleLevels, 'target');
    assert.equal(results.length, 3);
  });

  it('returns an empty array when nothing is found', function () {
    var results = deepPluck({
      'foo': 'bar',
      'baz': {
        'biz':'boz'
      }
    }, 'doesnotexist');
    assert.equal(results.length, 0);
  });

  it('returns an empty array when passed a non iterable object', function () {
    assert.equal(deepPluck('foo', 'target').length, 0);
    assert.equal(deepPluck(2, 'target').length, 0);
  });

  it('returns an empty array if passed null/undefined/odd object', function () {
    assert.equal(deepPluck(null).length, 0);
    assert.equal(deepPluck(undefined).length, 0);
    assert.equal(deepPluck(false).length, 0);
    assert.equal(deepPluck(true).length, 0);
    assert.equal(deepPluck(parseInt('Break')).length, 0);
  });

  describe('_isObject', function () {
    it('identifies plain objects', function () {
      assert(deepPluck._isObject({}));
    });

    it('identifies arrays', function () {
      assert(deepPluck._isObject([]));
    });

    it('identifies functions', function () {
      var anon = function anon(){};
      assert(deepPluck._isObject(anon));
    });

    it('does not identify strings', function () {
      assert.equal(deepPluck._isObject('string'), false);
    });
  });
});
