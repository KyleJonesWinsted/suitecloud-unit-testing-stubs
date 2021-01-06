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

  dataset.prototype.list = function() {};

  dataset.prototype.load = function(options) {};

  // Dataset Object Methods

  Dataset.prototype.getExpressionFromColumn = function(options) {};

  Dataset.prototype.run = function() {};

  Dataset.prototype.runPaged = function() {};

  Dataset.prototype.save = function() {};

  return new dataset();

})();