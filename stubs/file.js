module.exports = (function () {

  // N/file Module Members

  var file = function() {};

  // Object

  var File = function() {};

  var Reader = function() {};

  file.prototype.File = File;

  file.prototype.Reader = Reader;

  // Method

  file.prototype.copy = function(options) {};

  file.prototype.create = function(options) {};

  file.prototype["delete"] = function(options) {};

  file.prototype.load = function(options) {};

  // File Object Methods

  File.prototype.appendLine = function(options) {};

  File.prototype.getContents = function() {};

  File.prototype.lines = [];

  Object.defineProperty(Array.prototype, 'iterator', {
    value: function() {
      return {
        each: (callback) => {
          for (const line of this) {
            const shouldContinue = callback(line);
            if (!shouldContinue) break;
          }
        }
      }
    }
  });

  File.prototype.resetStream = function() {};

  File.prototype.save = function() {};

  File.prototype.getReader = function() {};

  File.prototype.getSegments = function(options) {};

  // Reader Object Methods

  Reader.prototype.readUntil = function(options) {};

  Reader.prototype.readChars = function(options) {};

  // Enum

  function Encoding() {
    this.UTF_8 = "UTF_8";
    this.WINDOWS_1252 = "WINDOWS_1252";
    this.ISO_8859_1 = "ISO_8859_1";
    this.GB18030 = "GB18030";
    this.SHIFT_JIS = "SHIFT_JIS";
    this.MAC_ROMAN = "MAC_ROMAN";
    this.GB2312 = "GB2312";
    this.BIG5 = "BIG5";
  }

  function NameConflictResolution() {
    this.FAIL = 'FAIL'; 
    this.OVERWRITE = 'OVERWRITE'; 
    this.RENAME_TO_UNIQUE = 'RENAME_TO_UNIQUE'; 
  }

  function Type() {
    this.APPCACHE = "APPCACHE";
    this.AUTOCAD = "AUTOCAD";
    this.BMPIMAGE = "BMPIMAGE";
    this.CERTIFICATE = "CERTIFICATE";
    this.CONFIG = "CONFIG";
    this.CSV = "CSV";
    this.EXCEL = "EXCEL";
    this.FLASH = "FLASH";
    this.FREEMARKER = "FREEMARKER";
    this.GIFIMAGE = "GIFIMAGE";
    this.GZIP = "GZIP";
    this.HTMLDOC = "HTMLDOC";
    this.ICON = "ICON";
    this.JAVASCRIPT = "JAVASCRIPT";
    this.JPGIMAGE = "JPGIMAGE";
    this.JSON = "JSON";
    this.MESSAGERFC = "MESSAGERFC";
    this.MP3 = "MP3";
    this.MPEGMOVIE = "MPEGMOVIE";
    this.MSPROJECT = "MSPROJECT";
    this.PDF = "PDF";
    this.PJPGIMAGE = "PJPGIMAGE";
    this.PLAINTEXT = "PLAINTEXT";
    this.PNGIMAGE = "PNGIMAGE";
    this.POSTSCRIPT = "POSTSCRIPT";
    this.POWERPOINT = "POWERPOINT";
    this.QUICKTIME = "QUICKTIME";
    this.RTF = "RTF";
    this.SCSS = "SCSS";
    this.SMS = "SMS";
    this.STYLESHEET = "STYLESHEET";
    this.SVG = "SVG";
    this.TAR = "TAR";
    this.TIFFIMAGE = "TIFFIMAGE";
    this.VISIO = "VISIO";
    this.WEBAPPPAGE = "WEBAPPPAGE";
    this.WEBAPPSCRIPT = "WEBAPPSCRIPT";
    this.WORD = "WORD";
    this.XMLDOC = "XMLDOC";
    this.XSD = "XSD";
    this.ZIP = "ZIP";
  }

  file.prototype.Encoding = new Encoding();

  file.prototype.NameConflictResolution = new NameConflictResolution();

  file.prototype.Type = new Type();

  return new file();
})();