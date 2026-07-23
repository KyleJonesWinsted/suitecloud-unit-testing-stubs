module.exports = (function () {

  // N/pgp Module Members

  var pgp = function() {};

  // Object

  var Config = function() {};

  var Key = function() {};

  var KeyId = function() {};

  var Message = function() {};

  var MessageData = function() {};

  var Verification = function() {};

  var VerificationSignature = function() {};

  pgp.prototype.Config = Config;

  pgp.prototype.Key = Key;

  pgp.prototype.KeyId = KeyId;

  pgp.prototype.Message = Message;

  pgp.prototype.MessageData = MessageData;

  pgp.prototype.Verification = Verification;

  pgp.prototype.VerificationSignature = VerificationSignature;

  // Method

  pgp.prototype.createConfig = function(options) {};

  pgp.prototype.createMessageData = function(options) {};

  pgp.prototype.createSigner = function(options) {};

  pgp.prototype.createVerification = function() {};

  pgp.prototype.loadKeyFromSecret = function(options) {};

  pgp.prototype.parseKey = function(options) {};

  pgp.prototype.parseMessage = function(options) {};

  // Config Object Properties

  Config.prototype.allowInsecureDecryptionWithSigningKeys = undefined;

  Config.prototype.allowMessagesWithoutIntegrityProtection = undefined;

  Config.prototype.useRelaxedSignatureParsing = undefined;

  // KeyId Object Methods

  KeyId.prototype.asHex = function() {};

  // Message Object Methods

  Message.prototype.asArmored = function() {};

  Message.prototype.decrypt = function(options) {};

  Message.prototype.toMessageData = function() {};

  // Message Object Properties

  Message.prototype.type = undefined;

  // MessageData Object Methods

  MessageData.prototype.encrypt = function(options) {};

  MessageData.prototype.getText = function() {};

  MessageData.prototype.toMessage = function() {};

  // MessageData Object Properties

  MessageData.prototype.date = undefined;

  MessageData.prototype.filename = undefined;

  MessageData.prototype.format = undefined;

  // Verification Object Properties

  Verification.prototype.signatures = undefined;

  // VerificationSignature Object Properties

  VerificationSignature.prototype.dateSigned = undefined;

  VerificationSignature.prototype.keyId = undefined;

  VerificationSignature.prototype.problems = undefined;

  VerificationSignature.prototype.verified = undefined;

  // Enum

  function CompressionAlgorithm() {
    this.ZLIB = "ZLIB";
  }

  function Format() {
    this.UTF8 = "UTF8";
    this.BINARY = "BINARY";
  }

  pgp.prototype.CompressionAlgorithm = new CompressionAlgorithm();

  pgp.prototype.Format = new Format();

  return new pgp();
})();
