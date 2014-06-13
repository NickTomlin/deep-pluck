var assert = require('assert');
var nested = require('./fixtures/nested.json');
var multipleLevels = require('./fixtures/multiple-levels.json');
var regular = require('./fixtures/regular-object');
var pluckDeep = require('../pluck-deep');

describe('pluckDeep', function () {
  it('properly deals with a single json object', function () {
    var results = pluckDeep(nested, 'sub_section_items');
    assert.equal(results.length, 3);
  });

  it('handles targets at multiple levels of an object', function () {
    var results = pluckDeep(multipleLevels, 'target');
    assert.equal(results.length, 3);
  });

  it('returns an empty array when nothing is found', function () {
    var results = pluckDeep({
      'foo': 'bar',
      'baz': {
        'biz':'boz'
      }
    }, 'doesnotexist');
    assert.equal(results.length, 0);
  });

  it('returns an empty array when passed a non iterable object', function () {
    assert.equal(pluckDeep('foo', 'target').length, 0);
    assert.equal(pluckDeep(2, 'target').length, 0);
  });

  it('returns an empty array if passed null/undefined/odd object', function () {
    assert.equal(pluckDeep(null).length, 0);
    assert.equal(pluckDeep(undefined).length, 0);
    assert.equal(pluckDeep(false).length, 0);
    assert.equal(pluckDeep(true).length, 0);
    assert.equal(pluckDeep(parseInt('Break')).length, 0);
  });

  describe('_isObject', function () {
    it('identifies plain objects', function () {
      assert(pluckDeep._isObject({}));
    });

    it('identifies arrays', function () {
      assert(pluckDeep._isObject([]));
    });

    it('identifies functions', function () {
      var anon = function anon(){};
      assert(pluckDeep._isObject(anon));
    });

    it('does not identify strings', function () {
      assert.equal(pluckDeep._isObject('string'), false);
    });
  });
});
