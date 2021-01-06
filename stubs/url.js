module.exports = (function () {

  // N/url Module Members

  var url = function() {};

  // Method

  url.prototype.format = function(options) {};

  url.prototype.resolveDomain = function(options) {};

  url.prototype.resolveRecord = function(options) {};

  url.prototype.resolveScript = function(options) {};

  url.prototype.resolveTaskLink = function(options) {};

  // Enum

  function HostType() {
    this.APPLICATION = 'APPLICATION';
    this.FORM = 'FORM';
    this.RESTLET = 'RESTLET';
    this.SUITETALK = 'SUITETALK';
  }

  url.prototype.HostType = new HostType();

  return new url();
})();