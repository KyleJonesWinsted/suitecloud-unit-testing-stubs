module.exports = (function () {

  // N/crypto/certificate Module Members

  var certificate = function() {};

  // Object

  var SignedXml = function() {};

  var Signer = function() {};

  var Verifier = function() {};

  certificate.prototype.SignedXml = SignedXml;

  certificate.prototype.Signer = Signer;

  certificate.prototype.Verifier = Verifier;

  // Method

  certificate.prototype.verifyXmlSignature = function(options) {};

  certificate.prototype.createSigner = function(options) {};

  certificate.prototype.createVerifier = function(options) {};

  certificate.prototype.signXml = function(options) {};

  // Signer Object Methods

  Signer.prototype.sign = function(options) {};

  Signer.prototype.update = function(options) {};

  // Verifier Object Methods

  Verifier.prototype.update = function(options) {};

  Verifier.prototype.verify = function(options) {};

  // SignedXml Object Methods

  SignedXml.prototype.asFile = function() {};

  SignedXml.prototype.asString = function() {};

  SignedXml.prototype.asXml = function() {};

  // Enum

  function HashAlg() {
    this.SHA1 = "SHA1";
    this.SHA256 = "SHA256";
    this.SHA384 = "SHA384";
    this.SHA512 = "SHA512";
  }

  certificate.prototype.HashAlg = new HashAlg();

  return new certificate();
})();