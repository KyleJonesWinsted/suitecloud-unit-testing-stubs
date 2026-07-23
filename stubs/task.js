module.exports = (function () {

  // N/task Module Members

  var task = function() {};

  // Object

  var CsvImportTask = function() {};

  var CsvImportTaskStatus = function() {};

  var DocumentCaptureTask = function() {};

  var DocumentCaptureTaskStatus = function() {};

  var EntityDeduplicationTask = function() {};

  var EntityDeduplicationTaskStatus = function() {};

  var MapReduceScriptTask = function() {};

  var MapReduceScriptTaskStatus = function() {};

  var QueryTask = function() {};

  var QueryTaskStatus = function() {};

  var RecordActionTask = function() {};

  var RecordActionTaskStatus = function() {};

  var ScheduledScriptTask = function() {};

  var ScheduledScriptTaskStatus = function() {};

  var SearchTask = function() {};

  var SearchTaskStatus = function() {};

  var SuiteQLTask = function() {};

  var SuiteQLTaskStatus = function() {};

  var WorkflowTriggerTask = function() {};

  var WorkflowTriggerTaskStatus = function() {};

  task.prototype.CsvImportTask = CsvImportTask;

  task.prototype.CsvImportTaskStatus = CsvImportTaskStatus;

  task.prototype.DocumentCaptureTask = DocumentCaptureTask;

  task.prototype.DocumentCaptureTaskStatus = DocumentCaptureTaskStatus;

  task.prototype.EntityDeduplicationTask = EntityDeduplicationTask;

  task.prototype.EntityDeduplicationTaskStatus = EntityDeduplicationTaskStatus;

  task.prototype.MapReduceScriptTask = MapReduceScriptTask;

  task.prototype.MapReduceScriptTaskStatus = MapReduceScriptTaskStatus;

  task.prototype.QueryTask = QueryTask;

  task.prototype.QueryTaskStatus = QueryTaskStatus;

  task.prototype.RecordActionTask = RecordActionTask;

  task.prototype.RecordActionTaskStatus = RecordActionTaskStatus;

  task.prototype.ScheduledScriptTask = ScheduledScriptTask;

  task.prototype.ScheduledScriptTaskStatus = ScheduledScriptTaskStatus;

  task.prototype.SearchTask = SearchTask;

  task.prototype.SearchTaskStatus = SearchTaskStatus;

  task.prototype.SuiteQLTask = SuiteQLTask;

  task.prototype.SuiteQLTaskStatus = SuiteQLTaskStatus;

  task.prototype.WorkflowTriggerTask = WorkflowTriggerTask;

  task.prototype.WorkflowTriggerTaskStatus = WorkflowTriggerTaskStatus;

  // Method

  task.prototype.checkStatus = function(options) {};

  task.prototype.create = function(options) {};

  // CsvImportTask Object Methods

  CsvImportTask.prototype.submit = function() {};

  // CsvImportTask Object Properties

  CsvImportTask.prototype.id = undefined;

  CsvImportTask.prototype.importFile = undefined;

  CsvImportTask.prototype.linkedFiles = undefined;

  CsvImportTask.prototype.mappingId = undefined;

  CsvImportTask.prototype.name = undefined;

  CsvImportTask.prototype.queueId = undefined;

  // CsvImportTaskStatus Object Properties

  CsvImportTaskStatus.prototype.status = undefined;

  CsvImportTaskStatus.prototype.taskId = undefined;

  // DocumentCaptureTask Object Methods

  DocumentCaptureTask.prototype.addInboundDependency = function(options) {};

  DocumentCaptureTask.prototype.submit = function() {};

  // DocumentCaptureTask Object Properties

  DocumentCaptureTask.prototype.documentType = undefined;

  DocumentCaptureTask.prototype.features = undefined;

  DocumentCaptureTask.prototype.id = undefined;

  DocumentCaptureTask.prototype.inboundDependencies = undefined;

  DocumentCaptureTask.prototype.inputFile = undefined;

  DocumentCaptureTask.prototype.language = undefined;

  DocumentCaptureTask.prototype.ociConfig = undefined;

  DocumentCaptureTask.prototype.outputFilePath = undefined;

  // DocumentCaptureTaskStatus Object Properties

  DocumentCaptureTaskStatus.prototype.status = undefined;

  DocumentCaptureTaskStatus.prototype.taskId = undefined;

  // EntityDeduplicationTask Object Methods

  EntityDeduplicationTask.prototype.submit = function() {};

  // EntityDeduplicationTask Object Properties

  EntityDeduplicationTask.prototype.dedupeMode = undefined;

  EntityDeduplicationTask.prototype.entityType = undefined;

  EntityDeduplicationTask.prototype.id = undefined;

  EntityDeduplicationTask.prototype.masterRecordId = undefined;

  EntityDeduplicationTask.prototype.masterSelectionMode = undefined;

  EntityDeduplicationTask.prototype.recordIds = undefined;

  // EntityDeduplicationTaskStatus Object Properties

  EntityDeduplicationTaskStatus.prototype.status = undefined;

  EntityDeduplicationTaskStatus.prototype.taskId = undefined;

  // MapReduceScriptTask Object Methods

  MapReduceScriptTask.prototype.submit = function() {};

  // MapReduceScriptTask Object Properties

  MapReduceScriptTask.prototype.deploymentId = undefined;

  MapReduceScriptTask.prototype.id = undefined;

  MapReduceScriptTask.prototype.params = undefined;

  MapReduceScriptTask.prototype.scriptId = undefined;

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

  // MapReduceScriptTaskStatus Object Properties

  MapReduceScriptTaskStatus.prototype.deploymentId = undefined;

  MapReduceScriptTaskStatus.prototype.scriptId = undefined;

  MapReduceScriptTaskStatus.prototype.stage = undefined;

  MapReduceScriptTaskStatus.prototype.status = undefined;

  MapReduceScriptTaskStatus.prototype.taskId = undefined;

  // QueryTask Object Methods

  QueryTask.prototype.addInboundDependency = function(options) {};

  QueryTask.prototype.submit = function() {};

  // QueryTask Object Properties

  QueryTask.prototype.fileId = undefined;

  QueryTask.prototype.filePath = undefined;

  QueryTask.prototype.id = undefined;

  QueryTask.prototype.inboundDependencies = undefined;

  QueryTask.prototype.query = undefined;

  // QueryTaskStatus Object Properties

  QueryTaskStatus.prototype.fileId = undefined;

  QueryTaskStatus.prototype.query = undefined;

  QueryTaskStatus.prototype.status = undefined;

  QueryTaskStatus.prototype.taskId = undefined;

  // RecordActionTask

  RecordActionTask.prototype.submit = function() {};

  // RecordActionTask Object Properties

  RecordActionTask.prototype.action = undefined;

  RecordActionTask.prototype.condition = undefined;

  RecordActionTask.prototype.id = undefined;

  RecordActionTask.prototype.paramCallback = undefined;

  RecordActionTask.prototype.params = undefined;

  RecordActionTask.prototype.recordType = undefined;

  // RecordActionTaskStatus Object Properties

  RecordActionTaskStatus.prototype.complete = undefined;

  RecordActionTaskStatus.prototype.errors = undefined;

  RecordActionTaskStatus.prototype.failed = undefined;

  RecordActionTaskStatus.prototype.pending = undefined;

  RecordActionTaskStatus.prototype.results = undefined;

  RecordActionTaskStatus.prototype.status = undefined;

  RecordActionTaskStatus.prototype.succeeded = undefined;

  RecordActionTaskStatus.prototype.taskId = undefined;

  // ScheduledScriptTask Object Methods

  ScheduledScriptTask.prototype.submit = function() {};

  // ScheduledScriptTask Object Properties

  ScheduledScriptTask.prototype.deploymentId = undefined;

  ScheduledScriptTask.prototype.id = undefined;

  ScheduledScriptTask.prototype.params = undefined;

  ScheduledScriptTask.prototype.scriptId = undefined;

  // ScheduledScriptTaskStatus Object Properties

  ScheduledScriptTaskStatus.prototype.deploymentId = undefined;

  ScheduledScriptTaskStatus.prototype.scriptId = undefined;

  ScheduledScriptTaskStatus.prototype.status = undefined;

  ScheduledScriptTaskStatus.prototype.taskId = undefined;

  // SearchTask Object Methods

  SearchTask.prototype.addInboundDependency = function() {};

  SearchTask.prototype.submit = function() {};

  // SearchTask Object Properties

  SearchTask.prototype.fileId = undefined;

  SearchTask.prototype.filePath = undefined;

  SearchTask.prototype.id = undefined;

  SearchTask.prototype.inboundDependencies = undefined;

  SearchTask.prototype.savedSearchId = undefined;

  // SearchTaskStatus Object Properties

  SearchTaskStatus.prototype.fileId = undefined;

  SearchTaskStatus.prototype.savedSearchId = undefined;

  SearchTaskStatus.prototype.status = undefined;

  SearchTaskStatus.prototype.taskId = undefined;

  // SuiteQLTask Object Methods
  
  SuiteQLTask.prototype.addInboundDependency = function(options) {};

  SuiteQLTask.prototype.submit = function() {};

  // SuiteQLTask Object Properties

  SuiteQLTask.prototype.fileId = undefined;

  SuiteQLTask.prototype.filePath = undefined;

  SuiteQLTask.prototype.id = undefined;

  SuiteQLTask.prototype.inboundDependencies = undefined;

  SuiteQLTask.prototype.params = undefined;

  SuiteQLTask.prototype.query = undefined;

  // SuiteQLTaskStatus Object Properties

  SuiteQLTaskStatus.prototype.fileId = undefined;

  SuiteQLTaskStatus.prototype.params = undefined;

  SuiteQLTaskStatus.prototype.query = undefined;

  SuiteQLTaskStatus.prototype.status = undefined;

  SuiteQLTaskStatus.prototype.taskId = undefined;

  // WorkflowTriggerTask Object Methods

  WorkflowTriggerTask.prototype.submit = function() {};

  // WorkflowTriggerTask Object Properties

  WorkflowTriggerTask.prototype.id = undefined;

  WorkflowTriggerTask.prototype.params = undefined;

  WorkflowTriggerTask.prototype.recordId = undefined;

  WorkflowTriggerTask.prototype.recordType = undefined;

  WorkflowTriggerTask.prototype.workflowId = undefined;

  // WorkflowTriggerTaskStatus Object Properties

  WorkflowTriggerTaskStatus.prototype.status = undefined;

  WorkflowTriggerTaskStatus.prototype.taskId = undefined;

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
    this.DOCUMENT_CAPTURE = "DOCUMENT_CAPTURE";
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