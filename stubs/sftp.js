module.exports = (function () {


  // N/sftp Module Members

  var sftp = function() {};

  // Object

  var Connection = function() {};

  sftp.prototype.Connection = Connection;

  // Method

  sftp.prototype.createConnection = function(options) {};

  // Connection Object Methods

  Connection.prototype.download = function(options) {};

  Connection.prototype.upload = function(options) {};

  Connection.prototype.makeDirectory = function(options) {};

  Connection.prototype.removeDirectory = function(options) {};

  Connection.prototype.removeFile = function(options) {};

  Connection.prototype.move = function(options) {};

  Connection.prototype.list = function(options) {};

  // Connection Object Enums

  Connection.prototype.MAX_FILE_SIZE = 100000000;

  Connection.prototype.MAX_TRANSFER_TIMEOUT = 300;

  // Enum

  sftp.prototype.MAX_CONNECT_TIMEOUT = 20;

  sftp.prototype.MIN_CONNECT_TIMEOUT = 1;

  sftp.prototype.MAX_PORT_NUMBER = 65535;

  sftp.prototype.MIN_PORT_NUMBER = 0;

  sftp.prototype.DEFAULT_PORT_NUMBER = 22;

  function Sort() {
    this.DATE = "DATE";
    this.DATE_DESC = "DATE_DESC";
    this.SIZE = "SIZE";
    this.SIZE_DESC = "SIZE_DESC";
    this.NAME = "NAME";
    this.NAME_DESC = "NAME_DESC";
  }

  sftp.prototype.Sort = new Sort();

  return new sftp();
})();