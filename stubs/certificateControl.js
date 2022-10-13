module.exports = (function () {

  // N/certificateControl Module Members

  var certificateControl = function () { };

  // Object

  var Certificate = function () { };

  certificateControl.prototype.Certificate = Certificate;

  // Method

  certificateControl.prototype.findCertificates = function (options) { };

  certificateControl.prototype.findUsages = function (options) { };

  certificateControl.prototype.createCertificate = function (options) { };

  certificateControl.prototype.deleteCertificate = function (options) { };

  certificateControl.prototype.loadCertificate = function (options) { };

  // Certificate Object Methods

  Certificate.prototype.save = function () { };

  // Enum

  function Type() {
    this.PFX = "PFX";
    this.P12 = "P12";
    this.PEM = "PEM";
  }

  function Operation() {
    this.CONNECT = 'connect';
    this.DELETE = 'delete';
    this.FIND = 'find';
    this.GET = 'get';
    this.HEAD = 'head';
    this.POST = 'post';
    this.PUT = 'put';
    this.SIGN_STRING = 'signstring';
    this.SIGN_XML = 'signxml';
    this.VERIFY_STRING = 'verifystring';
    this.VERIFY_XML = 'verifyxml';
  }

  function Operator() {
    this.CONTAINS = "contains";
    this.END_WITH = "endswith";
    this.EQUALS = "equals";
    this.STARTS_WITH = "startswith";
  }

  certificateControl.prototype.Type = new Type();

  certificateControl.prototype.Operation = new Operation();

  certificateControl.prototype.Operator = new Operator();

  return new certificateControl();
})();