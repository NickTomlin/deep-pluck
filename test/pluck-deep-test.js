var expect = require('expect.js');
var nested = require('./fixtures/nested.json');
var multipleLevels = require('./fixtures/multiple-levels.json');
var regular = require('./fixtures/regular-object');
var pluckDeep = require('../pluck-deep');

describe('pluckDeep', function () {
  it('properly deals with a single json object', function () {
    var results = pluckDeep(nested, 'sub_section_items');
    expect(results).to.have.length(3);
  });

  it('handles targets at multiple levels of an object', function () {
    var results = pluckDeep(multipleLevels, 'target');
    expect(results).to.have.length(3);
  });

  it('returns an empty array when nothing is found', function () {
    var results = pluckDeep({
      'foo': 'bar',
      'baz': {
        'biz':'boz'
      }
    }, 'doesnotexist');
    expect(results).to.have.length(0);
  });

  it('returns an empty array when passed a non object or array', function () {
    expect(pluckDeep('foo', 'target')).to.have.length(0);
    expect(pluckDeep(2, 'target')).to.have.length(0);
    expect(pluckDeep(NaN, 'target')).to.have.length(0);
  });

  it('returns an empty array if passed null/undefined/odd object', function () {
    expect(pluckDeep(null)).to.have.length(0);
    expect(pluckDeep(undefined)).to.have.length(0);
    expect(pluckDeep(false)).to.have.length(0);
    expect(pluckDeep(true)).to.have.length(0);
    expect(pluckDeep(parseInt('Break'))).to.have.length(0);
  });

  describe('_isObject', function () {
    it('identifies plain objects', function () {
      expect(pluckDeep._isObject({})).to.be.true;
    });

    it('identifies arrays', function () {
      expect(pluckDeep._isObject([])).to.be.true;
    });

    it('does not identify strings', function () {
      expect(pluckDeep._isObject('string')).to.be.false;
    });

    it('does not identify functions', function () {
      var anon = function anon (){};
      expect(pluckDeep._isObject(anon)).to.be.false
    });
  });
});
