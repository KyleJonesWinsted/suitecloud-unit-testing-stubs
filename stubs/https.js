module.exports = (function() {

  // N/https Module Members

  var https = function() {};

  // Object

  var SecureString = function() {};

  var ClientResponse = function() {};

  var ServerRequest = function() {};

  var ServerResponse = function() {};

  https.prototype.SecureString = SecureString;

  https.prototype.ClientResponse = ClientResponse;

  https.prototype.ServerRequest = ServerRequest;
  
  https.prototype.ServerResponse = ServerResponse;

  // Method

  https.prototype.createSecureKey = function(options) {};

  https.prototype.createSecureKey.promise = function(options) {};

  https.prototype.createSecureString = function(options) {};

  https.prototype.createSecureString.promise = function(options) {};

  https.prototype["delete"] = function(options) {};

  https.prototype["delete"].promise = function(options) {};

  https.prototype.get = function(options) {};

  https.prototype.get.promise = function(options) {};

  https.prototype.post = function(options) {};

  https.prototype.post.promise = function(options) {};

  https.prototype.put = function(options) {};

  https.prototype.put.promise = function(options) {};

  https.prototype.request = function(options) {};

  https.prototype.request.promise = function(options) {};

  https.prototype.requestRestlet = function(options) {};

  https.prototype.requestSuiteTalkRest = function(options) {};

  // SecureString Object Methods

  SecureString.prototype.appendSecureString = function(options) {};

  SecureString.prototype.appendString = function(options) {};

  SecureString.prototype.convertEncoding = function(options) {};

  SecureString.prototype.hash = function(options) {};

  SecureString.prototype.hmac = function(options) {};

  // ServerRequest Object Methods

  ServerRequest.prototype.getLineCount = function(options) {};

  ServerRequest.prototype.getSublistValue = function(options) {};

  // ServerResponse Object Methods

  ServerResponse.prototype.addHeader = function(options) {};

  ServerResponse.prototype.getHeader = function(options) {};

  ServerResponse.prototype.renderPdf = function(options) {};

  ServerResponse.prototype.sendRedirect = function(options) {};

  ServerResponse.prototype.setCdnCachable = function(options) {};

  ServerResponse.prototype.setHeader = function(options) {};

  ServerResponse.prototype.write = function(options) {};

  ServerResponse.prototype.writeFile = function(options) {};

  ServerResponse.prototype.writeLine = function(options) {};

  ServerResponse.prototype.writePage = function(options) {};

  // Enum

  function CacheDuration() {
    this.LONG = "LONG";
    this.MEDIUM = "MEDIUM";
    this.SHORT = "SHORT";
    this.UNIQUE = "UNIQUE";
  }

  function Encoding() {
    this.UTF_8 = "UTF_8";
    this.BASE_16 = "BASE_16";
    this.BASE_32 = "BASE_32";
    this.BASE_64 = "BASE_64";
    this.BASE_64_URL_SAFE = "BASE_64_URL_SAFE";
    this.HEX = "HEX";
  }

  function HashAlg() {
    this.SHA1 = "SHA1";
    this.SHA256 = "SHA256";
    this.SHA512 = "SHA512";
    this.MD5 = "MD5";
  }

  function Method() {
    this.DELETE = "DELETE";
    this.GET = "GET";
    this.HEAD = "HEAD";
    this.POST = "POST";
    this.PUT = "PUT";
  }

  function RedirectType() {
    this.MEDIA_ITEM = "MEDIAITEM";
    this.RECORD = "RECORD";
    this.RESTLET = "RESTLET";
    this.SUITELET = "SUITELET";
    this.TASK_LINK = "TASKLINK";
  }

  https.prototype.CacheDuration = new CacheDuration();

  https.prototype.Encoding = new Encoding();

  https.prototype.HashAlg = new HashAlg();

  https.prototype.Method = new Method();

  https.prototype.RedirectType = new RedirectType();

  return new https();
})();