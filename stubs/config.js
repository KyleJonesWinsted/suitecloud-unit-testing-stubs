module.exports = (function () {

  // N/config Module Members

  var config = function() {};

  // Method

  config.prototype.load = function(options) {};

  // Enum

  function Type() {
    this.USER_PREFERENCES = 'USERPREFERENCES';
    this.COMPANY_INFORMATION = 'COMPANYINFORMATION';
    this.COMPANY_PREFERENCES = 'COMPANYPREFERENCES';
    this.ACCOUNTING_PREFERENCES = 'ACCOUNTINGPREFERENCES';
    this.ACCOUNTING_PERIODS = 'ACCOUNTINGPERIODS';
    this.MANUFACTURING_PREFERENCES = 'MANUFACTURINGPREFERENCES';
    this.TAX_PERIODS = 'TAXPERIODS';
    this.FEATURES = 'FEATURES';
    this.TIME_POST = 'TIMEPOST';
    this.TIME_VOID = 'TIMEVOID';
  }

  config.prototype.Type = new Type();

  return new config();
})();