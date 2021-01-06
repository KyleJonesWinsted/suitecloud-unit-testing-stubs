module.exports = (function () {

  // N/cache Module Members

  var cache = function() {};

  // Object

  var Cache = function() {};

  cache.prototype.Cache = Cache;

  // Method

  cache.prototype.getCache = function(options) {};

  // Cache Object Methods

  Cache.prototype.get = function(options) {};

  Cache.prototype.put = function(options) {};

  Cache.prototype.remove = function(options) {};

  // Enum

  function Scope() {
    this.PRIVATE = "PRIVATE";
    this.PROTECTED = "PROTECTED";
    this.PUBLIC = "PUBLIC";
  }

  cache.prototype.Scope = new Scope();

  return new cache();
})();