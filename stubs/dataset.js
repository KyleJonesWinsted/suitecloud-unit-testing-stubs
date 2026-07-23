module.exports = (function () {

  // N/dataset Module Members

  var dataset = function() {};

  // Object

  var Column = function() {};

  var Condition = function() {};

  var Dataset = function() {};

  var Join = function() {};

  dataset.prototype.Column = Column;

  dataset.prototype.Condition = Condition;

  dataset.prototype.Dataset = Dataset;

  dataset.prototype.Join = Join;

  // Method

  dataset.prototype.create = function(options) {};
  
  dataset.prototype.createColumn = function(options) {};

  dataset.prototype.createCondition = function(options) {};

  dataset.prototype.createJoin = function(options) {};

  dataset.prototype.createTranslation = function(options) {};

  dataset.prototype.describe = function(options) {};

  dataset.prototype.describe.promise = function(options) {};

  dataset.prototype.list = function() {};

  dataset.prototype.listPaged = function(options) {};

  dataset.prototype.load = function(options) {};

  dataset.prototype.load.promise = function(options) {};

  // Column Object Properties

  Column.prototype.alias = undefined;

  Column.prototype.fieldId = undefined;

  Column.prototype.formula = undefined;

  Column.prototype.id = undefined;

  Column.prototype.join = undefined;

  Column.prototype.label = undefined;

  Column.prototype.type = undefined;

  // Condition Object Properties

  Condition.prototype.caseSensitive = undefined;

  Condition.prototype.children = undefined;

  Condition.prototype.column = undefined;

  Condition.prototype.operator = undefined;

  Condition.prototype.values = undefined;

  // Dataset Object Methods

  Dataset.prototype.getExpressionFromColumn = function(options) {};

  Dataset.prototype.run = function() {};

  Dataset.prototype.run.promise = function() {};

  Dataset.prototype.runPaged = function() {};

  Dataset.prototype.save = function() {};

  // Dataset Object Properties

  Dataset.prototype.columns = undefined;

  Dataset.prototype.condition = undefined;

  Dataset.prototype.description = undefined;

  Dataset.prototype.id = undefined;

  Dataset.prototype.name = undefined;

  Dataset.prototype.type = undefined;

  // Join Object Properties

  Join.prototype.fieldId = undefined;

  Join.prototype.join = undefined;

  Join.prototype.source = undefined;

  Join.prototype.target = undefined;

  return new dataset();

})();