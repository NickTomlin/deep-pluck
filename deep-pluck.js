var isObject = deepPluck._isObject = function(target) {
  var t = typeof target;
  return (t === 'function' || t === 'object') || false;
};

function deepPluck (source, target, results) {
  results = results || [];

  if (!source) return results;

  if (source[target]) {
    results.push(source[target]);
  }

  if (isObject(source)) {
    for (var prop in source) {
      deepPluck(source[prop], target, results);
    }
  }

  return results;
}

module.exports = deepPluck;
