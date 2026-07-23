module.exports = (function () {

  // N/scriptTypes/restlet Module Members

  var restlet = function() {};

  // Object

  var Response = function() {};

  restlet.prototype.Response = Response;

  // Method

  restlet.prototype.createResponse = function(options) {};

  // Response Object Properties

  Response.prototype.content = undefined;

  Response.prototype.contentType = undefined;

  return new restlet();

})();
