module.exports = (function() {
  // N/log Module Members

  var log = function() {};

  // Method

  log.prototype.audit = function(options) {};

  log.prototype.debug = function(options) {};

  log.prototype.emergency = function(options) {};

  log.prototype.error = function(options) {};

  return new log();
})();

