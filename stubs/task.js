module.exports = (function () {

  // N/task Module Members

  var task = function() {};

  // Object

  var CsvImportTask = function() {};

  var CsvImportTaskStatus = function() {};

  var EntityDeduplicationTask = function() {};

  var EntityDeduplicationTaskStatus = function() {};

  var MapReduceScriptTask = function() {};

  var MapReduceScriptTaskStatus = function() {};

  var QueryTask = function() {};

  var RecordActionTask = function() {};

  var RecordActionTaskStatus = function() {};

  var ScheduledScriptTask = function() {};

  var ScheduledScriptTaskStatus = function() {};

  var SearchTask = function() {};

  var SearchTaskStatus = function() {};

  var SuiteQLTask = function() {};

  var WorkflowTriggerTask = function() {};

  var WorkflowTriggerTaskStatus = function() {};

  task.prototype.CsvImportTask = CsvImportTask;

  task.prototype.CsvImportTaskStatus = CsvImportTaskStatus;

  task.prototype.EntityDeduplicationTask = EntityDeduplicationTask;

  task.prototype.EntityDeduplicationTaskStatus = EntityDeduplicationTaskStatus;

  task.prototype.MapReduceScriptTask = MapReduceScriptTask;

  task.prototype.MapReduceScriptTaskStatus = MapReduceScriptTaskStatus;

  task.prototype.QueryTask = QueryTask;

  task.prototype.RecordActionTask = RecordActionTask;

  task.prototype.RecordActionTaskStatus = RecordActionTaskStatus;

  task.prototype.ScheduledScriptTask = ScheduledScriptTask;

  task.prototype.ScheduledScriptTaskStatus = ScheduledScriptTaskStatus;

  task.prototype.SearchTask = SearchTask;

  task.prototype.SearchTaskStatus = SearchTaskStatus;

  task.prototype.SuiteQLTask = SuiteQLTask;

  task.prototype.WorkflowTriggerTask = WorkflowTriggerTask;

  task.prototype.WorkflowTriggerTaskStatus = WorkflowTriggerTaskStatus;

  // Method

  task.prototype.checkStatus = function(options) {};

  task.prototype.create = function(options) {};

  // CsvImportTask Object Methods

  CsvImportTask.prototype.submit = function() {};

  // EntityDeduplicationTask Object Methods

  EntityDeduplicationTask.prototype.submit = function() {};

  // MapReduceScriptTask Object Methods

  MapReduceScriptTask.prototype.submit = function() {};

  // MapReduceScriptTaskStatus Object Methods

  MapReduceScriptTaskStatus.prototype.getCurrentTotalSize = function() {};

  MapReduceScriptTaskStatus.prototype.getPendingMapCount = function() {};

  MapReduceScriptTaskStatus.prototype.getPendingMapSize = function() {};

  MapReduceScriptTaskStatus.prototype.getPendingOutputCount = function() {};

  MapReduceScriptTaskStatus.prototype.getPendingOutputSize = function() {};

  MapReduceScriptTaskStatus.prototype.getPendingReduceCount = function() {};

  MapReduceScriptTaskStatus.prototype.getPendingReduceSize = function() {};

  MapReduceScriptTaskStatus.prototype.getPercentageCompleted = function() {};

  MapReduceScriptTaskStatus.prototype.getTotalMapCount = function() {};

  MapReduceScriptTaskStatus.prototype.getTotalOutputCount = function() {};

  MapReduceScriptTaskStatus.prototype.getTotalReduceCount = function() {};

  // QueryTask Object Methods

  QueryTask.prototype.addInboundDependency = function(options) {};

  QueryTask.prototype.submit = function() {};

  // RecordActionTask

  RecordActionTask.prototype.submit = function() {};

  // ScheduledScriptTask Object Methods

  ScheduledScriptTask.prototype.submit = function() {};

  // SearchTask Object Methods

  SearchTask.prototype.addInboundDependency = function() {};

  SearchTask.prototype.submit = function() {};

  // SuiteQLTask Object Methods
  
  SuiteQLTask.prototype.addInboundDependency = function(options) {};

  SuiteQLTask.prototype.submit = function() {};

  // WorkflowTriggerTask Object Methods

  WorkflowTriggerTask.prototype.submit = function() {};

  // Enum

  function ActionCondition() {
    this.ALL_QUALIFIED_INSTANCES = {}
  }

  function DedupeEntityType() {
    this.CONTACT = "CONTACT";
    this.CUSTOMER = "CUSTOMER";
    this.LEAD = "LEAD";
    this.PARTNER = "PARTNER";
    this.PROSPECT = "PROSPECT";
    this.VENDOR = "VENDOR";
  }

  function DedupeMode() {
    this.DELETE = "DELETE";
    this.MARK_AS_NOT_DUPES = "MARK_AS_NOT_DUPES";
    this.MAKE_MASTER_PARENT = "MAKE_MASTER_PARENT";
    this.MERGE = "MERGE";
  }

  function MapReduceStage() {
    this.GET_INPUT = "GET_INPUT";
    this.MAP = "MAP";
    this.REDUCE = "REDUCE";
    this.SHUFFLE = "SHUFFLE";
    this.SUMMARIZE = "SUMMARIZE";
  }

  function MasterSelectionMode() {
    this.CREATED_EARLIEST = "CREATED_EARLIEST";
    this.MOST_POPULATED_FIELDS = "MOST_POPULATED_FIELDS";
    this.MOST_RECENT_ACTIVITY = "MOST_RECENT_ACTIVITY";
    this.SELECT_BY_ID = "SELECT_BY_ID";
  }

  function TaskStatus() {
    this.COMPLETE = "COMPLETE";
    this.FAILED = "FAILED";
    this.PENDING = "PENDING";
    this.PROCESSING = "PROCESSING";
  }

  function TaskType() {
    this.CSV_IMPORT = "CSV_IMPORT";
    this.ENTITY_DEDUPLICATION = "ENTITY_DEDUPLICATION";
    this.MAP_REDUCE = "MAP_REDUCE";
    this.QUERY = "QUERY";
    this.RECORD_ACTION = "RECORD_ACTION";
    this.SCHEDULED_SCRIPT = "SCHEDULED_SCRIPT";
    this.SEARCH = "SEARCH";
    this.SUITE_QL = "SUITE_QL";
    this.WORKFLOW_TRIGGER = "WORKFLOW_TRIGGER";
  }

  task.prototype.ActionCondition = new ActionCondition();

  task.prototype.DedupeEntityType = new DedupeEntityType();

  task.prototype.DedupeMode = new DedupeMode();

  task.prototype.MapReduceStage = new MapReduceStage();

  task.prototype.MasterSelectionMode = new MasterSelectionMode();

  task.prototype.TaskStatus = new TaskStatus();

  task.prototype.TaskType = new TaskType();

  return new task();
})();