module.exports = (function () {

  // N/crypto Module Members

  var crypto = function() {};

  // Object

  var Cipher = function() {};

  var CipherPayload = function() {};

  var Decipher = function() {};

  var Hash = function() {};

  var Hmac = function() {};

  var SecretKey = function() {};

  crypto.prototype.Cipher = Cipher;

  crypto.prototype.CipherPayload = CipherPayload;

  crypto.prototype.Decipher = Decipher;

  crypto.prototype.Hash = Hash;

  crypto.prototype.Hmac = Hmac;

  crypto.prototype.SecretKey = SecretKey;

  // Method

  crypto.prototype.createCipher = function(options) {};

  crypto.prototype.createDecipher = function(options) {};

  crypto.prototype.createHash = function(options) {};

  crypto.prototype.createHmac = function(options) {};

  crypto.prototype.createSecretKey = function(options) {};

  // Cipher Object Methods

  Cipher.prototype.update = function(options) {};

  Cipher.prototype.final = function(options) {};

  // Decipher Object Methods

  Decipher.prototype.final = function(options) {};

  Decipher.prototype.update = function(options) {};

  // Hash Object Methods

  Hash.prototype.digest = function(options) {};

  Hash.prototype.update = function(options) {};

  // Hmac Object Methods

  Hmac.prototype.digest = function(options) {};

  Hmac.prototype.update = function(options) {};

  // Enum

  function EncryptionAlg() {
    this.AES = "AES";
  }

  function HashAlg() {
    this.SHA1 = "SHA1";
    this.SHA256 = "SHA256";
    this.SHA512 = "SHA512";
    this.MD5 = "MD5";
  }

  function Padding() {
    this.NoPadding = "NoPadding";
    this.PKCS5Padding = "PKCS5Padding";
  }

  crypto.prototype.EncryptionAlg = new EncryptionAlg();

  crypto.prototype.HashAlg = new HashAlg();

  crypto.prototype.Padding = new Padding();

  return new crypto();
})();