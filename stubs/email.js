module.exports = (function () {

  // N/email Module Members

  var email = function() {};

  // Method

  email.prototype.send = function(options) {};

  email.prototype.send.promise = function(options) {};

  email.prototype.sendBulk = function(options) {};

  email.prototype.sendBulk.promise = function(options) {};

  email.prototype.sendCampaignEvent = function(options) {};

  email.prototype.sendCampaignEvent.promise = function(options) {};
  
  return new email();
})();