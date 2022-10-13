module.exports = (function () {

  // N/ui/message Module Members

  var message = function () { };

  // Object

  var Message = function () { };

  message.prototype.Message = Message;

  // Method

  message.prototype.create = function (options) { };

  // Message Object Methods

  Message.prototype.hide = function () { };

  Message.prototype.show = function () { };

  // Enum

  function Type() {
    this.CONFIRMATION = 0;
    this.INFORMATION = 1;
    this.WARNING = 2;
    this.ERROR = 3;
  }

  message.prototype.Type = new Type();

  return new message();
})();