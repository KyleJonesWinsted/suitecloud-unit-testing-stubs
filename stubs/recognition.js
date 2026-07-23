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

  // MergeArrangementsTask Object Properties

  MergeArrangementsTask.prototype.arrangements = undefined;

  MergeArrangementsTask.prototype.contractAcquisitionDeferredExpenseAccount = undefined;

  MergeArrangementsTask.prototype.contractAcquisitionExpenseAccount = undefined;

  MergeArrangementsTask.prototype.contractCostAccrualDate = undefined;

  MergeArrangementsTask.prototype.mergeResidualRevenueAmounts = undefined;

  MergeArrangementsTask.prototype.recalculateResidualFairValue = undefined;

  MergeArrangementsTask.prototype.revenueArrangementDate = undefined;

  // MergeArrangementsTaskStatus Object Properties

  MergeArrangementsTaskStatus.prototype.errorMessage = undefined;

  MergeArrangementsTaskStatus.prototype.inputArrangements = undefined;

  MergeArrangementsTaskStatus.prototype.inputElements = undefined;

  MergeArrangementsTaskStatus.prototype.resultingArrangement = undefined;

  MergeArrangementsTaskStatus.prototype.status = undefined;

  MergeArrangementsTaskStatus.prototype.submissionId = undefined;

  MergeArrangementsTaskStatus.prototype.taskId = undefined;

  // MergeElementsTask Objects Methods

  MergeElementsTask.prototype.submit = function() {};

  // MergeElementsTask Object Properties

  MergeElementsTask.prototype.contractAcquisitionDeferredExpenseAccount = undefined;

  MergeElementsTask.prototype.contractAcquisitionExpenseAccount = undefined;

  MergeElementsTask.prototype.contractCostAccrualDate = undefined;

  MergeElementsTask.prototype.elements = undefined;

  MergeElementsTask.prototype.revenueArrangementDate = undefined;

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