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
    this.ACTION = 'ACTION';
    this.ADVANCEDREVREC = 'ADVANCEDREVREC';
    this.BANKCONNECTIVITY = 'BANKCONNECTIVITY';
    this.BANKSTATEMENTPARSER = 'BANKSTATEMENTPARSER';
    this.BUNDLE_INSTALLATION = 'BUNDLEINSTALLATION';
    this.CLIENT = 'CLIENT';
    this.CONSOLRATEADJUSTOR = 'CONSOLRATEADJUSTOR';
    this.CSV_IMPORT = 'CSVIMPORT';
    this.CUSTOMGLLINES = 'CUSTOMGLLINES';
    this.CUSTOM_MASSUPDATE = 'CUSTOMMASSUPDATE';
    this.DEBUGGER = 'DEBUGGER';
    this.EMAIL_CAPTURE = 'EMAILCAPTURE';
    this.FICONNECTIVITY = 'FICONNECTIVITY';
    this.MAP_REDUCE = 'MAPREDUCE';
    this.NONE = 'NONE';
    this.PAYMENTGATEWAY = 'PAYMENTGATEWAY';
    this.PAYMENTPOSTBACK = 'PAYMENTPOSTBACK';
    this.PLATFORMEXTENSION = 'PLATFORMEXTENSION';
    this.PORTLET = 'PORTLET';
    this.PROMOTIONS = 'PROMOTIONS';
    this.RESTLET = 'RESTLET';
    this.REST_WEBSERVICES = 'RESTWEBSERVICES';
    this.SCHEDULED = 'SCHEDULED';
    this.SDF_INSTALLATION = 'SDFINSTALLATION';
    this.SHIPPING_PARTNERS = 'SHIPPINGPARTNERS';
    this.SUITELET = 'SUITELET';
    this.TAX_CALCULATION = 'TAXCALCULATION';
    this.USEREVENT = 'USEREVENT';
    this.USER_INTERFACE = 'USERINTERFACE';
    this.WEBAPPLICATION = 'WEBAPPLICATION';
    this.WEBSERVICES = 'WEBSERVICES';
    this.WEBSTORE = 'WEBSTORE';
    this.WORKFLOW = 'WORKFLOW';
  }

  function EnvType() {
    this.SANDBOX = 'SANDBOX';
    this.PRODUCTION = 'PRODUCTION';
    this.BETA = 'BETA';
    this.INTERNAL = 'INTERNAL';
  }

  function Permission() {
    this.FULL = 'FULL';
    this.EDIT = 'EDIT';
    this.CREATE = 'CREATE';
    this.VIEW = 'VIEW';
    this.NONE = 'NONE';
  }

  runtime.prototype.ContextType = new ContextType();

  runtime.prototype.EnvType = new EnvType();

  runtime.prototype.Permission = new Permission();

  return new runtime();
})();