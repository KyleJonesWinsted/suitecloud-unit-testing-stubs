module.exports = (function () {

  // N/config Module Members

  var config = function () { };

  // Method

  config.prototype.load = function (options) { };

  // Enum

  function Type() {
    this.USER_PREFERENCES = 'userpreferences';
    this.COMPANY_INFORMATION = 'companyinformation';
    this.COMPANY_PREFERENCES = 'companypreferences';
    this.ACCOUNTING_PREFERENCES = 'accountingpreferences';
    this.ACCOUNTING_PERIODS = 'accountingperiods';
    this.MANUFACTURING_PREFERENCES = 'manufacturingpreferences';
    this.TAX_PERIODS = 'taxperiods';
    this.FEATURES = 'features';
    this.TIME_POST = 'timepost';
    this.TIME_VOID = 'timevoid';
  }

  config.prototype.Type = new Type();

  return new config();
})();