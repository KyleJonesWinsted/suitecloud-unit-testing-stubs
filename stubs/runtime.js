module.exports = (function () {
  
  // N/runtime Module members

  var runtime = function() {};

  // Object

  var Script = function() {};

  var Session = function() {};

  var User = function() {};

  runtime.prototype.Script = Script;
  
  runtime.prototype.Session = Session;

  runtime.prototype.User = User;

  // Method

  runtime.prototype.getCurrentScript = function() {};

  runtime.prototype.getCurrentSession = function() {};

  runtime.prototype.getCurrentUser = function () {};

  runtime.prototype.isFeatureInEffect = function(options) {};

  // Script Object Methods

  Script.prototype.getParameter = function(options) {};

  Script.prototype.getRemainingUsage = function() {};

  // Session Object Methods

  Session.prototype.get = function(options) {};

  Session.prototype.set = function(options) {};
  
  // User Object Methods

  User.prototype.getPermission = function(options) {};

  User.prototype.getPreference = function(options) {};

  // Enum

  function ContextType() {
    this.USER_INTERFACE = "USERINTERFACE";
    this.WEBSERVICES = "WEBSERVICES";
    this.REST_WEBSERVICES = "RESTWEBSERVICES";
    this.WEBSTORE = "WEBSTORE";
    this.PORTLET = "PORTLET";
    this.SCHEDULED = "SCHEDULED";
    this.SUITELET = "SUITELET";
    this.CSV_IMPORT = "CSVIMPORT";
    this.CUSTOM_MASSUPDATE = "CUSTOMMASSUPDATE";
    this.WORKFLOW = "WORKFLOW";
    this.USEREVENT = "USEREVENT";
    this.ACTION = "ACTION";
    this.DEBUGGER = "DEBUGGER";
    this.CLIENT = "CLIENT";
    this.BUNDLE_INSTALLATION = "BUNDLEINSTALLATION";
    this.RESTLET = "RESTLET";
    this.WEBAPPLICATION = "WEBAPPLICATION";
    this.PAYMENTGATEWAY = "PAYMENTGATEWAY";
    this.PAYMENTPOSTBACK = "PAYMENTPOSTBACK";
    this.CONSOLRATEADJUSTOR = "CONSOLRATEADJUSTOR";
    this.PROMOTIONS = "PROMOTIONS";
    this.CUSTOMGLLINES = "CUSTOMGLLINES";
    this.TAX_CALCULATION = "TAXCALCULATION";
    this.SHIPPING_PARTNERS = "SHIPPINGPARTNERS";
    this.EMAIL_CAPTURE = "EMAILCAPTURE";
    this.MAP_REDUCE = "MAPREDUCE";
    this.SDF_INSTALLATION = "SDFINSTALLATION";
    this.ADVANCEDREVREC = "ADVANCEDREVREC";
    this.DATASETBUILDER = "DATASETBUILDER";
    this.WORKBOOKBUILDER = "WORKBOOKBUILDER";
    this.BANKCONNECTIVITY = "BANKCONNECTIVITY";
    this.FICONNECTIVITY = "FICONNECTIVITY";
    this.FIPARSER = "FIPARSER";
    this.BANKSTATEMENTPARSER = "BANKSTATEMENTPARSER";
    this.PLATFORMEXTENSION = "PLATFORMEXTENSION";
    this.RECORDACTION = "RECORDACTION";
    this.NONE = "NONE";
  }

  function EnvType() {
    this.SANDBOX = "SANDBOX";
    this.PRODUCTION = "PRODUCTION";
    this.BETA = "BETA";
    this.INTERNAL = "INTERNAL";
  }

  function Permission() {
    this.FULL = 4;
    this.EDIT = 3;
    this.CREATE = 2;
    this.VIEW = 1;
    this.NONE = 0;
  }

  runtime.prototype.ContextType = new ContextType();

  runtime.prototype.EnvType = new EnvType();

  runtime.prototype.Permission = new Permission();

  return new runtime();
})();