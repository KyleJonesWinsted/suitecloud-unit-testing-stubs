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

  // PiRemovalTask Object Properties

  PiRemovalTask.prototype.fieldIds = undefined;

  PiRemovalTask.prototype.historyOnly = undefined;

  PiRemovalTask.prototype.historyReplacement = undefined;

  PiRemovalTask.prototype.id = undefined;

  PiRemovalTask.prototype.recordIds = undefined;

  PiRemovalTask.prototype.recordType = undefined;

  PiRemovalTask.prototype.status = undefined;

  PiRemovalTask.prototype.workflowIds = undefined;

  // PiRemovalTaskLogItem Object Properties

  PiRemovalTaskLogItem.prototype.exception = undefined;

  PiRemovalTaskLogItem.prototype.message = undefined;

  PiRemovalTaskLogItem.prototype.status = undefined;

  PiRemovalTaskLogItem.prototype.type = undefined;

  // PiRemovalTaskStatus Object Properties

  PiRemovalTaskStatus.prototype.logList = undefined;

  PiRemovalTaskStatus.prototype.status = undefined;

  return new piremoval();
})();