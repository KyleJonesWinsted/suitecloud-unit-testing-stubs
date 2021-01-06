module.exports = (function () {

  // N/render Module Members

  var render = function() {};

  // Object

  var EmailMergeResult = function() {};

  var TemplateRenderer = function() {};

  render.prototype.EmailMergeResult = EmailMergeResult;

  render.prototype.TemplateRenderer = TemplateRenderer;

  // Method

  render.prototype.bom = function(options) {};

  render.prototype.create = function() {};

  render.prototype.mergeEmail = function(options) {};

  render.prototype.packingSlip = function(options) {};

  render.prototype.pickingTicket = function(options) {};

  render.prototype.statement = function(options) {};

  render.prototype.transaction = function(options) {};

  render.prototype.xmlToPdf = function(options) {};

  // TemplateRenderer Object Methods

  TemplateRenderer.prototype.addCustomDataSource = function(options) {};
  
  TemplateRenderer.prototype.addQuery = function(options) {};

  TemplateRenderer.prototype.addRecord = function(options) {};

  TemplateRenderer.prototype.addSearchResults = function(options) {};

  TemplateRenderer.prototype.renderAsPdf = function() {};

  TemplateRenderer.prototype.renderPdfToResponse = function() {};

  TemplateRenderer.prototype.renderAsString = function() {};

  TemplateRenderer.prototype.setTemplateById = function() {};

  TemplateRenderer.prototype.setTemplateByScriptId = function(options) {};

  TemplateRenderer.prototype.renderToResponse = function(options) {};

  // Enum

  function DataSource() {
    this.JSON = "JSON";
    this.OBJECT = "OBJECT";
    this.XML_DOC = "XML_DOC";
    this.XML_STRING = "XML_STRING";
  }

  function PrintMode() {
    this.DEFAULT = "DEFAULT";
    this.HTML = "HTML";
    this.PDF = "PDF";
  }

  render.prototype.DataSource = new DataSource();

  render.prototype.PrintMode = new PrintMode();

  return new render();
})();