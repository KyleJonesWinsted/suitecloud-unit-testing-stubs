module.exports = (function () {

  // N/recordContext Module Members

  var recordContext = function() {};

  // Object

  var RecordContext = function() {};

  recordContext.prototype.RecordContext = RecordContext;

  // Method

  recordContext.prototype.getContext = function(options) {};

  // Enum

  function ContextType() {
    this.LOCALIZATION = "LOCALIZATION";
  }

  recordContext.prototype.ContextType = new ContextType();

  return new recordContext();
})();