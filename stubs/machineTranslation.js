module.exports = (function () {

  // N/machineTranslation Module Members

  var machineTranslation = function() {};

  // Object

  var Document = function() {};

  var Error = function() {};

  var Response = function() {};

  machineTranslation.prototype.Document = Document;

  machineTranslation.prototype.Error = Error;

  machineTranslation.prototype.Response = Response;

  // Method

  machineTranslation.prototype.createDocument = function(options) {};

  machineTranslation.prototype.translate = function(options) {};

  machineTranslation.prototype.translate.promise = function(options) {};

  // Document Object Properties

  Document.prototype.id = undefined;

  Document.prototype.language = undefined;

  Document.prototype.text = undefined;

  // Error Object Properties

  Error.prototype.documentId = undefined;

  Error.prototype.message = undefined;

  // Response Object Properties

  Response.prototype.errors = undefined;

  Response.prototype.results = undefined;

  // Enum

  function Language() {
    this.ARABIC = "ARABIC";
    this.BRAZILIAN_PORTUGUESE = "BRAZILIAN_PORTUGUESE";
    this.CANADIAN_FRENCH = "CANADIAN_FRENCH";
    this.CROATIAN = "CROATIAN";
    this.CZECH = "CZECH";
    this.DANISH = "DANISH";
    this.DUTCH = "DUTCH";
    this.ENGLISH = "ENGLISH";
    this.FINNISH = "FINNISH";
    this.FRENCH = "FRENCH";
    this.GERMAN = "GERMAN";
    this.GREEK = "GREEK";
    this.HEBREW = "HEBREW";
    this.HUNGARIAN = "HUNGARIAN";
    this.ITALIAN = "ITALIAN";
    this.JAPANESE = "JAPANESE";
    this.KOREAN = "KOREAN";
    this.NORWEGIAN = "NORWEGIAN";
    this.POLISH = "POLISH";
    this.PORTUGUESE = "PORTUGUESE";
    this.ROMANIAN = "ROMANIAN";
    this.RUSSIAN = "RUSSIAN";
    this.SIMPLIFIED_CHINESE = "SIMPLIFIED_CHINESE";
    this.SLOVAK = "SLOVAK";
    this.SLOVENIAN = "SLOVENIAN";
    this.SPANISH = "SPANISH";
    this.SWEDISH = "SWEDISH";
    this.THAI = "THAI";
    this.TRADITIONAL_CHINESE = "TRADITIONAL_CHINESE";
    this.TURKISH = "TURKISH";
    this.VIETNAMESE = "VIETNAMESE";
  }

  machineTranslation.prototype.Language = new Language();

  return new machineTranslation();
})();
