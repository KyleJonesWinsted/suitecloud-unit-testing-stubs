module.exports = (function () {

  // N/certificateControl Module Members

  var certificateControl = function() {};

  // Object

  var Certificate = function() {};

  certificateControl.prototype.Certificate = Certificate;

  // Method

  certificateControl.prototype.findCertificates = function(options) {};

  certificateControl.prototype.findUsages = function(options) {};

  certificateControl.prototype.createCertificate = function(options) {};

  certificateControl.prototype.deleteCertificate = function(options) {};

  certificateControl.prototype.loadCertificate = function(options) {};

  // Certificate Object Methods

  Certificate.prototype.save = function() {};

  // Enum

  function Type() {
    this.PFX = "PFX";
    this.P12 = "P12";
    this.PEM = "PEM";
  }

  function Operation() {
    this.CONNECT = 'CONNECT';
    this.DELETE = 'DELETE';
    this.FIND = 'FIND';
    this.GET = 'GET';
    this.HEAD = 'HEAD';
    this.POST = 'POST';
    this.PUT = 'PUT';
    this.SIGN_STRING = 'SIGNSTRING';
    this.SIGN_XML = 'SIGNXML';
    this.VERIFY_STRING = 'VERIFYSTRING';
    this.VERIFY_XML = 'VERIFYXML';
  }

  function Operator() {
    this.CONTAINS = "CONTAINS";
    this.END_WITH = "ENDSWITH";
    this.EQUALS = "EQUALS";
    this.STARTS_WITH = "STARTSWITH";
  }

  certificateControl.prototype.Type = new Type();

  certificateControl.prototype.Operation = new Operation();

  certificateControl.prototype.Operator = new Operator();

  return new certificateControl();
})();