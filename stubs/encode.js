module.exports = (function () {

  // N/encode Module Members

  var encode = function() {};

  // Method

  encode.prototype.convert = function(options) {};

  // Enum

  function Encoding() {
    this.UTF_8 = "UTF_8";
    this.BASE_16 = "BASE_16";
    this.BASE_32 = "BASE_32";
    this.BASE_64 = "BASE_64";
    this.BASE_64_URL_SAFE = "BASE_64_URL_SAFE";
    this.HEX = "HEX";
  }

  encode.prototype.Encoding = new Encoding();

  return new encode();
})();