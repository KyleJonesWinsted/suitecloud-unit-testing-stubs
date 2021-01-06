module.exports = (function () {

  // N/piremoval Module Members

  var piremoval = function() {};

  // Object

  var PiRemovalTask = function() {};

  var PiRemovalTaskLogItem = function() {};

  var PiRemovalTaskStatus = function() {};

  piremoval.prototype.PiRemovalTask = PiRemovalTask;

  piremoval.prototype.PiRemovalTaskLogItem = PiRemovalTaskLogItem;

  piremoval.prototype.PiRemovalTaskStatus = PiRemovalTaskStatus;

  // Method

  piremoval.prototype.createTask = function(options) {};

  piremoval.prototype.deleteTask = function(options) {};

  piremoval.prototype.getTaskStatus = function(options) {};

  piremoval.prototype.loadTask = function(options) {};

  // PiRemovalTask Object Methods

  PiRemovalTask.prototype.deleteTask = function() {};

  PiRemovalTask.prototype.run = function() {};

  PiRemovalTask.prototype.save = function() {};

  return new piremoval();
})();