module.exports = (function () {

  // N/currentRecord Module Members

  var currentRecord = function() {};

  // Object

  var Column = function() {};

  var CurrentRecord = function() {};

  var Field = function() {};

  var Sublist = function() {};

  currentRecord.prototype.Column = Column;

  currentRecord.prototype.CurrentRecord = CurrentRecord;

  currentRecord.prototype.Field = Field;

  currentRecord.prototype.Sublist = Sublist;

  // Method

  currentRecord.prototype.get = function() {};

  currentRecord.prototype.get.promise = function() {};

  // CurrentRecord Object Methods

  CurrentRecord.prototype.cancelLine = function(options) {};

  CurrentRecord.prototype.commitLine = function(options) {};

  CurrentRecord.prototype.findMatrixSublistLineWithValue = function(options) {};

  CurrentRecord.prototype.findSublistLineWithValue = function(options) {};

  CurrentRecord.prototype.getCurrentMatrixSublistValue = function(options) {};

  CurrentRecord.prototype.getCurrentSublistIndex = function(options) {};

  CurrentRecord.prototype.getCurrentSublistSubrecord = function(options) {};

  CurrentRecord.prototype.getCurrentSublistText = function(options) {};

  CurrentRecord.prototype.getCurrentSublistValue = function(options) {};

  CurrentRecord.prototype.getField = function(options) {};

  CurrentRecord.prototype.getLineCount = function(options) {};

  CurrentRecord.prototype.getMatrixHeaderCount = function(options) {};

  CurrentRecord.prototype.getMatrixHeaderField = function(options) {};

  CurrentRecord.prototype.getMatrixHeaderValue = function(options) {};

  CurrentRecord.prototype.getMatrixSublistField = function(options) {};

  CurrentRecord.prototype.getMatrixSublistValue = function(options) {};

  CurrentRecord.prototype.getSublist = function(options) {};

  CurrentRecord.prototype.getSublistField = function(options) {};

  CurrentRecord.prototype.getSublistText = function(options) {};

  CurrentRecord.prototype.getSublistValue = function(options) {};

  CurrentRecord.prototype.getSubrecord = function(options) {};

  CurrentRecord.prototype.getText = function(options) {};

  CurrentRecord.prototype.getValue = function(options) {};

  CurrentRecord.prototype.hasCurrentSublistSubrecord = function(options) {};

  CurrentRecord.prototype.hasSublistSubrecord = function(options) {};

  CurrentRecord.prototype.hasSubrecord = function(options) {};

  CurrentRecord.prototype.insertLine = function(options) {};

  CurrentRecord.prototype.removeCurrentSublistSubrecord = function(options) {};

  CurrentRecord.prototype.removeLine = function(options) {};

  CurrentRecord.prototype.removeSubrecord = function(options) {};

  CurrentRecord.prototype.selectLine = function(options) {};

  CurrentRecord.prototype.selectNewLine = function(options) {};

  CurrentRecord.prototype.setCurrentMatrixSublistValue = function(options) {};

  CurrentRecord.prototype.setCurrentSublistText = function(options) {};

  CurrentRecord.prototype.setCurrentSublistValue = function(options) {};

  CurrentRecord.prototype.setMatrixHeaderValue = function(options) {};

  CurrentRecord.prototype.setMatrixSublistValue = function(options) {};

  CurrentRecord.prototype.setText = function(options) {};

  CurrentRecord.prototype.setValue = function(options) {};

  // Field Object Methods

  Field.prototype.getSelectOptions = function(options) {};

  Field.prototype.insertSelectOption = function(options) {};

  Field.prototype.removeSelectOptions = function(options) {};

  // Sublist Object Members

  Sublist.prototype.getColumn = function(options) {};
  
  return new currentRecord();
})();