!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.pluckDeep=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

},{}]},{},[1])
(1)
});