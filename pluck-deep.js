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

module.exports = pluckDeep;
