module.exports = (function () {

  // N/keyControl Module Members

  var keyControl = function() {};

  // Object

  var Key = function() {};

  keyControl.prototype.Key = Key;

  // Method

  keyControl.prototype.findKeys = function(options) {};

  keyControl.prototype.createKey = function(options) {};

  keyControl.prototype.deleteKey = function(options) {};

  keyControl.prototype.loadKey = function(options) {};

  // Key Object Methods

  Key.prototype.save = function() {};

  // Enum

  function Operator() {
    this.STARTS_WITH = "startswith";
    this.CONTAINS = "contains";
    this.ENDS_WITH = "endswith";
    this.EQUALS = "equals";
  }

  keyControl.prototype.Operator = new Operator();

  return new keyControl();
})();