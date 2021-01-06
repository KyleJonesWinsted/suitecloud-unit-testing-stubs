module.exports = (function () {

  // N/action Module Members

  var action = function() {};

  // Object

  var Action = function(options) {};

  action.prototype.Action = Action;

  // Method

  action.prototype.execute = function(options) {};

  action.prototype.execute.promise = function(options) {};
  
  action.prototype.executeBulk = function(options) {};

  action.prototype.find = function(options) {};

  action.prototype.find.promise = function(options) {};

  action.prototype.get = function(options) {};

  action.prototype.get.promise = function(options) {};

  action.prototype.getBulkStatus = function(options) {};

  // Action Object Methods

  Action.promise = function(options) {};

  Action.prototype.execute = function(options) {};

  Action.prototype.execute.promise = function(options) {};

  Action.prototype.executeBulk = function(options) {};

  return new action();

})();