module.exports = (function () {

  // N/http Module Members

  var http = function() {};

  // Object

  var ClientResponse = function() {};

  var ServerRequest = function() {};

  var ServerResponse = function() {};

  http.prototype.ClientResponse = ClientResponse;

  http.prototype.ServerRequest = ServerRequest;

  http.prototype.ServerResponse = ServerResponse;

  // Method

  http.prototype["delete"] = function(options) {};

  http.prototype["delete"].promise = function(options) {};

  http.prototype.get = function(options) {};

  http.prototype.get.promise = function(options) {};

  http.prototype.post = function(options) {};

  http.prototype.post.promise = function(options) {};

  http.prototype.put = function(options) {};

  http.prototype.put.promise = function(options) {};

  http.prototype.request = function(options) {};

  http.prototype.request.promise = function(options) {};

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

  function Method() {
    this.DELETE = "DELETE";
    this.GET = "GET";
    this.HEAD = "HEAD";
    this.PUT = "PUT";
    this.POST = "POST";
  }

  function RedirectType() {
    this.MEDIA_ITEM = "MEDIA_ITEM";
    this.RECORD = "RECORD";
    this.RESTLET = "RESTLET";
    this.SUITELET = "SUITELET";
    this.TASK_LINK = "TASK_LINK";
  }

  http.prototype.CacheDuration = new CacheDuration();

  http.prototype.Method = new Method();

  http.prototype.RedirectType = new RedirectType();

  return new http();
})();