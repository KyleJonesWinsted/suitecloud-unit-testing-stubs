module.exports = (function () {

  // N/format/i18n Module Members

  var format = function() {};

  // Object

  var CurrencyFormatter = function() {};

  var NumberFormatter = function() {};

  var PhoneNumberFormatter = function() {};

  var PhoneNumberParser = function() {};

  format.prototype.CurrencyFormatter = CurrencyFormatter;

  format.prototype.NumberFormatter = NumberFormatter;

  format.prototype.PhoneNumberFormatter = PhoneNumberFormatter;

  format.prototype.PhoneNumberParser = PhoneNumberParser;

  // Method

  format.prototype.spellOut = function(options) {};

  format.prototype.getCurrencyFormatter = function(options) {};

  format.prototype.getNumberFormatter = function(options) {};

  // Currency Formatter Object Methods

  CurrencyFormatter.prototype.format = function(options) {};

  // Number Formatter Object Methods

  NumberFormatter.prototype.format = function(options) {};

  // Phone Number Formatter Object Methods

  PhoneNumberFormatter.prototype.format = function(options) {};

  // Phone Number Parser Object Methods

  PhoneNumberParser.prototype.parse = function(options) {};

  // Enum

  function NegativeNumberFormat() {
    this.BRACKETS = "BRACKETS";
    this.MINUS = "MINUS";
  }

  function Currency() {
    this.USD = "USD";
    this.CAD = "CAD";
    this.EUR = "EUR";
    this.GBP = "GBP";
    this.JPY = "JPY";
  }

  format.prototype.NegativeNumberFormat = new NegativeNumberFormat();

  format.prototype.Currency = new Currency();

  return new format();
})();