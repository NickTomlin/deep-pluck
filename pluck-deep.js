(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.pluckDeep = factory();
  }
}(this, function () {

  var isObject = pluckDeep._isObject = function(target) {
    var t = typeof target;
    return (t === 'function' || t === 'object') || false;
  };

  function pluckDeep (source, target, results) {
    results = results || [];

    if (source[target]) {
      results.push(source[target]);
    }

    if (isObject(source)) {
      for (var prop in source) {
        pluckDeep(source[prop], target, results);
      }
    }

    return results;
  }

  return pluckDeep;
}));
