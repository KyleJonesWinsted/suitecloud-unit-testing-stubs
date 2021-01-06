module.exports = (function () {

  // N/util Module members

  var util = function() {};

  // Method

  util.prototype.each = function(iterable, callback) {};

  util.prototype.extend = function(reciever, contributor) {};

  util.prototype.isArray = function(obj) {};

  util.prototype.isAsyncFunction = function(obj) {};

  util.prototype.isBoolean = function(obj) {};

  util.prototype.isDate = function(obj) {};
  
  util.prototype.isFunction = function(obj) {};

  util.prototype.isNumber = function(obj) {};

  util.prototype.isObject = function(obj) {};

  util.prototype.isRegExp = function(obj) {};

  util.prototype.isString = function(obj) {};

  util.prototype.nanoTime = function() {};

  return new util();
})();