module.exports = (function () {

  // N/task/accounting/recognition Module Members

  var recognition = function() {};

  // Object

  var MergeArrangementsTask = function() {};

  var MergeArrangementsTaskStatus = function() {};

  var MergeElementsTask = function() {};

  recognition.prototype.MergeArrangementsTask = MergeArrangementsTask;

  recognition.prototype.MergeArrangementsTaskStatus = MergeArrangementsTaskStatus;

  recognition.prototype.MergeElementsTask = MergeElementsTask;

  // Method

  recognition.prototype.checkStatus = function(options) {};

  recognition.prototype.create = function(options) {};

  // MergeArrangementsTask Object Methods

  MergeArrangementsTask.prototype.submit = function() {};

  // MergeElementsTask Objects Methods

  MergeElementsTask.prototype.submit = function() {};

  // Enum

  function TaskStatus() {
    this.COMPLETE = "COMPLETE";
    this.FAILED = "FAILED";
    this.PENDING = "PENDING";
    this.PROCESSING = "PROCESSING";
  }

  function TaskType() {
    this.MERGE_ARRANGEMENTS_TASK = "MERGE_ARRANGEMENTS_TASK";
    this.MERGE_ELEMENTS_TASK = "MERGE_ELEMENTS_TASK";
  }

  recognition.prototype.TaskStatus = new TaskStatus();

  recognition.prototype.TaskType = new TaskType();

  return new recognition();
})();