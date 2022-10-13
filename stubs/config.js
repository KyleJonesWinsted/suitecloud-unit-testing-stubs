module.exports = (function () {

  // N/config Module Members

  var config = function() {};

  // Method

  config.prototype.load = function(options) {};

  // Enum

  function Type() {
    this.USER_PREFERENCES = "userpreferences";
    this.COMPANY_INFORMATION = "companyinformation";
    this.COMPANY_PREFERENCES = "companypreferences";
    this.ACCOUNTING_PREFERENCES = "accountingpreferences";
    this.MANUFACTURING_PREFERENCES = "manufacturingpreferences";
    this.ACCOUNTING_PERIODS = "accountingperiods";
    this.TAX_PERIODS = "taxperiods";
    this.FEATURES = "companyfeatures";
    this.TIME_POST = "timepost";
    this.TIME_VOID = "timevoid";
  }

  config.prototype.Type = new Type();

  return new config();
})();