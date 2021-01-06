module.exports = (function () {

  // N/compress Module Members

  var compress = function() {};

  // Object

  var Archiver = function() {};

  compress.prototype.Archiver = Archiver;

  // Method

  compress.prototype.createArchiver = function() {};

  compress.prototype.gunzip = function(options) {};

  compress.prototype.gzip = function(options) {};

  // Archiver Object Methods

  Archiver.prototype.add = function(options) {};

  Archiver.prototype.archive = function(options) {};

  // Enum

  function Type() {
    this.CPIO = "CPIO";
    this.TAR = "TAR";
    this.TBZ2 = "TBZ2";
    this.TGZ = "TGZ";
    this.ZIP = "ZIP";
  }

  compress.prototype.Type = new Type();

  return new compress();
})();